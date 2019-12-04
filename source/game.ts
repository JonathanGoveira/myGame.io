import Player from "./player"
import Attacker from "./attacker"
import Support from "./support"
import Scene from "./scene"
import Defender from "./defender"
import Vector2D from "./utils/vectors"
import BackGround from "./backgroud"
import Camera from "./camera"

export default class Game{
    //
    pl!: Player;
    
    
    scene: Scene;
    canvas: HTMLCanvasElement;
    // instancia do backGround e da camera (esse foi o unico jeito que consegui instanciar elas)
    backGround!: BackGround;
    camera!: Camera;
    // public backGround: BackGround = new BackGround(0,0,this.canvas.width,this.canvas.height);
    // public camera: Camera = new Camera(this.canvas.width ,this.canvas.height);
    ctx: CanvasRenderingContext2D;

    constructor(){

        this.canvas =  document.getElementById("canvas") as HTMLCanvasElement;
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.ctx = this.canvas.getContext("2d")!;
        this.backGround = new BackGround(0,0,this.canvas.width * 3, this.canvas.height * 3)
        this.camera = new Camera(this.canvas.width, this.canvas.height)
        this.camera.centerCamera(this.backGround)
        this.pl = new Player(new Attacker(new Vector2D(this.camera.width * 0.5, this.camera.height * 0.5),50, 50, this.ctx));
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
            this.pl = new Player(new Attacker(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        };
        if(this.scene.key === 50){
            this.pl = new Player(new Support(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        };
        if(this.scene.key === 51){
            this.pl = new Player(new Defender(new Vector2D(this.canvas.width * 0.5, this.canvas.height * 0.5),50, 50, this.ctx));
        };
        

    };

    public Update(){
        this.pl.Update();
        // atualiza a posição da camera em relação ao player
        this.camera.x = this.pl.classe.x - (this.camera.width/2)
        this.camera.y = this.pl.classe.y - (this.camera.height/2)
    };
    public Render(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(-this.camera.x,-this.camera.y);
        this.backGround.createBackGround(this.canvas, this.ctx);
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