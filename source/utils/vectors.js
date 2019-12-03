"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vector2D {
    constructor(p_x, p_y) {
        this._x = p_x;
        this._y = p_y;
    }
    ;
    Magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    ;
    // Getters
    // -------
    get x() { return this._x; }
    get y() { return this._y; }
    // Setters
    // -------
    set x(p_x) { this._x = p_x; }
    set y(p_y) { this._y = p_y; }
}
exports.default = Vector2D;
;
