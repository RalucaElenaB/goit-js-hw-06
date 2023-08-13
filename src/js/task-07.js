const fontSizeControl = document.getElementById("font-size-control");
const textSpanElement = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  textSpanElement.style.fontSize = fontSize;
});
