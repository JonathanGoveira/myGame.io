import Vector2D from "../Utils/vectors";
import { MB } from "../Config/keycode.cfg";


export default class MouseManager{

    private clientRect: ClientRect | DOMRect;
    private _previous: Array<Boolean> = [];
    private _pressed: Array<Boolean> = [];
    private _released: Array<Boolean> = [];
    private _holding: Array<Boolean> = [];
    // private _click: Array<Number> = [];
    private _position: Vector2D;
    private _relative: Vector2D;
    private _location: Vector2D;

    constructor(p_rect: ClientRect | DOMRect){

        this.clientRect = p_rect;

        this._position = new Vector2D(0, 0);
        this._relative = new Vector2D(0, 0);
        this._location = new Vector2D(0, 0);

        for (let i = 0; i < 3; i++){
            // this._click[i] = 0;
            this._previous[i] = false;
            this._holding[i] = false;
            this._pressed[i] = false;
            this._released[i] = false;
        }
        
        // document.addEventListener("click", (e) => { this.Action(e, 1); });
        // document.addEventListener("dblclick", (e) => { this.Action(e, 2); });
        document.addEventListener("mouseup",    (e) => { this.Up(e); });
        document.addEventListener("mousedown",  (e) => { this.Down(e); });
        document.addEventListener("mousemove",  (e) => { this.Move(e); });

    };

    // private Action(ev: MouseEvent, p_quantity: number): void {
    //     this._click[ev.button] = p_quantity;
    // };
    private Up(ev: MouseEvent):   void {
        this._position.x = ev.clientX - this.clientRect.left;
        this._position.y = ev.clientY - this.clientRect.top; 
        this._holding[ev.button] = false;
    };
    private Down(ev: MouseEvent): void { 
        this._position.x = ev.clientX - this.clientRect.left;
        this._position.y = ev.clientY - this.clientRect.top;
        this._holding[ev.button] = true;
    };
    private Move(ev: MouseEvent): void {
        this._location.x = ev.clientX - this.clientRect.left;
        this._location.y = ev.clientY - this.clientRect.top;
        this._relative.x = ev.clientX;
        this._relative.y = ev.clientY;
    };

    public Process(){

        for (let i = 0; i < 3; i++){    
            // console.log(this._click[MB.Left] >= 2);
            // if (this._click[i] > 0){
            //     this._click[i] = 0;
            // }

            this._pressed[i] = (!this._previous[i]) && this._holding[i];
            this._released[i] = this._previous[i] && (!this._holding[i]);
            this._previous[i] = this._holding[i];
        }

    };

    public Button(p_mouseButton: MB): Boolean { return this._holding[p_mouseButton]; };
    public ButtonPressed(p_mouseButton: MB): Boolean { return this._pressed[p_mouseButton]; };
    public ButtonReleased(p_mouseButton: MB): Boolean { return this._released[p_mouseButton]; };
    // public Click(p_mouseButton: MB){ return this._click[p_mouseButton]; }

    public Enter(p_pos: Vector2D, p_size: Vector2D): Boolean {

        if (this._location.x > p_pos.x && this._location.x < p_pos.x + p_size.x &&
            this._location.y > p_pos.y && this._location.y < p_pos.y + p_size.y){
                return true;
        }
        return false;

    };

    public Leave(p_pos: Vector2D, p_size: Vector2D): Boolean {
        if (this._location.x > p_pos.x && this._location.x < p_pos.x + p_size.x &&
            this._location.y > p_pos.y && this._location.y < p_pos.y + p_size.y){
                return false;
        }
        return true;
    };

    public get position(){ return this._position; };
    public get relative(){ return this._relative; };
    public get location(){ return this._location; };


};