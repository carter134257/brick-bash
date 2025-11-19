import { patternSets } from "../pattern-set";
import { BrickSet } from "./brick-set";
import type { Point } from "./point";

export class patternSlotBlock {

    public brickSet!: BrickSet;

    constructor(
        private readonly ctx: CanvasRenderingContext2D,
        public point: Point
    ) {this.generateSet();
       
    };


    
    public generateSet() {
        let {ctx, point} = this;

        const idx = Math.floor(Math.random() * patternSets.length);
        const pattern = patternSets[idx];

        this.brickSet = new BrickSet(ctx, point.x, point.y, pattern)
    };

    public ispountover(point: Point) : boolean {
        return this.brickSet.isPointOver(point);


    }

    public move(point: Point) : void{
        this.brickSet.move(point);
    }


    public resetPos() : void {
        this.brickSet.move(this.point);
    }


};