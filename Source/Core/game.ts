import Scene from '../Scenes/Base/manager.scene'
import SceneMainMenu from '../Scenes/mainMenu.scene';
import InputManager from '../Input/manager.input';
import SceneGameplay from '../Scenes/gameplay.scene';
import { Key } from '../Config/keycode.cfg';
import Vector2D from '../Utils/vectors';

export default class Game{

    private _canvas: HTMLCanvasElement;
    private static _ctx: CanvasRenderingContext2D;
    private static _size: Vector2D;

    constructor(){

        // Define Global Size
        // ------------------
        Game._size = new Vector2D(0, 0);
        Game._size.w = document.documentElement.clientWidth;                        // Get browser width to global size array
        Game._size.h = document.documentElement.clientHeight;                       // Get broser height to global size array

        // Create Canvas Element
        // ---------------------
        this._canvas = document.getElementById("canvas") as HTMLCanvasElement;      // Catch ID and create a canvas
        this._canvas.width  = Game._size.w;                                         // Set canvas width to global size array
        this._canvas.height = Game._size.h;                                         // Set canvas height to global size array

        // Create Context for canvas
        // -------------------------
        Game._ctx = this._canvas.getContext("2d")!;                                 // Set Canvas context to 2D

        // Initialize Inputs
        // -----------------
        let canvasRect = this._canvas.getBoundingClientRect();                      // Get position in screen from canvas
        InputManager.Initialize(canvasRect);                                        // Set initial configuration for inputs

        // Configure Basic Scenes
        // ----------------------
        let sceneMainMenu: SceneMainMenu = new SceneMainMenu();
        let sceneGameplay: SceneGameplay = new SceneGameplay();
        
        // Add scenes to SceneManager
        // --------------------------
        Scene.Manager.Add("Main Menu", sceneMainMenu);
        Scene.Manager.Add("Gameplay", sceneGameplay);

        // Set initial Scene
        // -----------------
        Scene.Manager.Switch("Main Menu");


    };

    public ProcessInput(){

        Scene.Manager.HandleEvents();                                               // Catch Scene Input Events
    
    };

    public Update(){

        Scene.Manager.Update();                                                     // Update objects from scene
    
    };

    public Render(){

        Game._ctx.clearRect(0, 0, Game._size.w, Game._size.h);                      // Clear canvas
        Scene.Manager.Render();                                                     // Render objects from Scene

    };
    
    public Loop(){

        this.ProcessInput();
        this.Update();
        this.Render();

        window.requestAnimationFrame(this.Loop.bind(this));

    };

    public static get ctx(): CanvasRenderingContext2D { return this._ctx; };
    public static get Size(): Vector2D { return this._size; };

};