import Vector2D from "./vectors";
import InputManager from "../Input/manager.input";
import { Key } from "../Config/keycode.cfg";
import { math } from "./math";

export namespace physics {
    let accel: Vector2D = Vector2D.Zero
    let speed: Vector2D = Vector2D.Zero
    let coord: Vector2D = Vector2D.Zero
    let angulo: number
    
    export function Acceleration(angle: number, obj: any) {
        coord = math.screen.toNormalize(new Vector2D(accel.x, accel.y))
        angulo = math.angle.toRadians(angle)
        if (InputManager.Keyboard.Key(Key.G)) {
            coord.x = Math.cos(angle) * 0.0005
            coord.y = Math.sin(angle) * 0.0005
        } else { coord.x = coord.y = 0 }
        console.log("angulo"+angle)
        return coord
    }
    export function Speed(angle: number, obj: any){
        Acceleration(angle, obj)
        // console.log(coord.x)
        speed.x += coord.x
        speed.y += coord.y
        obj.x += speed.x
        obj.y += speed.y
       
        
    }
}