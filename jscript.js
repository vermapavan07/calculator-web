const screen = document.getElementById("display");

const btns = Array.from(document.getElementsByTagName("button"));

btns.map((btn) => {
  btn.addEventListener("click", (val) => {
    let num = val.target.innerText;
    if (num === "C") {
      screen.value = "";
    } else if (num === "←") {
      screen.value = screen.value.slice(0, -1);
    } else if (num === "=") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error !"; 
        setTimeout(() => {
          screen.value ="";
        }, 5000);
        
      }
    } else {
      screen.value += val.target.innerText;
    }
  });
});
