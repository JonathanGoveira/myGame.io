import Vector2D from "../Utils/vectors";
import Game from "../Core/game";

export default class Sprite{

    private _texture: HTMLImageElement;
    private _position: Vector2D;
    private _size: Vector2D;
    private _pivot: Vector2D;
    private _scale: Vector2D;
    private _translate: Vector2D;
    private _angle: number;

    constructor(path: string){
        this._texture = new Image();
        this._texture.src = path;
        this._position = Vector2D.Zero;
        this._size = Vector2D.Zero;
        this._pivot = Vector2D.Zero;
        this._scale = Vector2D.Zero;
        this._translate = Vector2D.Zero;
        this._angle = 0;

    };

    public RenderRect(p_color: string): void {
        this._pivot.x = Game.Size.w * this._size.w / 2;
        this._pivot.y = Game.Size.h * this._size.h / 2;
        this._scale.w = Game.Size.w * this._size.w;
        this._scale.h = Game.Size.h * this._size.h;
        this._translate.x = (Game.Size.w/2) + (Game.Size.w/2) * this._position.x - (this._scale.w / 2);
        this._translate.y = (Game.Size.h/2) + (Game.Size.h/2) * (-this._position.y) - (this._scale.h / 2); 
        Game.ctx.save();
            Game.ctx.translate(this._pivot.x, this._pivot.y);
            Game.ctx.translate(this._translate.x, this.translate.y);
            Game.ctx.rotate(this._angle);
            Game.ctx.translate(-this._pivot.x, -this._pivot.y);
            Game.ctx.fillStyle = p_color;
            Game.ctx.fillRect(0, 0, this._scale.w, this._scale.h);
        Game.ctx.restore();
    };

    public Render(): void {};

    public set Path(path: string)      { this._texture.src = path; };
    public set position(vec: Vector2D) { this._position = vec;     };
    public set size(vec: Vector2D)     { this._size = vec;         };
    public set pivot(vec: Vector2D)    { this._pivot = vec;        };
    public set scale(vec: Vector2D)    { this._scale = vec;        };
    public set angle(angle: number)    { this._angle = angle;      };

    public get texture()   :HTMLImageElement { return this._texture;   };
    public get position()  :Vector2D         { return this._position;  };
    public get size()      :Vector2D         { return this._size;      };
    public get pivot()     :Vector2D         { return this._pivot;     };
    public get scale()     :Vector2D         { return this._scale;     };
    public get translate() :Vector2D         { return this._translate; };
    public get angle()     :number           { return this._angle;     };

};