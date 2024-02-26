
document.getElementById('resume-link-1').addEventListener("click", () => {
  window.open("./assets/PrernaDave_fw21_0428.pdf", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click", () => {
  window.open("https://drive.google.com/drive/folders/1R6Zz_B8EN5PIsWvlX5Hgv98WDr8HlwSc", "_blank");
})

document.getElementById('resume-link-3').addEventListener("click", () => {
  window.open("https://drive.google.com/drive/folders/1R6Zz_B8EN5PIsWvlX5Hgv98WDr8HlwSc", "_blank");
})

document.addEventListener("DOMContentLoaded", function () {
  var navCheck = document.getElementById("nav-check");
  var navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navCheck.checked = false;
    });
  });
});