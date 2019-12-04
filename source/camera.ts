import backGround from "./backgroud";

export default class Camera{
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    constructor(p_width: number, p_height: number){
        this._x = 0;
        this._y = 0
        this._width = p_width;
        this._height = p_height;
    }

    public centerCamera(background: backGround){
        this._x = (background.width - Number(this._width))/2;
        this._y = (background.height - Number(this._height))/2;
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    
    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(p_x: number){
        this._x = p_x
    }

    set y(p_y: number){
        this._y = p_y;
    }
}