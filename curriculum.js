function resizeContainer(input) {
  const container = input.parentElement;
  container.style.width = "fit-content";
  container.style.width = `${input.scrollWidth}px`;
}
function getTextWidth(text, font) {
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}
