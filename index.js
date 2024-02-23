burgerbtn = document.querySelector(".burger");
menu = document.querySelector(".menu");
footer = document.querySelector(".footer");

let click = false;

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
