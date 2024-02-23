burgerbtn = document.querySelector(".burger");
menu = document.querySelector(".menu");

burgerbtn.addEventListener("click", () => {
  menu.style.display = "flex";
  burgerbtn.classList.toggle("active");
  menu.classList.toggle("active");
});
