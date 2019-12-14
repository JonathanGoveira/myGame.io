import AbstractScene from "./Base/abstract.scene";
import Background from "../Miscelaneous/background";
import Player from "../Objects/player";
import Camera from "../Miscelaneous/camera";
import Attacker from "../Objects/attacker";
import Support from "../Objects/support";
import InputManager from "../Input/manager.input";
import { MB } from "../Config/keycode.cfg";
import Defender from "../Objects/defender";
import {statusData} from "../Miscelaneous/statusData"


export default class SceneGameplay extends AbstractScene{

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _backGround: Background;
    private _player1: Player;
    private _player2: Player;
    private _player3: Player;
    private _camera: Camera;
    

    constructor(p_canvas: HTMLCanvasElement,p_ctx: CanvasRenderingContext2D){
        super();
        this._canvas = p_canvas;
        this._ctx = p_ctx;
        this._backGround = new Background(0,0,2000, 2000);
        this._camera = new Camera(this._canvas.width, this._canvas.height);
        //this._camera.centerCamera(this._backGround);
        this._player1 = new Player(new Attacker(this._ctx), this._camera.width * 0.5, this._camera.width * 0.5, 50,50, statusData.Attacker)
        this._player2 = new Player(new Defender(this._ctx),200,200,100,100, statusData.Defender)
        this._player3 = new Player(new Support(this._ctx),300,300,70,70, statusData.Support)

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
        this._player1.move();
        this._player1.skills()
        InputManager.Mouse.Process()
        
        //console.log("corno")
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
        if(InputManager.Keyboard.Key(16)){
            if (InputManager.Keyboard.Key(49))
                console.log(this._player1._status)}
        if(InputManager.Keyboard.Key(16)){
            if (InputManager.Keyboard.Key(50))
                console.log(this._player2._status)}
        if(InputManager.Keyboard.Key(16)){
            if (InputManager.Keyboard.Key(51))
                console.log(this._player3._status)}
        // atualiza a posição da camera em relação ao player
        
        this._camera.centerCamera(this._player1);
        this._camera.limitsCamera(this._backGround);
        this._player1.limitsPlayer(this._backGround);
        if(InputManager.Keyboard.Key(13)){this._camera.centerCamera(this._player2)}
    };

    public Render(): void {
        this._ctx.save();
        this._ctx.translate(-this._camera.x,-this._camera.y);
        this._backGround.CreateBackground(this._canvas, this._ctx);
        this._player1.Draw();
        this._player2.Draw();
        this._player3.Draw();
        this._ctx.restore()
    };


};