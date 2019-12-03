"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(p_classe) {
        this.classe = p_classe;
    }
    ;
    Draw() {
        this.classe.Render();
    }
    ;
    Update() { }
    ;
}
exports.default = Player;
;
