class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    // function: this -> event.target
    // arrow: this -> class
    this.count = this.count + 1;
    this.repaintCount();
  };
  decrease = () => {
    this.count = this.count - 1;
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerHTML = this.count;
  };
}

new Counter({
  counter: "count",
  plusId: "plus",
  minusId: "minus",
});
