
export default class Player{
    //@ts-ignore
    public classe: any;

    constructor(p_classe: any){

        
        this.classe = p_classe;

    };

    

    public Draw(){
        this.classe.Render();
    };

    public Update(){};

};