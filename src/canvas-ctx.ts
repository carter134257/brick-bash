export let canvas = document.querySelector<HTMLCanvasElement>("#main-game")!;
export let ctx = canvas.getContext("2d")!;

export function initcanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener("resize", onresize);

}

function onresize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  console.log("resize window", canvas.width, canvas.height);
};



