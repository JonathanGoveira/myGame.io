import AbstractScene from "./Base/abstract.scene";
import InputManager from "../Input/manager.input";

export default class SceneMainMenu extends AbstractScene{

    private ctx: CanvasRenderingContext2D;

    constructor(p_ctx: CanvasRenderingContext2D){
        super();
        this.ctx = p_ctx;
    };

    public Create(): void {};

    public Destroy(): void {};

    public Enable(): void {};
    public Disable(): void {};

    public HandleEvent(): void {};
    
    public Update(): void {};
    
    public Render(): void {

        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, 400, 400);

    };


};