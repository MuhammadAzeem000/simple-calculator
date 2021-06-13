let display = document.querySelector(".calc__display__value");
const buttons = document.querySelectorAll(".calc__key");

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];

  button.addEventListener("click", () => {
    if (button.value === "DEL") {
      //BackSpace
      display.value = display.value.substr(0, display.value.length - 1);
    } else if (button.value === "RESET") {
      //Reset
      display.value = null;
    } else if (button.value === "=") {
      //Equal
      if (parseInt(display.value) % 1 != 0) {
        display.value = eval(display.value).toFixed(2);
      } else {
        display.value = eval(display.value);
      }
    } else {
      //Add numbers on display
      display.value += button.value;
    }
  });
}
