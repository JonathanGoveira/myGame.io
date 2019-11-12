import * as math from "./utils/math"
import Instance from "./instance"
import Vector2D from "./utils/vectors";
export default class Support extends Instance{
    private ctx: CanvasRenderingContext2D;
    public key: any;

    constructor(p_position: Vector2D, p_w: number, p_h: number, p_ctx: CanvasRenderingContext2D){
        super(p_position,p_w,p_h)
        this.ctx = p_ctx;
    };

    public HandleEvent(){};

    public Input(){

        switch(this.key){

            case 37: this.position.x -= 5; break;
            case 39: this.position.x += 5; break;
            case 38: this.position.y -= 5; break;
            case 40: this.position.y += 5; break;
            case 65: this.angle += 5; break;
            case 83: this.angle -= 5; break;
        }

    };

    public Update(){};

    public Render(){
        this.ctx.fillStyle = "green";
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(math.RadToDegree(this.angle));
        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.ctx.restore();
    
    };
}