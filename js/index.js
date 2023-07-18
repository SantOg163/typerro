/* eslint-disable linebreak-style */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable brace-style */
/* eslint-disable spaced-comment */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable space-infix-ops */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable operator-linebreak */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
const array = [
  "LeBron James",
  "Michael Jordan",
  "Kobe Bryant",
  "Magic Johnson",
  "Larry Bird",
  "Kareem Abdul-Jabbar",
  "Shaquille O'Neal",
  "Wilt Chamberlain",
  "Tim Duncan",
  "Hakeem Olajuwon",
  "Kevin Durant",
  "Stephen Curry",
  "Russell Westbrook",
  "James Harden",
  "Kawhi Leonard",
  "Giannis Antetokounmpo",
  "Anthony Davis",
  "Luka Doncic",
  "Damian Lillard",
  "Chris Paul",
  "Dirk Nowitzki",
  "Dwyane Wade",
  "Allen Iverson",
  "Charles Barkley",
  "Patrick Ewing",
  "Clyde Drexler",
  "John Stockton",
  "Karl Malone",
  "David Robinson",
  "Scottie Pippen",
];
let time = 10;
let currentNameIndex = 0;
const timeDown = document.getElementById("timeDown");
setInterval(update, 1000);
function update() {
  if (time >= 0) {
    timeDown.innerHTML = time;
    time--;
  } else {
    timeDown.innerHTML = "Game Over";
  }
}
function Mistake() {
  const message = document.getElementById("message");
  message.style.opacity = 1;
  setTimeout(function () {
    message.style.opacity = 0;
  }, 2000);
}
let content = document.getElementsByClassName("content")[0];
AddSpan(array[currentNameIndex]);
function AddSpan(text) {
  text.split("").forEach((element, index) => {
    const span = document.createElement("span");
    span.setAttribute("data-index", index);
    span.innerText = element;
    if (index === 0) {
      span.style.borderBottom = "5px solid blueviolet";
    }
    content.appendChild(span);
  });
}
let keyIndex = 0;
const spans = content.getElementsByTagName("span");
document.body.addEventListener("keydown", (event) => {
  const currentSpan = spans[keyIndex];
  //закончилось слово
  if (
    keyIndex === array[currentNameIndex].length - 1 &&
    event.key === currentSpan.innerText
  ) {
    content.innerHTML = "";
    currentNameIndex=Math.floor(Math.random()*array.length+1);
    AddSpan(array[currentNameIndex]);
    keyIndex = 0;
    time = 10;
  }
  //нужная буква
  else if (event.key === currentSpan.innerText) {
    currentSpan.style.borderBottom = "none";
    keyIndex++;
    document.getElementsByTagName("span")[keyIndex].style.borderBottom =
      "5px solid blueviolet";
  }
  //ошибка
  else if (event.key !== "CapsLock" && event.key !== "Shift") {
    time -= 5;
    Mistake();
  }
});
