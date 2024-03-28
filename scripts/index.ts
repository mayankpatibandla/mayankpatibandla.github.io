import anime from "animejs/lib/anime.es.js";

// https://codepen.io/Hyperplexed/pen/zYWvXMM
const wrapper = document.getElementById("tiles");

let columns = 0,
  rows = 0,
  toggled = false;

const toggle = () => {
  toggled = !toggled;

  document.body.classList.toggle("toggled");
};

const handleOnClick = (index: number) => {
  toggle();

  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = (index: number) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  tile.style.opacity = toggled ? "0" : "1";

  tile.onclick = () => handleOnClick(index);

  return tile;
};

const createTiles = (quantity: number) => {
  Array.from(Array(quantity)).map((_tile, index) => {
    if (wrapper) {
      wrapper.appendChild(createTile(index));
    }
  });
};

const createGrid = () => {
  if (!wrapper) return;

  wrapper.innerHTML = "";

  const size = document.body.clientWidth > 800 ? 100 : 50;

  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);

  wrapper.style.setProperty("--columns", columns.toString());
  wrapper.style.setProperty("--rows", rows.toString());

  createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();

// https://www.youtube.com/watch?v=htGfnF1zN4g
const handleOnMouseMove = (event: MouseEvent) => {
  const { currentTarget: target } = event;

  if (target) {
    const targetElement = target as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    targetElement.style.setProperty("--mouse-x", `${x}px`);
    targetElement.style.setProperty("--mouse-y", `${y}px`);
  }
};

Array.from(document.getElementsByClassName("tile")).map((tile) => {
  (tile as HTMLElement).onmousemove = handleOnMouseMove;
});
