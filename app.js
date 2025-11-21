// app.js
const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint - simple HTML page
app.get('/', (req, res) => {
  const hostname = os.hostname();
  const now = new Date().toISOString();

  res.send(`
    <html>
      <head>
        <title>K8s JS Demo</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: #0f172a;
            color: #e5e7eb;
            padding: 2rem;
          }
          .card {
            max-width: 480px;
            margin: 0 auto;
            border-radius: 0.75rem;
            padding: 1.5rem;
            background: #020617;
            border: 1px solid #1e293b;
          }
          h1 {
            margin-top: 0;
            font-size: 1.5rem;
          }
          .label {
            font-weight: 600;
            color: #38bdf8;
          }
          .value {
            font-family: "Fira Code", monospace;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 K8s JS Demo App</h1>
          <p>This app is running inside a Kubernetes pod.</p>
          <p><span class="label">Hostname:</span> <span class="value">${hostname}</span></p>
          <p><span class="label">Time (UTC):</span> <span class="value">${now}</span></p>
          <p><span class="label">Path:</span> <span class="value">GET /</span></p>
          <p>Try also: <span class="value">/healthz</span></p>
        </div>
      </body>
    </html>
  `);
});

// Health endpoint for liveness/readiness probes
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
