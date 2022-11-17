const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const value = document.querySelector("#value");

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementButton.addEventListener("click", function () {
  counterValue.decrement();
  value.textContent = counterValue.value;
});

incrementButton.addEventListener("click", function () {
  counterValue.increment();
  value.textContent = counterValue.value;
});
