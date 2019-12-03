"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = __importDefault(require("./player"));
const attacker_1 = __importDefault(require("./attacker"));
const support_1 = __importDefault(require("./support"));
const scene_1 = __importDefault(require("./scene"));
const defender_1 = __importDefault(require("./defender"));
const vectors_1 = __importDefault(require("./utils/vectors"));
const backgroud_1 = __importDefault(require("./backgroud"));
class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.ctx = this.canvas.getContext("2d");
        this.pl = new player_1.default(new attacker_1.default(new vectors_1.default(250, 250), 50, 50, this.ctx));
        this.scene = new scene_1.default(this.ctx);
        window.addEventListener("keydown", (ev) => {
            //@ts-ignore
            this.pl.classe.key = ev.keyCode;
        });
        window.addEventListener("keydown", (ev) => {
            //@ts-ignore
            this.scene.key = ev.keyCode;
        });
        window.addEventListener("keyup", (ev) => {
            //@ts-ignore
            this.pl.classe.key = false;
            this.scene.key = false;
        });
    }
    ;
    ProcessInput() {
        this.pl.classe.Input();
        if (this.scene.key === 49) {
            this.pl = new player_1.default(new attacker_1.default(new vectors_1.default(250, 250), 50, 50, this.ctx));
        }
        ;
        if (this.scene.key === 50) {
            this.pl = new player_1.default(new support_1.default(new vectors_1.default(0, 0), 50, 50, this.ctx));
        }
        ;
        if (this.scene.key === 51) {
            this.pl = new player_1.default(new defender_1.default(new vectors_1.default(550, 550), 50, 50, this.ctx));
        }
        ;
    }
    ;
    Update() {
        this.pl.Update();
    }
    ;
    Render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        alert("entrou");
        backgroud_1.default(this.canvas, this.ctx);
        this.pl.Draw();
    }
    ;
    Loop() {
        this.ProcessInput();
        this.Update();
        this.Render();
        window.requestAnimationFrame(this.Loop.bind(this));
    }
    ;
}
exports.default = Game;
;
