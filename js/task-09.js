
const refs = {
  button: document.querySelector('button.change-color'),
  body: document.body,
  colorSpan: document.querySelector('span.color'),
}
refs.button.addEventListener('click', onClick)

function onClick() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

