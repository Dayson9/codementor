import { GoogleGenerativeAI } from "./gem.js";
import { chatInterface, inputInterface } from "./components.js";

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


function sendChat() {
  let _code = code.value, _command = command.value;
  
  if (_code.length > 2) {
    chatInterface.data.push({user: _code, command: _command});
    code.value = "";
    command.value = "";
  
    inputInterface.data.color = "rgba(0,0,0,0.2)";
    inputInterface.data.info = "";
    generateResponse(_code, _command);
  } else {
    inputInterface.data.color = "red";
    inputInterface.data.info = "Input must be greater than 2 👿";
  }
  }
  
  function indicate() {
    if (code.value.length < 3) {
      inputInterface.data.color = "red";
      inputInterface.data.info = "Input must be greater than 2 👿";
    } else {
      inputInterface.data.color = "#02CE31";
      inputInterface.data.info = "Good😊";
    }
  }
  
  export { sendChat, indicate }