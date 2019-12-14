import Background from "../Miscelaneous/background";
import Vector2D from "../utils/vectors";
import InputManager from "../Input/manager.input";
import { BaseStatus } from "../Miscelaneous/baseStatus";

export default class Player{
    //@ts-ignore
    public classe: any;
    private _position: Vector2D;
    private _size: Vector2D;
    private _angle: number = 0
    public _status: BaseStatus = {speed: 0, armor: 0, life: 0, damage: 0, firerate: 0, mineral: 0}
    

    constructor(p_classe: any,p_x: number, p_y: number, p_width: number, p_height: number, p_status: BaseStatus){
        
        this.classe = p_classe;
        this._position = new Vector2D(p_x,p_y)
        this._size = new Vector2D(p_width, p_height)
        this._status = p_status
        // this._status.speed = 100
        // this._status.armor = 0
        // this._status.damage = 0
        // this._status.firerate = 0
        // this._status.life = 0
        // this._status.mineral = 0

    };

    public limitsPlayer(background: Background){
        if ((this.x - this.width/2) < 0) this.x = (this.width/2);
        if (this.x + this.width/2 > background.width) this.x = background.width - this.width/2;
        if ((this.y - this.height/2) < 0) this.y = this.height/2;
        if (this.y + this.height/2 > background.height) this.y = background.height - this.height/2;
    }

    public Draw(){
        this.classe.Render(this);
    };

    public move(){
        if(InputManager.Keyboard.Key(37)){this._position.x -= 5}
        if(InputManager.Keyboard.Key(39)){this._position.x += 5}
        if(InputManager.Keyboard.Key(38)){this._position.y -= 5}
        if(InputManager.Keyboard.Key(40)){this._position.y += 5}
        
    }

    public shot(){}

    public skills(){
        if(InputManager.Keyboard.Key(49)){this.classe.skill1()}
        if(InputManager.Keyboard.Key(50)){this.classe.skill2()}
        if(InputManager.Keyboard.Key(51)){this.classe.skill3()}
    }

    public Update(){};

    get x(){
        return this._position.x;
    }

    get y(){
        return this._position.y;
    }

    set x(p_x: number){
        this._position.x = p_x
    }

    set y(p_y: number){
        this._position.y = p_y
    }

    get width(){
        return this._size.x
    }

    get height(){
        return this._size.y
    }

    get angle(){
        return this._angle
    }
    

};