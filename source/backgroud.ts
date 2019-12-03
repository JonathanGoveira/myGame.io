export default function backGround(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D){
    // faz as linhas no eixo y
    for (let y =0; y <= 1000; y += 40){
        ctx.beginPath();
        ctx.moveTo(y,0);
        ctx.lineTo(y, 500);
        ctx.strokeStyle = "LightGrey";
        ctx.stroke();
        ctx.closePath();
    }
    // faz as linhas no eixo x
    for (let x =0; x <= 500; x += 40){
        ctx.beginPath();
        ctx.moveTo(0,x);
        ctx.lineTo(1000, x);
        ctx.strokeStyle = "Silver";
        ctx.stroke();
        ctx.closePath();
    }
}