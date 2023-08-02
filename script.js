
  document.addEventListener("mousemove", (e) => {
    console.log(e);
  const mousex = e.clientX;
  const mousey = e.clientY;
  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorx = rekt.left + rekt.width / 2;
  const anchory = rekt.top + rekt.heigth / 2;
  const angledeg = angle(mousex, mousey, anchorx, anchory);
  console.log(angledeg);
  const eye1 = document.querySelectorAll("#eye1");
  const eye2 = document.querySelectorAll("#eye2");
});
function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rand = Math.atan2(dy, dx);
  const deg = rand * 180 / Math.PI;
  return deg;
}
