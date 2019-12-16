import Vector2D from "../Utils/vectors";
import Game from "../Core/game";
import { math } from "../Utils/math";

export default class Button{

    public _position: Vector2D;
    public _size: Vector2D;

    constructor(p_pos: Vector2D, p_size: Vector2D){

        this._position = p_pos;
        this._size = p_size;

    };

    public Update(): void{};
    public Render(): void{
        Game.ctx.fillStyle = "green";
        let pos = math.screen.toPixels(this._position);
        let size = math.screen.toPixels(this._size);
        Game.ctx.fillRect(pos.x, pos.y, size.w, size.h);
    };


};