//stats progress
let mySection = document.querySelector(".stat");
let numbers = document.querySelectorAll(".stat .container .box .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= mySection.offsetTop - 250) {
    if (!started) {
      numbers.forEach((ele) => startCounting(ele));
    }
    started = true;
  }
};

function startCounting(ele) {
  let goal = ele.dataset.num;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}

//scroller
let scroller = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / (height + 1800)) * 100}%`;
});
