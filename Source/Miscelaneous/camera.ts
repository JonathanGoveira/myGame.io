import Background from "./background";
import Vector2D from "../Utils/vectors";

export default class Camera{
    private _position: Vector2D
    private _size: Vector2D

    constructor(p_position: Vector2D){
        this._position = Vector2D.Zero
        this._size = p_position
    }

    public centerCamera(object: any){
        this._position.x = (object.x - 1);
        this._position.y = (object.y - 1);
    }

    public lerp(start: number, end: number, amt: number){
        return(1-amt)*start+amt*end
    }
    public lerpCamera(object: any){
        this.x = this.lerp(this.x, object.x, 0.1)
        this.y = this.lerp(this.y, object.y, 0.1)
    }

    public limitsCamera(background: Background){
        //console.log("camera "+(this.x))
        //console.log("background "+background.width)
        if (this.x  < -(background.width)) this.x = -background.width;
        if ((this.x + (this.width*background.width) >= background.width)) this.x = background.width - this.height*background.width;
        if (this.y  < -background.height) this.y = -background.height;
        if ((this.y + (this.height*background.height) >= background.height)) this.y = background.height - this.height*background.height;
    }

    get width()  { return this._size.w; }
    get height() { return this._size.h; }
    get x()      { return this._position.x; }
    get y()      { return this._position.y; }

    set x(p_x: number) { this._position.x = p_x; }
    set y(p_y: number) { this._position.y = p_y; }
}