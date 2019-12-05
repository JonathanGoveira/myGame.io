import KeyboardManager from "./keyboard.input";
import MouseManager from "./mouse.input";

export default class InputManager{

    public static Keyboard: KeyboardManager;
    public static Mouse: MouseManager;

    public static Initialize(): void {
        
        InputManager.Keyboard = new KeyboardManager();
        InputManager.Mouse = new MouseManager();

    };

};