const themeButtons = document.querySelectorAll("#one, #two, #three");
const mainBody = document.querySelector("body");

for (let index = 0; index < themeButtons.length; index++) {
  themeButtons[index].addEventListener("click", () => {
    if (themeButtons[index].value === "false") {
      mainBody.classList.add("theme1");
      mainBody.classList.remove("theme2");
      mainBody.classList.remove("theme3");
    } else if (themeButtons[index].value === "-1") {
      mainBody.classList.add("theme2");
      mainBody.classList.remove("theme1");
      mainBody.classList.remove("theme3");
    } else if (themeButtons[index].value === "true") {
      mainBody.classList.add("theme3");
      mainBody.classList.remove("theme1");
      mainBody.classList.remove("theme2");
    }
  });
}
