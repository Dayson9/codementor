const UI_items = [`
   <header class="header">
       <i class="bx bx-menu-alt-left" id='trigger'></i>
       <div class="rowtop">
          <img src="./images/neuro_logo.png" alt="NeuroCode logo">
           <h1 class="legion gradient">Neurocode</h1>
       </div>
    </header>
    <nav>
      <div>
          <a href="/home"><i class="bx bxs-home gradient"></i></a>
          <a href="/home"><span>Home</span></a>
          
          <a href="/neurobot"><i class="bx bxs-bot gradient"></i></a>
          <a href="/neurobot"><span>NeuroBot</span></a>

          <a href="#htu"><i class="fa fa-list gradient"></i></a>
          <a href="#htu"><span>How to use</span></a>
      </div>
    </nav>

      
      <div class="container chat">
          <div id="main">
          </div>
      </div>
`,

`<header class="header">
  <i class="bx bx-menu-alt-left" id="trigger"></i>
  <img src="./images/neuro_logo.png" alt="Neurocode logo">
 <h1 class="legion gradient">Neurocode</h1>
<svg width="50" height="50">
  
</svg>
</header>

<nav>
<div>
          <a href="/home"><i class="bx bxs-home gradient"></i></a>
          <a href="/home"><span>Home</span></a>
          
          <a href="/neurobot"><i class="bx bxs-bot gradient"></i></a>
          <a href="/neurobot"><span>NeuroBot</span></a>

          <a href="#htu"><i class="fa fa-list gradient"></i></a>
          <a href="#htu"><span>How to use</span></a>
</div>
</nav>

<div id="hero">
  <div class="hero-content">
    <h1>An <span class="gradient">AI powered</span> code optimizer, debugger</h1>
    <span class='des'>Code alongside with AI, improve productivity.</span>
    <div>
    <a href="#htu"><button class="purp">Get Started<i class="fa fa-arrow-right"></i></button></a>
    <a href="#features"><button class="dark">Features <i class="fa fa-list"></i></button></a>
    </div>
  </div>
</div>

<div id="features">
   <h2>Features</h2>
   <div class="row">
    <i class="bx bxs-magic-wand gradient"></i>
    <div class="col">
       <h3>Code Optimization</h3>
       <p class="note">Analyzes the code for potential optimizations and suggests improvements for performance and readability.</p>
     </div>
   </div>
   <div class="row">
    <i class="bx bxs-cog gradient"></i>
      <div class="col">
        <h3>Code Debugging</h3>
        <p class="note">Identifies potential errors in the code and provides suggestions for fixing them.</p>
      </div>
    </div>
    <div class="row">
     <i class="bx bxs-chat gradient"></i>
     <div class="col">
       <h3>Comments</h3>
       <p class="note">Adds meaningful comments to the code, explaining each line and section.</p>
     </div>
   </div>
    <div class="row">
     <i class="fa fa-list gradient"></i>
     <div class="col">
       <h3>Code Explanation</h3>
       <p class="note">Explains the logic and purpose of the code snippet in a clear and concise manner. </p>
     </div>
   </div>
</div>

<div id="htu">
  <h2>How to Use</h2>
  <p>To begin, navigate to the <a href="/neurobot">NeuroBot</a> interface. You will be greeted with a user-friendly chat UI.</p>
  <p>Within the chat UI, you will find two distinct input fields. The first field is dedicated to pasting your code snippets, while the second field is intended for entering your commands.</p>
  <p>The available commands include, but are not limited to: "Rewrite with comments", "Rewrite in an optimized way", "Explain code", and "Debug code". Feel free to experiment with other commands as well.</p>
  <p>Once you have entered your code and command, simply click the send button to initiate the process. Enjoy exploring the capabilities of NeuroBot!</p>
</div>

<div id="info">
<p class="note">With all that's been said, why don't you <a href="/neurobot">take a look</a> at how it works.</p>  
</div>

<footer>
 <p>Built with ♥️ by <a href="https://tundeweb9.onrender.com" target="_blank">Dayson</a></p>
</footer>`
];

export { UI_items }