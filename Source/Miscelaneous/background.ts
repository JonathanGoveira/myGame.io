import Vector2D from "../Utils/vectors";
import Game from "../Core/game";

export default class Background {
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

    public CreateBackground() {
        // faz as linhas no eixo y
        for (let y = 0; y <= this._width; y += 40) {
            Game.ctx.beginPath();
            Game.ctx.moveTo(y, 0);
            Game.ctx.lineTo(y, this._height);
            Game.ctx.strokeStyle = "LightGrey";
            Game.ctx.stroke();
            Game.ctx.closePath();
        }
        // faz as linhas no eixo x
        for (let x = 0; x <= this._height; x += 40) {
            Game.ctx.beginPath();
            Game.ctx.moveTo(0, x);
            Game.ctx.lineTo(this._width, x);
            Game.ctx.strokeStyle = "Silver";
            Game.ctx.stroke();
            Game.ctx.closePath();
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}