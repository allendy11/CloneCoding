(function () {
  const room = document.querySelector(".room");
  const container = document.querySelector(".container");
  let scrollHeight;
  const mousePos = { x: 0, y: 0 };
  function resizeHandler() {
    scrollHeight = document.body.offsetHeight - window.innerHeight;
  }
  window.addEventListener("scroll", () => {
    const scrollMove = (pageYOffset / scrollHeight) * 980;
    console.log(scrollMove);
    room.style.transform = `translateZ(${scrollMove - 500}vw)`;
  });
  window.addEventListener("mousemove", (e) => {
    mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    console.log(mousePos.x, mousePos.y);
    container.style.transform = `rotateX(${mousePos.y * 20}deg) rotateY(${
      mousePos.x * 20
    }deg)`;
  });
  window.addEventListener("resize", resizeHandler);
  resizeHandler();
})();
