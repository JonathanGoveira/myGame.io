import Vector2D from "../Utils/vectors"
export default class Instance{
    protected position: Vector2D;
    protected _width: number;
    protected _height: number;
    protected angle: number = 0;

    constructor (p_position: Vector2D,p_w: number, p_h: number){
        this.position = p_position;
        this._width = p_w;
        this._height = p_h;
    }

    get x(){
        return this.position.x;
    }

    get y(){
        return this.position.y;
    }

    set x(p_x: number){
        this.position.x = p_x
    }

    set y(p_y: number){
        this.position.y = p_y
    }
    
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}