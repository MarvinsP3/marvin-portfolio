import "./App.css";

function App() {
  return (
    <div className="container">

      <nav className="nav">
        <h2>Marvins Pierre</h2>
        <div>
          <a href="#career">Career</a>
          <a href="#skills">Skills</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Cybersecurity Portfolio</h1>
        <p>
          Protecting systems, preventing cyber attacks, and securing the future.
        </p>
      </header>

      <section id="career">
        <h2>Career Path</h2>

        <div className="grid">

          <div className="card">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
            <h3>Cybersecurity Analyst</h3>
            <p>Monitor networks and detect threats.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" />
            <h3>Digital Forensics</h3>
            <p>Investigate cybercrime and hacking cases.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66" />
            <h3>Federal Cyber Agent</h3>
            <p>Protect national security systems.</p>
          </div>

        </div>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>Java</span>
          <span>Networking</span>
          <span>Cyber Threat Analysis</span>
          <span>Problem Solving</span>
          <span>Linux</span>
        </div>
      </section>

      <section id="ai">
        <h2>Ask My AI Assistant</h2>
        <input id="question" placeholder="Ask about my cybersecurity skills..." />
        <button onClick={askAI}>Ask AI</button>
        <p id="response"></p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <input placeholder="Your Email" />
        <button>Submit</button>
      </section>

      <footer>
        © 2026 Marvins Pierre | Cybersecurity Portfolio
      </footer>

    </div>
  );
}

function askAI() {
  const q = document.getElementById("question").value;
  let answer = "I focus on cybersecurity and protecting digital systems.";

  if (q.toLowerCase().includes("skills"))
    answer = "My skills include Python, Java, Linux, networking, and cyber threat detection.";

  if (q.toLowerCase().includes("career"))
    answer = "My goal is to work in cybersecurity for the FBI or a federal agency.";

  document.getElementById("response").innerText = answer;
}

export default App;
