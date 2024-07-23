import { GoogleGenerativeAI } from "./gem.js";
import { chatInterface, inputInterface } from "./components.js";


/**
 * Generates a response based on the code and command
 * @param {string} _code Code to evaluate 
 * @param {string} comm Command or operation to perform on it
 * @return {Void}
 */
function generateResponse(_code, comm) {
  fetch('/init').then(res => res.text()).then(init => {
    let genAI = new GoogleGenerativeAI(init);
    let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = _code + `Based on the above code,` + comm;

    model.generateContent(prompt).then(res => res.response).then(data => {
      chatInterface.data.push({ bot: data.text() });

      let el = document.querySelector("#scroll");

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}


/**
 * Sends a chat and appends it to the UI
 * @return {Void}
 */
function sendChat() {
  let _code = code.value,
    _command = command.value;

  if (_code.length > 2) {
    chatInterface.data.push({ user: _code, command: _command });

    let els = (chatInterface.element).querySelectorAll(".user"),
      current = els[els.length - 1];

    setTimeout(() => {
      current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 300);

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

/**
 * Indicates whether chat input is valid or not
 * @return {Void}
 */
function indicate() {
  if (code.value.length < 3) {
    inputInterface.data.color = "red";
    inputInterface.data.info = "Input must be greater than 2  👿";
  } else {
    inputInterface.data.color = "#02CE31";
    inputInterface.data.info = "Good 😊";
  }
}

/**
 * Copies specified string to clipboard
 * @param {string} text String to copy to clipboard
 * @return {Void}
 */
async function writeClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

export { sendChat, indicate, writeClipboard }