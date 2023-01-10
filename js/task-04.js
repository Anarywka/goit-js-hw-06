const displayCounter = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};
btnDecrement.addEventListener("click", () => {
  counter.decrement();
  displayCounter.textContent = counter.counterValue;
});

btnIncrement.addEventListener("click", () => {
  counter.increment();
  displayCounter.textContent = counter.counterValue;
});