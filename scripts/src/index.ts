import anime from "animejs/lib/anime.es.js";

console.log("Starting animation...");

anime({
  targets: "div",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#FFF",
  duration: 800,
  loop: true,
});

console.log("Animation started.");
