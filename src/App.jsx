import "./App.css";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = async () => {
    if (!question) return;
    setResponse("Thinking...");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a cybersecurity assistant helping visitors learn about Marvins Pierre.",
            },
            { role: "user", content: question },
          ],
        }),
      });

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch {
      setResponse("Unable to connect to AI.");
    }
  };

  return (
    <div className="container">

      {/* MATRIX BACKGROUND */}
      <div className="matrix"></div>

      {/* NAV */}
      <nav className="nav">
        <h2>Marvins Pierre</h2>
        <div>
          <a href="#career">Career</a>
          <a href="#projects">Projects</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <h1>Cybersecurity Portfolio</h1>

        <div className="intro-box">
          <h2>Hello, I'm Marvins Pierre</h2>

          <p className="welcome">
            Welcome to my page! This is my cybersecurity portfolio where you can
            explore my skills, projects, and passion for protecting digital
            systems and preventing cyber threats.
          </p>

          <p>
            I am an aspiring cybersecurity professional focused on network
            security, threat detection, and safeguarding critical infrastructure.
            My goal is to work in cybersecurity for the FBI or a federal agency,
            helping defend systems and protect sensitive information.
          </p>
        </div>
      </header>

      {/* CAREER */}
      <section id="career">
        <h2>Career Path</h2>
        <div className="grid">
          <div className="card">Cybersecurity Analyst</div>
          <div className="card">Digital Forensics</div>
          <div className="card">Federal Cyber Agent</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">AI Card Game</div>
          <div className="card">Network Scanner</div>
          <div className="card">Security Monitor Tool</div>
        </div>
      </section>

      {/* AI CHATBOT */}
      <section id="ai">
        <h2>Cyber AI Assistant</h2>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about my cybersecurity skills..."
        />
        <button onClick={askAI}>Ask AI</button>
        <p className="response">{response}</p>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact Me</h2>
        <input placeholder="Your Email" />
        <button>Submit</button>
      </section>

      <footer>© 2026 Marvins Pierre</footer>
    </div>
  );
}

export default App;
