import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <h2>Marvins Pierre</h2>
        <div>
          <a href="#career">Career</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Future Career in Cybersecurity</h1>
        <p>
          My goal is to work in Cybersecurity for the FBI or a U.S. government
          agency protecting critical systems and stopping cyber threats.
        </p>
      </header>

      <section id="career">
        <h2>Career Path</h2>
        <div className="grid">
          <div className="card">Cybersecurity Analyst</div>
          <div className="card">Digital Forensics</div>
          <div className="card">Federal Cyber Agent</div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python & Java</li>
          <li>Networking</li>
          <li>Cyber threat awareness</li>
          <li>Problem solving</li>
          <li>Teamwork & communication</li>
        </ul>
      </section>

      {/* ✅ AI CHAT SECTION */}
      <section id="ai">
        <h2>Ask My AI Assistant</h2>
        <input id="question" placeholder="Ask about my skills..." />
        <button onClick={askAI}>Ask AI</button>
        <p id="response"></p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <input placeholder="Your Email" />
        <button>Submit</button>
      </section>
    </div>
  );
}

function askAI() {
  const q = document.getElementById("question").value;
  let answer = "I specialize in cybersecurity and protecting systems.";

  if (q.toLowerCase().includes("skills"))
    answer = "My skills include Python, Java, networking, and threat analysis.";

  if (q.toLowerCase().includes("career"))
    answer =
      "I aim to work in cybersecurity for the FBI or federal agencies.";

  document.getElementById("response").innerText = answer;
}

export default App;