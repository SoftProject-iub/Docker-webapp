// server.js

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Docker Demo</title>
        <style>
          body{
            background:#111;
            color:white;
            font-family:Arial;
            display:flex;
            justify-content:center;
            align-items:center;
            height:100vh;
            flex-direction:column;
          }

          h1{
            color:#00ff88;
            font-size:60px;
          }

          p{
            font-size:22px;
          }
        </style>
      </head>

      <body>
        <h1>Hello Shahzad 🚀</h1>
        <p>Your Docker app is running successfully on Railway.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});