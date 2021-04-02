const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const span = document.getElementById("span");

let elapsed = 1000;
span.textContent = elapsed / 100;

startBtn.addEventListener("click", () => {
  console.log("start");

  const getElapsed = () => {
    elapsed--;
    span.textContent = elapsed / 100;
    console.log(elapsed);
    const startTimer = setTimeout(getElapsed, 10);
    if (elapsed === 0) {
      clearTimeout(startTimer);
    }
  };
  getElapsed();
});

resetBtn.addEventListener("click", () => {
  console.log("reset");
});
