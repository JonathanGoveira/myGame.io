import Vector2D from "./utils/vectors";

export default class BackGround {
    private _x: number;
    private _y: number;
    private _width: number;
    private _height: number;

    constructor(p_x: number, p_y: number, p_width: number, p_height: number) {
        this._x = p_x;
        this._y = p_y;
        this._width = p_width;
        this._height = p_height;
    }

    createBackGround(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        // faz as linhas no eixo y
        for (let y = 0; y <= this._width; y += 40) {
            ctx.beginPath();
            ctx.moveTo(y, 0);
            ctx.lineTo(y, this._height);
            ctx.strokeStyle = "LightGrey";
            ctx.stroke();
            ctx.closePath();
        }
        // faz as linhas no eixo x
        for (let x = 0; x <= this._height; x += 40) {
            ctx.beginPath();
            ctx.moveTo(0, x);
            ctx.lineTo(this._width, x);
            ctx.strokeStyle = "Silver";
            ctx.stroke();
            ctx.closePath();
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}