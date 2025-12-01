import { BRICK_SIZE } from "../constants";
import { Point } from "./point";

export class Brick {
  //ctx: CanvasRenderingContext2D;
  size: number = BRICK_SIZE;

  //chalege wedsday
  highlightColor: null | string = null;//overrinde
  //chalege wedsday
  
  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public readonly color: string = "green"
  ) {}

  public draw(): void {
    //destruture
    const { ctx, x, y, size, color } = this;
    ctx.save();
    ctx.fillStyle =  this.highlightColor ?? color;
    ctx.globalAlpha = this.highlightColor ? 0.5 : 1
    ctx.fillRect(x, y, size, size);
    this.drawBevals();
    ctx.restore();

  }
  private drawBevals(): void {
      const {ctx, x, y, size, color} = this;
    //draw top

    let borderSize = size * 0.15; //0.15


    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size - borderSize, y + borderSize);
    ctx.lineTo(x + borderSize, y + borderSize);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();

    //draw left

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.lineTo(x + borderSize, y + size - borderSize);
    ctx.lineTo(x + borderSize, y + borderSize);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();

    //draw bottem
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.moveTo(x, y + size);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x + size - borderSize, y + size - borderSize);
    ctx.lineTo(x + borderSize, y + size - borderSize);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();
    //ctx.stroke();

    //my atempt
    //
    //
    //do not jugue
    //draw right

    ctx.fillStyle = "rgba(143, 143, 143, 0.5)";
    ctx.beginPath();
    ctx.moveTo(x + size, y + size);
    ctx.lineTo(x + size, y);
    ctx.lineTo(x + size - borderSize, y + borderSize);
    ctx.lineTo(x + size - borderSize, y + size - borderSize);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();


  }



  

  public isPointOver(point: Point): boolean {
    const { ctx, x, y, size } = this;
    const path = new Path2D();
    path.rect(x, y, size, size);
    const isInPath = ctx.isPointInPath(path, point.x, point.y);
    return isInPath;
  }
  //chalege wedsday
  public center(): Point {
    const {x, y, size } = this;
    let c = new Point(x + size / 2, y + size / 2);
    return c;
  }
  //chalege wedsday

  //chalege wedsday
  public isOtherOver(brick: Brick): boolean {
    let isOver = this.isPointOver(brick.center());
    return isOver;
  }
  //chalege wedsday

}
