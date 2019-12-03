import Player from "./player"
import Attacker from "./attacker"
import Support from "./support"
import Scene from "./scene"
import Defender from "./defender"
import Vector2D from "./utils/vectors"
import backGround from "./backgroud"

export default class Game{
    //
    pl!: Player;
    scene: Scene;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    constructor(){

        this.canvas =  document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.ctx = this.canvas.getContext("2d")!;
        this.pl = new Player(new Attacker(new Vector2D(250, 250),50, 50, this.ctx));
        this.scene = new Scene(this.ctx);

        window.addEventListener("keydown", (ev: Event) => {
            //@ts-ignore
            this.pl.classe.key =  ev.keyCode;
            
        });
        window.addEventListener("keydown", (ev: Event) => {
            //@ts-ignore
            this.scene.key =  ev.keyCode;
            
        });

        window.addEventListener("keyup", (ev: Event) => {
            //@ts-ignore
            this.pl.classe.key = false;
            this.scene.key = false;
        });

    };

    public ProcessInput(){

        this.pl.classe.Input();
        if(this.scene.key === 49){
            this.pl = new Player(new Attacker(new Vector2D(250, 250),50, 50, this.ctx));
        };
        if(this.scene.key === 50){
            this.pl = new Player(new Support(new Vector2D(0, 0),50, 50, this.ctx));
        };
        if(this.scene.key === 51){
            this.pl = new Player(new Defender(new Vector2D(550, 550),50, 50, this.ctx));
        };
        

    };

    public Update(){
        this.pl.Update();
    };
    public Render(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(0,0);
        backGround(this.canvas, this.ctx);
        this.pl.Draw();
        this.ctx.restore()
    };
    
    public Loop(){

        this.ProcessInput();
        this.Update();
        this.Render();

        window.requestAnimationFrame(this.Loop.bind(this));

    };

};