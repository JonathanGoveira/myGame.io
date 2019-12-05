import Vector2D from "../Utils/vectors"
export default class Instance{
    protected position: Vector2D;
    protected width: number;
    protected height: number;
    protected angle: number = 0;

    constructor (p_position: Vector2D,p_w: number, p_h: number){
        this.position = p_position;
        this.width = p_w;
        this.height = p_h;
    }

    get x(){
        return this.position.x;
    }

    get y(){
        return this.position.y;
    }
}