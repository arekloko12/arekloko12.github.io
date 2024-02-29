let burgerbtn = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let footer = document.querySelector(".footer");
let dropdown = document.querySelector(".dropdown");
let listbtn = document.querySelector(".projects-list");

let click = false;
let click2 = false;

burgerbtn.addEventListener("click", () => {
  if (click == false) {
    menu.style.display = "flex";
    footer.style.display = "none";
    burgerbtn.classList.toggle("active");
    menu.classList.toggle("active");
    click = true;
  } else if (click == true) {
    menu.style.display = "none";
    footer.style.display = "flex";
    burgerbtn.classList.toggle("active");
    menu.classList.toggle("active");
    click = false;
  }
});

function check_list_mode() {
  if (click2 == false) {
    dropdown.style.display = "block";
    click2 = true;
  } else if (click2 == true) {
    dropdown.style.display = "none";
    click2 = false;
  }
}

/* Count down timer */

let text = document.querySelector(".text");

let countDate = new Date("Mar 9, 2024 12:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  text.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
});
