import "./style.css";
import { ctx, canvas, initCanvas } from "./canvas-ctx";
import { GameManger } from "./game-manger";

initCanvas();

let gm = new GameManger(ctx, canvas);

function GameLoop(timestamp: number) {
    gm.update(timestamp);
    gm.draw();


    //stay LAST!!!!!!!!!!!!!!!!!!!!
    requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);

