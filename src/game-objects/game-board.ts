import { BOARD_COLOR } from "../constants";

export class GameBoard {
    color: string = BOARD_COLOR;
    row: number = 8;
    col: number = 8;

    constructor(
        private readonly ctx: CanvasRenderingContext2D,
        private readonly x: number,
        private readonly y: number
    ) {}
    public draw() : void {
        
    }
}

