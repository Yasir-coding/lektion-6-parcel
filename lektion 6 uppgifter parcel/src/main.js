import anime from "../node_modules/animejs/lib/anime.es.js";

import logHello from "./modules/myFunc.js";



logHello("media/bilipbg.jpg")

anime({
  targets: "img",
  translateX: "200px",
  translateY: "200px",
  duration: 10000,
  scale: 0.1
});

