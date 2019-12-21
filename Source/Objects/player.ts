import Background from "../Miscelaneous/background";
import Vector2D from "../Utils/vectors";
import InputManager from "../Input/manager.input";
import { BaseStatus } from "../Miscelaneous/baseStatus";
import Sprite from "../Miscelaneous/sprite";
import { Key } from "../Config/keycode.cfg";
import { physics } from "../Utils/physics";
import { math } from "../Utils/math";

export default class Player{
    //@ts-ignore
    public classe: any;
    private _sprite: Sprite;
    public _status: BaseStatus;

    constructor(p_classe: any, p_status: BaseStatus){
        
        this.classe = p_classe;
        this._status = p_status;
        this._sprite = new Sprite(this._status.sprite);
        this._sprite.position = Vector2D.Zero;
        this._sprite.size     = new Vector2D(0.1,0.1);

    };

    public Update(){
        // this.Move();
        physics.Speed(this._sprite.angle,this)
        this.moveMouse();
        // physics.Acceleration(this._sprite.angle, this);
        // console.log(this._sprite.angle)

    };
    public Render(){ this._sprite.RenderRect("blue"); };

    public limitsPlayer(background: any){
        if ((this.x - this.width) < -background.width) this.x = -background.width+this.width;
        if (this.x + this.width > background.width) this.x = background.width - this.width;
        if ((this.y - this.height) < -background.height) this.y = -background.height + this.height;
        if (this.y + this.height > background.height) this.y = background.height - this.height;
    }


    public Move(){
        
        let horizontal: number = +InputManager.Keyboard.Key(Key.D) - +InputManager.Keyboard.Key(Key.A);
        let vertical:   number = +InputManager.Keyboard.Key(Key.W) - +InputManager.Keyboard.Key(Key.S);
        // this._sprite.position.x += horizontal * this._status.speed;
        // this._sprite.position.y += vertical   * this._status.speed;

    }
    public moveMouse(){
        let coord2: Vector2D = math.screen.toNormalize(new Vector2D(InputManager.Mouse.location.x, InputManager.Mouse.location.y))
        let coord: Vector2D = math.screen.toPixels(new Vector2D(this.x, this.y))
        let dx: number = coord2.x - this.x
        let dy: number = coord2.y - this.y
        this._sprite.angle = Math.atan2(dy, dx)
        if (InputManager.Keyboard.Key(Key.A)){this._sprite.angle += 1}
    }

    public Acceleration(){
    }

    public shot(){}

    public skills(){
        if(InputManager.Keyboard.Key(49)){this.classe.skill1()}
        if(InputManager.Keyboard.Key(50)){this.classe.skill2()}
        if(InputManager.Keyboard.Key(51)){this.classe.skill3()}
    }

    get x()      { return this._sprite.position.x;  };
    get y()      { return this._sprite.position.y;  };
    get width()  { return this._sprite.size.x;      };
    get height() { return this._sprite.size.y;      };
    get angle()  { return this._sprite.angle;       };
    
    set x(p_x: number){ this._sprite.position.x = p_x; }
    set y(p_y: number){ this._sprite.position.y = p_y; }
    

};