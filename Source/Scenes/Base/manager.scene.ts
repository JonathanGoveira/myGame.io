import AbstractScene from "./abstract.scene";

export default class Scene{

    private static _manager: Scene;         // Singleton Variable
    
    private _scenes: { [name: string] : AbstractScene; } ;
    private _currScene: AbstractScene | null;

    constructor(){
        this._scenes = {}
        this._currScene = null;

    };

    public HandleEvents(): void { 
        if (this._currScene != null){
            this._currScene.HandleEvent();
        }
    };
    public Update(): void {
        if(this._currScene != null){
            this._currScene.Update();
        }
    };
    public Render(): void {
        if(this._currScene != null){
            this._currScene.Render();
        }
    };

    public Add(p_name: string, p_scene: AbstractScene): void {
        this._scenes[p_name] = p_scene;
        this._scenes[p_name].Create();
    };

    public Switch(p_name: string): void {

        if(this._currScene != null){
            this._currScene.Disable();
        }

        this._currScene = this._scenes[p_name];
        this._currScene.Enable();

    };

    public Remove(p_name: string): void {
        if(this._currScene == this._scenes[p_name]){
            this._currScene = null;
        }
        this._scenes[p_name].Destroy();
        delete this._scenes[p_name];
    };

    /**
     * Singleton method for get acess to manager of game scenes
     */
    static get Manager(): Scene{

        if (!Scene._manager){
            Scene._manager = new Scene();
        }
        return Scene._manager;

    };

    

};