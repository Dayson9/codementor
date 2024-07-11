import { GoogleGenerativeAI } from "./gem.js";
import { chatInterface, inputInterface } from "./components.js";
import { UI_items } from "./ui_item.js";

const { Render } = QueFlow;

Render(UI_items[0], "#app");

inputInterface.render();

console.log(chatInterface);

const code = document.querySelector("#code");
const command = document.querySelector("#command");
const send = document.querySelector("#send");

function generateResponse(_code, comm) {
fetch('/init').then(res => res.text()).then(init => {
let genAI = new GoogleGenerativeAI(init);
let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  let prompt = _code + `You are currently integrated into a web app that improves, explains, comments, rewrites a code, and other code related tasks, so from the above code,`+ comm;

  model.generateContent(prompt).then(res => res.response).then(data => {
    chatInterface.data.push({bot: data.text()});
    
    let el = document.querySelector("#scroll");
    
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    });
});
}

send.addEventListener("click", () => {
  let _code = code.value, _command = command.value;
  
  if (_code.length > 2) {
  chatInterface.data.push({user: _code, command: _command});
  code.value = "";
  command.value = "";
  }

 generateResponse(_code, _command);
});

code.addEventListener("input", () =>{
  if(code.value.length < 3) {
   inputInterface.data.color = "red";
   inputInterface.data.info = "Input length must be greater than 3"
  } else {
    
  }
})