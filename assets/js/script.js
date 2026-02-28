let btns = document.querySelectorAll(".btn");
let theme = document.documentElement;

console.log(theme);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let classList = e.currentTarget.classList;
    console.log("btn", btn)
    if (classList.contains("btn1")) {
      theme.style.setProperty("--theme-color", "purple");
    } else if (classList.contains("btn2")) {
      theme.style.setProperty("--theme-color", "yellow");
    } else if (classList.contains("btn3")) {
      theme.style.setProperty("--theme-color", "blue");
    } else {
      theme.style.setProperty("--theme-color", "pink");
    }
  });
});
