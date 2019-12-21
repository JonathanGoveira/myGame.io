import Vector2D from "../Utils/vectors";
import Game from "../Core/game";
import Sprite from "./sprite";

export default class Background {
    // private _x: number;
    // private _y: number;
    // private _width: number;
    // private _height: number;
    public rectX: Array<number> = new Array(50)
    public rectY: Array<number> = new Array(50)
    private _sprite: Sprite

     constructor() {
        // this._x = p_x;
        // this._y = p_y;
        // this._width = p_width;
        // this._height = p_height;
        //Cria as dimensões do sprite
        this._sprite = new Sprite("../../background.jpeg")
        this._sprite.position = Vector2D.Zero
        this._sprite.size = new Vector2D(2,2)
    }

    // public CreateBackground() {
    //     // faz as linhas no eixo y
    //     for (let y = 0; y <= this._width; y += 40) {
    //         Game.ctx.beginPath();
    //         Game.ctx.moveTo(y, 0);
    //         Game.ctx.lineTo(y, this._height);
    //         Game.ctx.strokeStyle = "LightGrey";
    //         Game.ctx.stroke();
    //         Game.ctx.closePath();
    //     }
    //     // faz as linhas no eixo x
    //     for (let x = 0; x <= this._height; x += 40) {
    //         Game.ctx.beginPath();
    //         Game.ctx.moveTo(0, x);
    //         Game.ctx.lineTo(this._width, x);
    //         Game.ctx.strokeStyle = "Silver";
    //         Game.ctx.stroke();
    //         Game.ctx.closePath();
    //     }
    // }

    public render(){this._sprite.RenderRect("silver")}

    public Rects(){
        for (let i=0; i<this.rectX.length; i++){
            this.rectX[i] = Math.random() * (Game.Size.w - 0)
            this.rectY[i] = Math.random() * (Game.Size.h - 0)
        }
    }

    get RectX(){return this.rectX}
    get RectY(){return this.rectY}
    get width(){return this._sprite.size.x;}
    get height(){
        return this._sprite.size.y;
    }
}