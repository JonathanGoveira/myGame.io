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
        export function toPixels(p_coord: Array<number>, p_screen: Array<number>): Array<number>{
            let coord: Array<number> = [];
            coord[0] = (p_screen[0] / 2) + (p_coord[0] * (p_screen[0] / 2));
            coord[1] = (p_screen[1] / 2) + (p_coord[1] * (p_screen[1] / 2));
            return coord;
        };

        /**
         * Convert a pixel screen coordinate to a normalized coordinate
         * @param p_coord is a pixel screen array with two coordinates (X and Y)
         * @param p_screen is a maximum screen size array with two coordinates (Width and Height)
         */
        export function toNormalize(p_coord: Array<number>, p_screen: Array<number>): Array<number>{
            let coord: Array<number> = [];
            coord[0] = ( (  p_coord[0] / p_screen[0] ) * 2) - 1;
            coord[1] = ( ( (p_coord[1] / p_screen[1] ) + 1) * 2) - 1;
            return coord;
        };

    };

}

