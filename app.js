const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    navBar.style.boxShadow = ".3px 0px 10px rgba(0,0,0,.3)";
  } else {
    navBar.style.boxShadow = "";
  }
});
