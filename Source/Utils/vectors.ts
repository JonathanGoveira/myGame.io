export default class Vector2D{

    private _x: number;
    private _y: number;

    public constructor(p_x: number, p_y: number){
        this._x = p_x;
        this._y = p_y;
    };

    public Magnitude(): number{
        return Math.sqrt((this._x * this._x) + (this._y * this._y));
    };

    public Normalize(): Vector2D{
        let normal: Vector2D = new Vector2D(this._x / this.Magnitude(), this._y / this.Magnitude());
        return normal; 
    };

    public Sum(vec: Vector2D): Vector2D{
        let sum: Vector2D = new Vector2D(this._x + vec.x, this._y + vec.y);
        return sum;
    };

    public Subtract(vec: Vector2D): Vector2D{
        let sub: Vector2D = new Vector2D(this._x - vec.x, this._y - vec.y);
        return sub;
    };

    public Scalar(num: number): Vector2D{
        let mult: Vector2D = new Vector2D(num*this._x, num*this._y);
        return mult;
    };

    public Dot(vec: Vector2D): number{
        return (this._x * vec.x) + (this._y * vec.y);
    };

    public Cross(vec: Vector2D): number{
        let x = (this._x * vec.y);
        let y = (this._y * vec.x);
        let cross: number = x - y;
        return cross;
    };

    public Angle(){
        return Math.atan2(this._x, this._y);
    };

    public Projection(vec: Vector2D): number{
        return this.Dot(vec) / vec.Magnitude();
    };

    public get x(): number{ return this._x; };
    public get y(): number{ return this._y; };
    public get w(): number{ return this._x; };
    public get h(): number{ return this._y; };

    public set x(p_x: number){ this._x = p_x; };
    public set y(p_y: number){ this._y = p_y; };
    public set w(p_w: number){ this._x = p_w; };
    public set h(p_h: number){ this._y = p_h; };

    public static get Zero(): Vector2D  { return new Vector2D(0, 0);  };
    public static get Up(): Vector2D    { return new Vector2D(0, 1);  };
    public static get Left(): Vector2D  { return new Vector2D(-1, 0); };
    public static get Right(): Vector2D { return new Vector2D(1, 0);  };
    public static get Down(): Vector2D  { return new Vector2D(0, -1); };

};