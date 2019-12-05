import Scene from '../Scenes/Base/manager.scene'
import SceneMainMenu from '../Scenes/mainMenu.scene';
import InputManager from '../Input/manager.input';
import SceneGameplay from '../Scenes/gameplay.scene';
import { Key } from '../Config/keycode.cfg';

export default class Game{

    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    // //
    // pl!: Player;
  
    
    // // scene: Scene;
    // // instancia do backGround e da camera (esse foi o unico jeito que consegui instanciar elas)
    // backGround!: BackGround;
    // camera!: Camera;
    // // public backGround: BackGround = new BackGround(0,0,this.canvas.width,this.canvas.height);
    // // public camera: Camera = new Camera(this.canvas.width ,this.canvas.height);

    constructor(){

        // Create Canvas Element
        // ---------------------
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;       // Catch ID and create a canvas
        this.canvas.width = document.documentElement.clientWidth;                   // Set canvas width to browser width
        this.canvas.height = document.documentElement.clientHeight;                 // Set canvas width to browser Height

        // Create Context for canvas
        // -------------------------
        this.ctx = this.canvas.getContext("2d")!;                                   // Set Canvas context to 2D

        // Initialize Inputs
        // -----------------
        InputManager.Initialize();                                                  // Set initial configuration for inputs

        // Configure Basic Scenes
        // ----------------------
        let sceneMainMenu: SceneMainMenu = new SceneMainMenu(this.ctx);
        let sceneGameplay: SceneGameplay = new SceneGameplay(this.ctx);
        
        // Add scenes to SceneManager
        // --------------------------
        Scene.Manager.Add("Main Menu", sceneMainMenu);
        Scene.Manager.Add("Gameplay", sceneGameplay);

        // Set initial Scene
        // -----------------
        Scene.Manager.Switch("Main Menu");


        // this.canvas =  document.getElementById("canvas") as HTMLCanvasElement;
        // this.canvas.width = document.documentElement.clientWidth;
        // this.canvas.height = document.documentElement.clientHeight;
        // this.ctx = this.canvas.getContext("2d")!;
        // this.backGround = new BackGround(0,0,this.canvas.width * 3, this.canvas.height * 3)
        // this.camera = new Camera(this.canvas.width, this.canvas.height)
        // this.camera.centerCamera(this.backGround)
        // this.pl = new Player(new Attacker(new Vector2D(this.camera.width * 0.5, this.camera.height * 0.5),50, 50, this.ctx));
        // this.scene = new Scene(this.ctx);
        

        // window.addEventListener("keydown", (ev: Event) => {
        //     //@ts-ignore
        //     this.pl.classe.key =  ev.keyCode;
            
        // });
        // window.addEventListener("keydown", (ev: Event) => {
        //     //@ts-ignore
        //     this.scene.key =  ev.keyCode;
            
        // });

        // window.addEventListener("keyup", (ev: Event) => {
        //     //@ts-ignore
        //     this.pl.classe.key = false;
        //     this.scene.key = false;
        // });

    };

    public ProcessInput(){

        Scene.Manager.HandleEvents();                                               // Catch Scene Input Events

        // this.pl.classe.Input();
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

    public Update(){
        InputManager.Keyboard.Update();
        Scene.Manager.Update();                                                     // Update objects from scene

        if (InputManager.Keyboard.KeyReleased(Key.A)){
            Scene.Manager.Switch("Main Menu");
        } else if (InputManager.Keyboard.KeyReleased(Key.S)){
            Scene.Manager.Switch("Gameplay");
        }

        // this.pl.Update();
        // // atualiza a posição da camera em relação ao player
        // this.camera.x = this.pl.classe.x - (this.camera.width/2)
        // this.camera.y = this.pl.classe.y - (this.camera.height/2)
    };
    public Render(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);            // Clear canvas
        Scene.Manager.Render();                                                     // Render objects from Scene
        // this.ctx.save();
        // this.ctx.translate(-this.camera.x,-this.camera.y);
        // this.backGround.createBackGround(this.canvas, this.ctx);
        // this.pl.Draw();
        // this.ctx.restore()
    };
    
    public Loop(){

        this.ProcessInput();
        this.Update();
        this.Render();

        window.requestAnimationFrame(this.Loop.bind(this));

    };

};