import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Beautiful Webpage</h1>
      </header>
      <main>
        <section className="hero">
          <h2>A modern and professional webpage</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <button>Learn More</button>
        </section>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Modern design</li>
            <li>Responsive layout</li>
            <li>Light animations and hover effects</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Beautiful Webpage</p>
      </footer>
    </div>
  );
}

export default App;