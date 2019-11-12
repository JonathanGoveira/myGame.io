export default class Vector2D{

    private _x: number;
    private _y: number;

    constructor(p_x: number, p_y: number){
        this._x = p_x;
        this._y = p_y;
    };

    public Magnitude(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    // Getters
    // -------
    public get x(){ return this._x; }
    public get y(){ return this._y; }

    // Setters
    // -------
    public set x(p_x: number){this._x = p_x}
    public set y(p_y: number){this._y = p_y}
    
};