"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math = __importStar(require("./utils/math"));
const instance_1 = __importDefault(require("./instance"));
class Defender extends instance_1.default {
    constructor(p_position, p_w, p_h, p_ctx) {
        super(p_position, p_w, p_h);
        this.ctx = p_ctx;
    }
    ;
    HandleEvent() { }
    ;
    Input() {
        switch (this.key) {
            case 37:
                this.position.x -= 5;
                break;
            case 39:
                this.position.x += 5;
                break;
            case 38:
                this.position.y -= 5;
                break;
            case 40:
                this.position.y += 5;
                break;
            case 65:
                this.angle += 5;
                break;
            case 83:
                this.angle -= 5;
                break;
        }
    }
    ;
    Update() { }
    ;
    Render() {
        this.ctx.fillStyle = "black";
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(math.RadToDegree(this.angle));
        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.ctx.restore();
    }
    ;
}
exports.default = Defender;
