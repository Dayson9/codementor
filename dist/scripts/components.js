const { QComponent } = QueFlow;


// Component for the chat interface 
var chatInterface = new QComponent("#main", {
  data: [],
  template: function() { 
   return this.data.map((d, i) => {
     
  let isLast = (i === this.data.length - 1);
  
  let className = (d.user) ? "user" : "bot";
  
  let content = (d.user) ? `self.data[${i}].user` : `self.data[${i}].bot`;
  
    return `
   <div class="${className}" ${isLast ? ' id="scroll"' : ''}>
       <code>
        {{${content}}}
       </code>
       ${d.command ? `<br><br><span>{{self.data[${i}].command}}</span>`: ""}
   </div>`; 
     
   }).join('');
    
  }
});

// Component for the input 
var inputInterface = new QComponent(".bottom", {
 data: {
  color: "rgba(0, 0, 0, 0.2)",
  info: ""
},

template: () =>{
  return `
  <div class="column">
      <small color = "{{self.data.color}}">{{self.data.info}}</small>
      <textarea id="code" cols="30" rows="10" placeholder="## Paste code here" border = "2px solid {{self.data.color}}"></textarea>
      <div class="row">
          <input type="text" placeholder="Input command" id="command"/>
          <button id="send">Go</button>
       </div>
  </div>`
}
});

export { chatInterface, inputInterface }