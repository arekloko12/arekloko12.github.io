/* Count down timer */

let text = document.querySelector(".text");

let countDate = new Date("Mar 30, 2024 12:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  text.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
});
