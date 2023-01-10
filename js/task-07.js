const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
}

inputSize();
refs.input.addEventListener('input', inputSize)

function inputSize() {
  refs.text.style.fontSize = `${refs.input.value}px`
}

