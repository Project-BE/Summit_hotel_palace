window.addEventListener("scroll", function () {
    var header = document.querySelector("#nav-container")
    header.classList.toggle("sticky", window.scrollY > 0)
  })