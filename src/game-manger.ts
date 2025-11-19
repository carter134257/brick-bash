import { BRICK_SIZE } from "./constants";
import { GameBoard } from "./game-objects/game-board";
import { patternSlotBlock } from "./game-objects/pattern-slot-block";
import { Point } from "./game-objects/point";

export class GameManger {
  private board: GameBoard;
  private boardPadding = {
    top: 100,
    bottem: 50,
  };

  private slotAlpha!: patternSlotBlock;
  private slotBeta!: patternSlotBlock;
  private slotCharlie!: patternSlotBlock;

  private mousePosition: Point = new Point(0, 0);
  private selectedslot: patternSlotBlock | null = null;

  constructor(
    private readonly ctx: CanvasRenderingContext2D,
    private readonly canvas: HTMLCanvasElement
  ) {
    this.wireUpEvents();
    this.board = new GameBoard(ctx, canvas.width / 2, this.boardPadding.top);

    this.inItSlots();
  }

  public draw(): void {
    const { board, slotBeta, slotAlpha, slotCharlie, ctx, canvas } = this;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    board.draw();
    slotAlpha.brickSet.draw();
    slotBeta.brickSet.draw();
    slotCharlie.brickSet.draw();
  }
  public update(timestamp: number): void {
    const slots = [this.slotAlpha, this.slotBeta, this.slotCharlie];
    //set mouse = defalt

    document.body.style.cursor = "cell";

    if (this.selectedslot) {
      document.body.style.cursor = "none";
      this.selectedslot.move(this.mousePosition);
    }

    if (
      !this.selectedslot &&
      slots.some((s) => s.ispountover(this.mousePosition))
    ) {
      document.body.style.cursor = "all-scroll";
    }
  }

  private inItSlots() {
    const y = this.boardPadding.top + BRICK_SIZE * 8 + this.boardPadding.bottem;
    let pointBeta = new Point(this.canvas.width / 1.8 - BRICK_SIZE * 2, y);

    let pointAlpha = new Point(pointBeta.x - BRICK_SIZE * 5, y);

    let pointcharlie = new Point(pointBeta.x + BRICK_SIZE * 5, y);
    this.slotBeta = new patternSlotBlock(this.ctx, pointBeta);

    this.slotAlpha = new patternSlotBlock(this.ctx, pointAlpha);

    this.slotCharlie = new patternSlotBlock(this.ctx, pointcharlie);
  }

  private wireUpEvents() {
    this.onMouseMove = this.onMouseMove.bind(this);

    document.addEventListener("mousemove", this.onMouseMove);

    this.onClick = this.onClick.bind(this);

    document.addEventListener("click", this.onClick);
  }

  private onMouseMove(event: MouseEvent) {
    this.mousePosition.x = event.clientX;
    this.mousePosition.y = event.clientY;
    //console.log("mousePosition", this.mousePosition);
  }

  private onClick() {
    //track selecred slot
    //pick up brick set dont have

    if (this.selectedslot) {
      this.selectedslot.resetPos();
      this.selectedslot = null;
    }

    const slots = [this.slotAlpha, this.slotBeta, this.slotCharlie];

    slots.forEach((s) => {
      if (s.ispountover(this.mousePosition)) {
        this.selectedslot = s;
      }
    });
  }
}
