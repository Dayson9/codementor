import { chatInterface, inputInterface } from "./components.js";
import { sendChat, indicate } from "./functions.js";

// Render input interface 
inputInterface.render();

// Render chat interface
chatInterface.render();

const code = document.querySelector("#code"), command = document.querySelector("#command"), send = document.querySelector("#send");


send.addEventListener("click", () => sendChat());

code.addEventListener("input", () => indicate());