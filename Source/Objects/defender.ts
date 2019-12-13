import { math } from "../utils/math";
export default class Defender{
    private _ctx: CanvasRenderingContext2D;
    public key: any;

    constructor(p_ctx: CanvasRenderingContext2D){
        this._ctx = p_ctx;
    }

    public skill1(){console.log("skill1")}
    public skill2(){console.log("skill2")}
    public skill3(){console.log("skill3")}

    public Update(){};

    public Render(object: any){
        this._ctx.fillStyle = "Blue";
        this._ctx.save();
        this._ctx.translate(object.x, object.y);
        this._ctx.rotate(math.angle.toDegree(object.angle));
        this._ctx.fillRect(object.width / -2, object.height / -2, object.width, object.height);
        this._ctx.restore();
    };
}