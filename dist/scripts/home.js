const { Render } = QueFlow;
import { UI_items } from './ui_item.js';

Render(UI_items[1], "#app");

const nav = document.querySelector("nav"), trigger = document.querySelector("#trigger"), navLinks = nav.querySelectorAll("a");

var navIsOpened = 0;

trigger.addEventListener("click", () =>{
  if(navIsOpened) {
    nav.style.left = "-100%";
    navIsOpened = 0;
  } else {
    nav.style.left = "0%";
    navIsOpened = 1;
  }
});

navLinks.forEach((elem) => {
  elem.addEventListener("click", () => {
    nav.style.left = "-100%";
    navIsOpened = 0;
  })
})