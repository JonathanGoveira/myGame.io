import Background from "../Miscelaneous/background";
import Vector2D from "../Utils/vectors";
import InputManager from "../Input/manager.input";
import { BaseStatus } from "../Miscelaneous/baseStatus";
import Sprite from "../Miscelaneous/sprite";
import { Key } from "../Config/keycode.cfg";

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
        this._sprite.size     = new Vector2D(0.1,0.2);

    };

    public Update(){
        this.Move();
    };
    public Render(){ this._sprite.RenderRect("blue"); };

    public limitsPlayer(background: any){
        console.log(this.x - this.width/2)
        if ((this.x - this.width/2) < -background.width) this.x = -background.width+this.width/2;
        if (this.x + this.width/2 > background.width) this.x = background.width - this.width/2;
        if ((this.y - this.height/2) < -background.height) this.y = -background.height + this.height/2;
        if (this.y + this.height/2 > background.height) this.y = background.height - this.height/2;
    }


    public Move(){
        
        let horizontal: number = +InputManager.Keyboard.Key(Key.D) - +InputManager.Keyboard.Key(Key.A);
        let vertical:   number = +InputManager.Keyboard.Key(Key.W) - +InputManager.Keyboard.Key(Key.S);
        this._sprite.position.x += horizontal * this._status.speed;
        this._sprite.position.y += vertical   * this._status.speed;

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