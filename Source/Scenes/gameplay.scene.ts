import AbstractScene from "./Base/abstract.scene";
import Background from "../Miscelaneous/background";
import Player from "../Objects/player";
import Camera from "../Miscelaneous/camera";
import Attacker from "../Objects/attacker";
import Support from "../Objects/support";
import InputManager from "../Input/manager.input";
import { MB, Key } from "../Config/keycode.cfg";
import Defender from "../Objects/defender";
import {statusData} from "../Miscelaneous/statusData"
import Game from "../Core/game";
import { math } from "../Utils/math";
import Vector2D from "../Utils/vectors";


export default class SceneGameplay extends AbstractScene{

    private _backGround: Background;
    private _player1: Player;
    // private _player2: Player;
    //private _player3: Player;
    private _camera: Camera;
    

    constructor(){
        super();
        this._backGround = new Background();
        this._camera = new Camera(math.screen.toNormalize(new Vector2D(Game.ctx.canvas.width, Game.ctx.canvas.height)));
        //this._camera.centerCamera(this._backGround);
        this._player1 = new Player(new Attacker(), statusData.Attacker);
        this._backGround.Rects()
        // this._player2 = new Player(new Defender(), statusData.Defender);
        //this._player3 = new Player(new Support(),  statusData.Support);

        window.addEventListener("keydown", (ev: Event) => {
            //@ts-ignore
            this._player1.classe.key =  ev.keyCode;
            
        });
        window.addEventListener("keydown", (ev: Event) => {
            //@ts-ignore
            // this.scene.key =  ev.keyCode;
            
        });

        window.addEventListener("keyup", (ev: Event) => {
            //@ts-ignore
            this._player1.classe.key = false;
            // this.scene.key = false;
        });

    };

    public Create(): void {};

    public Destroy(): void {};

    public Enable(): void {};
    public Disable(): void {};

    public HandleEvent(): void {
        InputManager.Mouse.Process()
        this._player1.skills()
        
        
        // if(this.scene.key === 49){
        //     this.pl = new Player(new Attacker(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        // };
        // if(this.scene.key === 50){
        //     this.pl = new Player(new Support(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        // };
        // if(this.scene.key === 51){
        //     this.pl = new Player(new Defender(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        // };
    };

    public Update(): void {
        this._player1.Update();
        
        // Testes de inputs
        if (InputManager.Mouse.Button(MB.Left)) {console.log("clickei")}
        if (InputManager.Mouse.ButtonPressed(MB.Left)) {console.log("clickado")}
        if (InputManager.Mouse.ButtonReleased(MB.Left)) {console.log("Desclickado")}
        // Shift + 1 ou 2 ou 3 retorna os baseStatus das classes
        if(InputManager.Keyboard.Key(Key.Shift) && InputManager.Keyboard.Key(Key.One)){console.log(this._player1._status)}
        // if(InputManager.Keyboard.Key(Key.Shift) && InputManager.Keyboard.Key(Key.Two)){console.log(this._player2._status)}
        //if(InputManager.Keyboard.Key(Key.Shift) && InputManager.Keyboard.Key(Key.Three)){console.log(this._player3._status)}
        // atualiza a posição da camera em relação ao player
        
        this._camera.centerCamera(this._player1);
        this._camera.limitsCamera(this._backGround);
        this._player1.limitsPlayer(this._backGround);
        // if(InputManager.Keyboard.Key(13)){this._camera.centerCamera(this._player2)}
        if(InputManager.Keyboard.Key(Key.Ctrl)){
            console.log("player "+this._player1.width)
            console.log("camera "+((this._camera.x + this._camera.width)*this._backGround.width))
            console.log("background "+this._backGround.width)
        }
    };

    public Render(): void {
        
        let camera = math.screen.toPixels(new Vector2D(this._camera.x, this._camera.y))
        Game.ctx.save();
        Game.ctx.translate(-camera.x, camera.y)
        this._backGround.render()
        
        //this._backGround.CreateBackground();
        this._player1.Render();
        // this._player2.Render();
        Game.ctx.fillStyle = "black"

        for (let i=0; i<this._backGround.rectX.length; i++){
            Game.ctx.fillRect(this._backGround.RectX[i],this._backGround.RectY[i],10,10)
           
        }
        
        //this._player3.Render();
        Game.ctx.restore();
    };


};