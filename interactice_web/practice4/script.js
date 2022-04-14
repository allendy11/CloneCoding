(function () {
  const room = document.querySelector(".room");
  const container = document.querySelector(".container");
  let scrollArea;
  let mousePos = { x: 0, y: 0 };
  function resizeHandler() {
    scrollArea = document.body.offsetHeight - window.innerHeight;
  }
  function mouseMoveHandler(e) {
    mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
    // console.log(mousePos.x);
    // console.log(mousePos.y);
    container.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${
      mousePos.x * 5
    }deg)`;
  }
  window.addEventListener("scroll", function () {
    let scrollMove = (window.pageYOffset / scrollArea) * 980;
    room.style.transform = `translateZ(${scrollMove - 490}vw)`;
  });
  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
