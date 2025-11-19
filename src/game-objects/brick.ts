import { BRICK_SIZE } from "../constants";
import { Point } from "./point";

export class Brick {
  //ctx: CanvasRenderingContext2D;
  size: number = BRICK_SIZE;

  highlightColor: null | string = null;

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    public x: number,
    public y: number,
    public readonly color: string = "green"
  ) {}

  public draw(): void {
    //destruture
    const { ctx, x, y, size, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);

    let borderSize = size * 0.15; //0.15

    //draw top

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

  public center(): Point {
    let c = new Point(this.x + this.size / 2, this.y + this.size / 2);
    return c;
  }

  public isOtherOver(brick: Brick): boolean {
    let isOver = this.isPointOver(brick.center());
    return isOver;
  }
}
