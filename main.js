// skills progress

let skillSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(
  ".our-skills .container .skills .skill .progress span"
);

//stats progress
let mySection = document.querySelector(".stat");
let numbers = document.querySelectorAll(".stat .container .box .number");
let started = false;

window.onscroll = function () {
  // skills progress
  if (window.scrollY >= skillSection.offsetTop - 100) {
    progress.forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  }
  //stats progress
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



//event countdown

let eventDate = new Date("Dec 31, 2023 23:59:59").getTime();

let timeSpans = document.querySelectorAll(
  ".events .container .info .time .units .unite span:nth-child(1)"
);

let timeCount = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let remaning = eventDate - dateNow;

  // Get Time Units
  let days = Math.floor(remaning / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remaning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remaning % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remaning % (1000 * 60)) / 1000);

  timeSpans[0].textContent = days < 10? `0${days}`:days;
  timeSpans[1].textContent = hours < 10? `0${hours}`:hours;
  timeSpans[2].textContent = minutes< 10? `0${minutes}`:minutes;
  timeSpans[3].textContent = seconds < 10? `0${seconds}`:seconds;

  if (remaning < 0) {
    clearInterval(timeCount);
  }
}, 1000);


// Video Section 
let titles = document.querySelectorAll(".titles li")
let titlesArray = Array.from(titles)
let iframes = document.querySelectorAll(".my-video")
let iframesArray = Array.from(iframes)


titlesArray.forEach((title)=>{
  title.addEventListener("click", (e)=>{
    titlesArray.forEach((title)=>{
      title.classList.remove("clicked")
    })
    e.target.classList.add("clicked")
    iframesArray.forEach((iframe)=>{
      iframe.classList.remove("active")
    })
    document.querySelector(e.currentTarget.dataset.num).classList.add("active")
  })
  
})

