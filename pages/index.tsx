import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <main
      style={{
        background: darkMode ? '#111' : '#f4f4f4',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'Arial',
        transition: 'all 0.3s ease',
      }}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        data-testid="theme-toggle"
        style={{ marginBottom: '1rem' }}
      >
        Toggle Theme
      </button>

      <h1 style={{ fontSize: '2rem' }}>Welcome to My Visual Test Page</h1>

      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          borderRadius: '10px',
          background: darkMode ? '#333' : '#fff',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          maxWidth: '400px',
        }}
        data-testid="profile-card"
      >
        <img
          src="/avatar.png"
          alt="Avatar"
          style={{ borderRadius: '50%', width: '80px' }}
        />
        <h2 style={{ margin: '1rem 0 0.5rem' }}>Ghilas The QA dev that test visual regression works🚀</h2>
        <p>Software Tester & Playwright Explorer 🚀</p>
        <button onClick={() => setMessage('Hello from the test!')} data-testid="clickMe">
          Click Me
        </button>
        {message && <p data-testid="message">{message}</p>}
      </div>
    </main>
  );
}
