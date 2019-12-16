import AbstractScene from "./Base/abstract.scene";
import InputManager from "../Input/manager.input";
import Game from "../Core/game";
import Button from "../Miscelaneous/button";
import Vector2D from "../Utils/vectors";
import { math } from "../Utils/math";
import { MB } from "../Config/keycode.cfg";
import Scene from "./Base/manager.scene";

export default class SceneMainMenu extends AbstractScene{

    private _buttons: { [Name: string]: Button } = {};

    constructor(){
        super();
    };

    public Create(): void {

        let pos = math.screen.toNormalize(new Vector2D((Game.Size.w / 2 - 250), Game.Size.h / 2));
        let size = math.screen.toNormalize(new Vector2D(500, 64));
        console.log(Game.Size)
        this._buttons["Play"] = new Button(pos, size);

    };

    public Destroy(): void {};

    public Enable(): void {};
    public Disable(): void {};

    public HandleEvent(): void {
        InputManager.Mouse.Process();
    };
    
    public Update(): void {

        if (InputManager.Mouse.Enter(this._buttons["Play"]._position, this._buttons["Play"]._size)){
            console.log("Enter button");
            if (InputManager.Mouse.ButtonReleased(MB.Left)){
                console.log("next room");
                Scene.Manager.Switch("Gameplay");
            }
        }

    };
    
    public Render(): void {

        Game.ctx.fillStyle = "blue";
        Game.ctx.fillRect(0, 0, 400, 400);
        for (let k in this._buttons){
            let i = this._buttons[k];
            i.Render();
        }

    };


};