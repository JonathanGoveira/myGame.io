import Scene from '../Scenes/Base/manager.scene'
import SceneMainMenu from '../Scenes/mainMenu.scene';
import InputManager from '../Input/manager.input';
import SceneGameplay from '../Scenes/gameplay.scene';
import { Key } from '../Config/keycode.cfg';

export default class Game{

    public canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private size: Array<number> = [];

    constructor(){

        // Create Canvas Element
        // ---------------------
        this.canvas = document.getElementById("canvas") as HTMLCanvasElement;       // Catch ID and create a canvas
        this.size[0] = document.documentElement.clientWidth;                        // Get browser width to global size array
        this.size[1] = document.documentElement.clientHeight;                       // Get broser height to global size array
        this.canvas.width  = this.size[0];                                          // Set canvas width to global size array
        this.canvas.height = this.size[1];                                          // Set canvas height to global size array

        // Create Context for canvas
        // -------------------------
        this.ctx = this.canvas.getContext("2d")!;                                   // Set Canvas context to 2D

        // Initialize Inputs
        // -----------------
        let canvasRect = this.canvas.getBoundingClientRect();                       // Get position in screen from canvas
        InputManager.Initialize(canvasRect);                                        // Set initial configuration for inputs

        // Configure Basic Scenes
        // ----------------------
        let sceneMainMenu: SceneMainMenu = new SceneMainMenu(this.ctx, this.canvas);
        let sceneGameplay: SceneGameplay = new SceneGameplay(this.canvas, this.ctx);
        
        // Add scenes to SceneManager
        // --------------------------
        Scene.Manager.Add("Main Menu", sceneMainMenu);
        Scene.Manager.Add("Gameplay", sceneGameplay);

        // Set initial Scene
        // -----------------
        Scene.Manager.Switch("Main Menu");


    };

    public ProcessInput(){
        InputManager.Keyboard.Process();
        InputManager.Mouse.Process();
        Scene.Manager.HandleEvents();                                               // Catch Scene Input Events

    };

    public Update(){

        Scene.Manager.Update();                                                     // Update objects from scene

        if (InputManager.Keyboard.KeyReleased(Key.M)){
            Scene.Manager.Switch("Main Menu");
        } else if (InputManager.Keyboard.KeyReleased(Key.S)){
            Scene.Manager.Switch("Gameplay");
        }

    };
    public Render(){

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);            // Clear canvas
        Scene.Manager.Render();                                                     // Render objects from Scene
        
    };
    
    public Loop(){

        this.ProcessInput();
        this.Update();
        this.Render();

        window.requestAnimationFrame(this.Loop.bind(this));

    };

};