export class ScoreBoard {
  private currentScore: number = 123456;

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private x: number,
    private y: number,
    private w: number,
    private h: number
  ) {}

  public draw(): void {
    const { ctx, y, x, h, w, currentScore } = this;

    ctx.save();

    let currentScoreX = x + w / 2;
    let currentScoreY = y + h / 2;

    ctx.font = "20px arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText(currentScore.toString(), currentScoreX, currentScoreY);

    ctx.restore();
  }
}
