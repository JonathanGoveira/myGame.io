import KeyboardManager from "./keyboard.input";
import MouseManager from "./mouse.input";

export default class InputManager{

    public static Keyboard: KeyboardManager;
    public static Mouse: MouseManager;

    public static Initialize(p_rect: ClientRect | DOMRect): void {
        
        InputManager.Keyboard = new KeyboardManager();
        InputManager.Mouse = new MouseManager(p_rect);

    };

};