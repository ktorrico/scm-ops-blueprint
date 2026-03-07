import React, { useState, useEffect } from 'react';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('/health')
      .then(r => r.json())
      .then(setHealth)
      .catch(() => setHealth({ status: 'error connecting to API' }));
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', padding: '2rem' }}>
      <h1>🚀 SCM Ops Blueprint</h1>
      <h2>Version: {process.env.REACT_APP_VERSION || '0.1.0'}</h2>
      <p>Environment: {process.env.REACT_APP_ENV || 'development'}</p>
      {health && (
        <div>
          <h3>API Health:</h3>
          <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
            {JSON.stringify(health, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
