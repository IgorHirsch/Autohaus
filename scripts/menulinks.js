window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navigation");
  if (window.scrollY > 100) {
    // Ab 100px Scrollhöhe
    nav.classList.add("fixed");
  } 
  else {
    nav.classList.remove("fixed");
  }
});
