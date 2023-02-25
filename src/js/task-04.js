const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");
console.log(btnDecrementEl);
console.log(btnIncrementEl);
console.log(counterValue);

btnDecrementEl.addEventListener("click", function () {
  counter.decrement();
  counterValue.textContent = counter.value;
});
btnIncrementEl.addEventListener("click", function () {
  counter.increment();
  counterValue.textContent = counter.value;
});
