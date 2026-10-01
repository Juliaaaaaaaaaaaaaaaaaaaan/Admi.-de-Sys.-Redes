const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>App JS Dockerizada</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background-color: #1e293b;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          text-align: center;
          border: 1px solid #334155;
        }
        h1 { color: #f7df1e; font-size: 2rem; margin-bottom: 10px; }
        p { font-size: 1.1rem; color: #94a3b8; }
        .status {
          display: inline-block;
          margin-top: 15px;
          padding: 8px 16px;
          background-color: #10b981;
          color: #022c22;
          font-weight: bold;
          border-radius: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 ¡Excelente Trabajo!</h1>
        <p>Has dockerizado correctamente esta aplicación de <strong>Node.js + Express</strong>.</p>
        <div class="status">● Contenedor Activo</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});