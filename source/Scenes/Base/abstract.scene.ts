export default abstract class AbstractScene{

    private _pause: boolean = false;

    abstract Create(): void;
    abstract Destroy(): void;

    Enable(): void {};
    Disable(): void {};

    HandleEvent(): void {};
    Update(): void {};
    Render(): void {};

    public Pause(): void { this._pause = true; };
    public Resume(): void { this._pause = false; };
    public Running(): boolean { return this._pause; };

};