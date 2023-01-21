if (typeof window !== "undefined") {
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  const clip = document.getElementById("clip");
  const about = document.getElementById("about");
  const dpBG = document.querySelector(".dp");
  const yearBG = document.querySelector(".year-text-bg");
  const aboutText = document.querySelector(".about-text");
  const cookieText = document.querySelector(".cookie-text");
  const aboutTextColor = document.querySelectorAll(".text-color");
  const tooltipText = document.querySelector(".tooltiptext");
  const myImage = document.getElementById("prod");


  if (c1) {
    c1.addEventListener("click", (e) => {
      about.style.color = "#494f42";
      about.style.background =
        "linear-gradient(0deg, rgb(255, 242, 237) 0%,rgba(255, 229, 217, 1) 30%,rgba(255, 201, 176, 1) 100%)";
      dpBG.style.background = "#ffe5d9";
      yearBG.style.background = "#ffe5d9";
      yearBG.style.color = "#5A5549";
      cookieText.style.fill = "#5A5549";
      aboutTextColor.forEach((element) => {
        element.style.color = "#494f42";
      });
      myImage.src = "/dotASH.png";
    });
  }
  if (c2) {
    c2.addEventListener("click", (e) => {
      about.style.color = "#494f42";
      about.style.background =
        "linear-gradient(0deg, rgba(254,255,254,1) 5%, rgba(224,242,217,1) 64%, rgba(199,222,191,1) 100%)";
      dpBG.style.background = "#E5F4DF";
      yearBG.style.background = "#E5F4DF";
      yearBG.style.color = "#5A5549";
      cookieText.style.fill = "#5A5549";
      aboutTextColor.forEach((element) => {
        element.style.color = "#494f42";
      });
      myImage.src = "/dotASH.png";
    });
  }

  if (c3) {
    c3.addEventListener("click", (e) => {
      about.style.color = "#ead6d6";
      about.style.background =
        "linear-gradient(0deg, rgba(157,129,137,1) 1%, rgba(127,101,108,1) 57%, rgba(113,86,93,1) 100%)";
      dpBG.style.background = "#947981";
      yearBG.style.background = "#947981";
      yearBG.style.color = "#ffe5d9";
      cookieText.style.fill = "#ffe5d9";
      aboutTextColor.forEach((element) => {
        element.style.color = "#ead6d6";
      });
      myImage.src = "/dotASH-dark.png";
    });
  }

  if (aboutText) {
    aboutText.addEventListener("click", (e) => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  document.body.addEventListener("click", function (event) {
    if (event.target.id == "customTooltip") {
      tooltipText.style.opacity = 1;
      tooltipText.style.visibility = "visible";
      tooltipText.style.transform = "scale(1)";
    } else {
      tooltipText.style.opacity = 0;
      tooltipText.style.visibility = "hidden";
      tooltipText.style.transform = "scale(0)";
    }
  });
}