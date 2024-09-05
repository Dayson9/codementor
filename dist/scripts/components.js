const { QComponent, Render } = QueFlow;
import { UI_items } from "./ui_item.js";

Render(UI_items[0], "#app");

// Component for copied message
const copied = new QComponent("#info", {
  data: {
    display: "none",
    opacity: "0"
  },
  template: `
          <div display="{{this.data.display}}" opacity="{{this.data.opacity}}" class="cp">
            <span>Copied</span>
          </div>`
});

// Component for the input 
const inputInterface = new QComponent(".bottom", {
  data: {
  info: "",
  color: "rgba(0, 0, 0, 0.2)"
  },

  template: () =>{
    return `
      <div class="column">
          <small color='{{this.data.color}}'>{{this.data.info}}</small>
          <textarea id="code" cols="30" rows="10" placeholder="## Paste code here" border-color ='{{this.data.color}}'></textarea>
          <div class="row">
              <input type="text" placeholder="Input command" id="command"/>
              <button id="send" class="bx bxs-send"></button>
          </div>
      </div>`
  }
});


// Component for the chat interface 
const chatInterface = new QComponent("#main", {
  data: [],
  template: function() {
    if(!this.data.length) return '';
    
   return this.data.map((d, i) => {
    // Handles logic for the chat interface
    let isLast = (i === this.data.length - 1);
  
    let className = (d.user) ? "user" : "bot";
  
    let content = (d.user) ? `this.data[${i}].user` : `this.data[${i}].bot`;
  
    return `
      <div class="${className}" ${isLast ? ' id="scroll"' : ''}>
          <code>
            {{${content}}}
          </code>
          ${d.command ? `<br><br><span>{{this.data[${i}].command}}</span>`: ""}
      </div>`; 
     
    }).join('');
    
  }
});

export { chatInterface, inputInterface, copied }