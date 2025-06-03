import './App.css';
import { useState } from 'react';

function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className="container">
      <h1>Juan Ventura-Romero</h1>
      <h2>Computer Engineering & Computer Science Student</h2>
      <p className="subtitle">
        Software & Hardware Engineer | ICC Rep for SHPE @ El Camino College
      </p>

      {/* ——— About Me Section ——— */}
      <div className="about-me">
        <img
          src="/profile.jpeg"
          alt="Portrait of Juan Ventura-Romero"
          className="profile-photo"
        />
        <p>
          Hello, nice to meet you and welcome to my website. I'm Juan an aspiring engineer and current student at El Camino College.
          Besides my coursework in computer science and computer engineering, I'm the current Inter-Club Council Director of Equity Diversity and Inclusion (EDI) at El Camino College.
        </p>
      </div>

      <div className="buttons">
        <a
          href="https://github.com/Juan-V-Tech"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          GitHub
        </a>
        <a
          href="/juan-ventura-romero.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Résumé
        </a>
        <a
          href="mailto:focusjc07@gmail.com"
          className="button"
        >
         Contact
        </a>
      </div>
    </main>
  );
}

export default App;
