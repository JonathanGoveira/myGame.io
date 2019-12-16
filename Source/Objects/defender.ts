import { math } from "../Utils/math";
import Game from "../Core/game";
export default class Defender{
    public key: any;

    constructor(){};

    public skill1(){console.log("skill1")}
    public skill2(){console.log("skill2")}
    public skill3(){console.log("skill3")}

    public Update(){};

    public Render(object: any){
        Game.ctx.fillStyle = "Blue";
        Game.ctx.save();
        Game.ctx.translate(object.x, object.y);
        Game.ctx.rotate(math.angle.toDegree(object.angle));
        Game.ctx.fillRect(object.width / -2, object.height / -2, object.width, object.height);
        Game.ctx.restore();
    };
}