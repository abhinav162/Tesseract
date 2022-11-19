import logo from './logo.svg';
import './Token.css';

const MainBody = (
  <body>
    <div id="cursor" class="follow-cursor"></div>
    <div id="cursor2" class="follow-cursor2"></div>
    <div class="top-nav">
      <div id="branding" class="logo">
        <h1><span class="highlight">TESSERACT</span></h1>
      </div>
      <nav class="navigation">
        <ul id="menu" class="menu">
          <li><a class="nav-btn active" href="index.html">HOME</a></li>
          <li><a class="nav-btn" href="#projects">OWNED</a></li>
          <li><a class="nav-btn" href="skills.html">SOLD</a></li>
          <div class="buy-box"><a href="">BUY</a></div>
        </ul>
      </nav>
    </div>

    <section id="projects" class="skills">
        <div class="skills-container">
            <div class="card clearfix">
                <h1>Heading</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the er took a galley of type
                    and into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                </p>
            </div>
        </div>
    </section>
  </body>
);

function App() {
  return (
    <div className="App">
      {MainBody}
    </div>
  );
}

export default App;
