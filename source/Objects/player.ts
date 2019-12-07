import Background from "../Miscelaneous/background";

export default class Player{
    //@ts-ignore
    public classe: any;

    constructor(p_classe: any){

        
        this.classe = p_classe;

    };

    public limitsPlayer(background: Background){
        if ((this.x - this.classe.width/2) < 0) this.x = (this.classe.width/2);
        if (this.x + this.classe.width/2 > background.width) this.x = background.width - this.classe.width/2;
        if ((this.y - this.classe.height/2) < 0) this.y = this.classe.height/2;
        if (this.y + this.classe.height/2 > background.height) this.y = background.height - this.classe.height/2;
    }

    get x(){
        return this.classe.x;
    }

    get y(){
        return this.classe.y;
    }

    set x(p_x: number){
        this.classe.x = p_x
    }

    set y(p_y: number){
        this.classe.y = p_y
    }
    

    public Draw(){
        this.classe.Render();
    };

    public Update(){};

};