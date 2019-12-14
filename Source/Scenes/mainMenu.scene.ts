import AbstractScene from "./Base/abstract.scene";
import InputManager from "../Input/manager.input";

export default class SceneMainMenu extends AbstractScene{

    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement

    constructor(p_ctx: CanvasRenderingContext2D, p_canvas: HTMLCanvasElement){
        super();
        this.ctx = p_ctx;
        this.canvas = p_canvas
    };

    public Create(): void {};

    public Destroy(): void {};

    public Enable(): void {};
    public Disable(): void {};

    public HandleEvent(): void {};
    
    public Update(): void {};
    
    public Render(): void {

        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "gold";
        this.ctx.font = "50px Helvetica"
        this.ctx.fillText("Você está na tela de menu",0,100,400)
        this.ctx.fillText("Aperte S para ir para o jogo, ou M para voltar para o menu",0,200)

    };


};