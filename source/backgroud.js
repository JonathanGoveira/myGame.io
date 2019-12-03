"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function backGround(canvas, ctx) {
    alert("entrou");
    for (let y = 0; y <= canvas.width; y += 50) {
        alert("entrou");
        ctx.beginPath();
        ctx.moveTo(y, 0);
        ctx.lineTo(y, canvas.height);
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }
}
exports.default = backGround;
