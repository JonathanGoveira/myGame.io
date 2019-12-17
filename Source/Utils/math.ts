import Game from "../Core/game";
import Vector2D from "./vectors";

export namespace math{

    /**
     * Namespace contains all calculations with degrees
     */
    export namespace angle{
        
        /**
         * Convert radians to degrees
         * @param num 
         */
        export function toDegree(num: number){
            return (num * 180) / Math.PI;
        };
        /**
         * Convert degrees to radians
         * @param num 
         */
        export function toRadians(num: number){
            return (num * Math.PI) / 180;
        };
        
    }

    /**
     * Namespace contains all calculation for screen
     */
    export namespace screen{

        /**
         * Convert a normalized coordinate to pixel screen coordinate
         * @param p_coord is a normalized array with two coordinates (X and Y)
         * @param p_screen is a maximum screen size array with two coordinates (Width and Height)
         */
        export function toPixels(p_coord: Vector2D): Vector2D{
            let coord: Vector2D = new Vector2D(0, 0);
            coord.x = Math.floor((Game.Size.w / 2) + (p_coord.x * (Game.Size.w / 2)));
            coord.y = Math.floor((Game.Size.h / 2) + (p_coord.y * (Game.Size.h / 2)));
            return coord;
        };

        /**
         * Convert a pixel screen coordinate to a normalized coordinate
         * @param p_coord is a pixel screen array with two coordinates (X and Y)
         * @param p_screen is a maximum screen size array with two coordinates (Width and Height)
         */
        export function toNormalize(p_coord: Vector2D): Vector2D{
            let coord: Vector2D = new Vector2D(0, 0);
            coord.x = ( (  p_coord.x / Game.Size.w ) * 2) - 1;
            coord.y = ( (  p_coord.y / Game.Size.h ) * 2) - 1;
            return coord;
        };

    };

}

