let ballon = document.getElementById("ballon");
let strip = document.getElementById("strip");
let Button = document.getElementById("button");
Button.addEventListener("click", function () {
    gsap.to(ballon && strip, {
      y: -800,
    });
    gsap.to(ballon, {
        y: -800,
      });
  });