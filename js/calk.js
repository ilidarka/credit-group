const slider = document.querySelector(".slider_2");
const progress = document.querySelector(".progress");
const slider_1 = document.querySelector(".slider_1");
const progress_1 = document.querySelector(".progress_1");
slider.oninput = function () {
  progress.style.width = `${this.value}%`;
};
slider_1.oninput = function () {
  progress_1.style.width = `${this.value * 3.2}%`;
};
