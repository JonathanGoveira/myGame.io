import Vector2D from "./vectors";
import InputManager from "../Input/manager.input";
import { Key } from "../Config/keycode.cfg";
import { math } from "./math";

export namespace physics {
    let accel: Vector2D = Vector2D.Zero
    let speed: Vector2D = Vector2D.Zero
    let coord: Vector2D = Vector2D.Zero
    let angulo: number
    
    export function Acceleration(angle: number) {
        coord = math.screen.toNormalize(new Vector2D(accel.x, accel.y))
        angulo = math.angle.toDegree(angle)
        if (InputManager.Keyboard.Key(Key.G)) {
            accel.x = Math.cos(angle) * 0.0005
            accel.y = Math.sin(angle) * 0.0005
        } else { accel.x = accel.y = 0 }
        console.log("angulo"+angulo)
        return accel
    }
    export function Speed(angle: number, obj: any){
        Acceleration(angle)
        // console.log(coord.x)
        speed.x += accel.x
        speed.y += accel.y
        obj.x += speed.x
        obj.y += speed.y
       
        
    }
}