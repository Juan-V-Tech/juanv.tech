import './App.css';
import { useState } from 'react';

function App() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <main className="container">
      <h1>Juan Ventura-Romero</h1>
      <h2>Computer Engineering & Computer Science Student</h2>
      <p className="subtitle">
        Software & Hardware Engineer | El Camino College Inter-Club Council Director of Diversity, Equity and Inclusion
      </p>

      {/* ——— About Me Section ——— */}
      <div className="about-me">
        <img
          src="/profile.jpeg"
          alt="Portrait of Juan Ventura-Romero"
          className="profile-photo"
        />
        <p>
          Hello there! I'm Juan Ventura-Romero, an aspiring student engineer and developer.
          My interest lies in software, eletronics, and hardware enginnering, as well as in promoting diversity, equity, and inclusion as the Director of DEI for the Inter-Club Council at El Camino College.
          I am dedicated to creating inclusive environments and diversifying the tech industry! Feel free to explore my projects and connect with me through the links below.
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
