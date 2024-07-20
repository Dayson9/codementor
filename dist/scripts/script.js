import { chatInterface, inputInterface, copied } from "./components.js";
import { sendChat, indicate, writeClipboard } from "./functions.js";

// Render input interface 
inputInterface.render();

// Render chat interface
chatInterface.render();

// Render copied
copied.render();


const code = document.querySelector("#code"), command = document.querySelector("#command"), send = document.querySelector("#send"), nav = document.querySelector("nav"), trigger = document.querySelector("#trigger");

var navIsOpened = 0;

trigger.addEventListener("click", () =>{
  if(navIsOpened) {
    nav.style.left = "-100%";
    navIsOpened = 0;
  } else {
    nav.style.left = "0%";
    navIsOpened = 1;
  }
})


send.addEventListener("click", () => {
  sendChat();
  let children = main.querySelectorAll('*');

  for (let child of children) {
    child.addEventListener("dblclick", function() {
      writeClipboard(child.innerText);
      copied.data.display = "inline";
      copied.data.opacity = "1";
      
      setTimeout(() => {
        copied.data.opacity = "0";
      }, 1800);
    });
    
  }
});

code.addEventListener("input", () => indicate());

code.addEventListener("blur", () => {
    inputInterface.data.info = "";
    inputInterface.data.color = "rgba(0,0,0,0.2)";
});
