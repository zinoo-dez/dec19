let bars = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-links");
bars.addEventListener("click", function () {
  //   alert("hi");
  nav_links.classList.toggle("show");
  bars.classList.toggle("fa-times");
});
