import { Key, KeyMax } from "../Config/keycode.cfg"

export default class KeyboardManager{

    private _previousState: Array<Boolean> = [];
    private _pressingState: Array<Boolean> = [];
    private _pressedState: Array<Boolean> = [];
    private _releaseState: Array<Boolean> = [];

    constructor(){

        for (let i = 0; i < KeyMax; i++){
            this._previousState[i] = false;
            this._pressingState[i] = false;
            this._pressedState[i] = false;
            this._releaseState[i] = false;
        }

        document.addEventListener("keyup",   (e) => { this.KeyUp(e);   });
        document.addEventListener("keydown", (e) => { this.KeyDown(e); });
 
    };
    
    private KeyDown(ev: KeyboardEvent): void { this._pressingState[ev.keyCode] = true;  /* ev.preventDefault(); */ };
    private KeyUp(ev: KeyboardEvent):   void { this._pressingState[ev.keyCode] = false; /* ev.preventDefault(); */ };
    
    /**
     * Update all keyboard keys
     */
    public Process(): void {
        for (let i = 0; i < KeyMax; i++){
            this._pressedState[i] = (!this._previousState[i]) && this._pressingState[i];
            this._releaseState[i] = this._previousState[i] && (!this._pressingState[i]);
            this._previousState[i] = this._pressingState[i];
        }
    };

    /**
     * Return if a key is pressing constantly
     * @param p_keycode 
     * 
     */
    public Key(p_keycode: Key): Boolean { return this._pressingState[p_keycode]; };

    /**
     * Return if a key has pressed one time
     * @param p_keycode 
     */
    public KeyPressed(p_keycode: Key): Boolean { return this._pressedState[p_keycode]; };

    /**
     * Return if a key has released one time
     * @param p_keycode 
     */
    public KeyReleased(p_keycode: Key): Boolean { return this._releaseState[p_keycode]; };



};