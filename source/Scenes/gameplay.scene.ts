import AbstractScene from "./Base/abstract.scene";
import Background from "../Miscelaneous/background";
import Player from "../Objects/player";
import Camera from "../Miscelaneous/camera";
import Attacker from "../Objects/attacker";
import Vector2D from "../Utils/vectors";

export default class SceneGameplay extends AbstractScene{

    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _backGround: Background;
    private _player1: Player;
    private _camera: Camera;

    constructor(p_canvas: HTMLCanvasElement,p_ctx: CanvasRenderingContext2D){
        super();
        this._canvas = p_canvas;
        this._ctx = p_ctx;
        this._backGround = new Background(0,0,this._canvas.width * 3, this._canvas.height * 3);
        this._camera = new Camera(this._canvas.width, this._canvas.height);
        this._camera.centerCamera(this._backGround);
        this._player1 = new Player(new Attacker(new Vector2D(this._camera.width * 0.5, this._camera.height * 0.5),50, 50, this._ctx));

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
        this._player1.classe.Input();
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
        // atualiza a posição da camera em relação ao player
        this._camera.x = this._player1.classe.x - (this._camera.width/2);
        this._camera.y = this._player1.classe.y - (this._camera.height/2);
        this._camera.limitsCamera(this._backGround);
        this._player1.limitsPlayer(this._backGround);
    };

    public Render(): void {
        this._ctx.save();
        this._ctx.translate(-this._camera.x,-this._camera.y);
        this._backGround.CreateBackground(this._canvas, this._ctx);
        this._player1.Draw();
        this._ctx.restore()
    };


};