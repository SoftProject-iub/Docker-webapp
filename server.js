// server.js

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

  res.send(`

  <!DOCTYPE html>
  <html lang="en">

  <head>

    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>Sheezzi Cyberpunk Dashboard</title>

    <style>

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      html,body{
        width:100%;
        min-height:100%;
        overflow-x:hidden;
        font-family:Arial,sans-serif;
        background:#050816;
        color:white;
      }

      body{
        position:relative;
      }

      /* Animated Background */

      .background{
        position:fixed;
        inset:0;
        z-index:-3;

        background:
          radial-gradient(circle at top left,#00ffff22,transparent 25%),
          radial-gradient(circle at bottom right,#ff00ff22,transparent 25%),
          linear-gradient(135deg,#050816,#0b1020,#050816);
      }

      .grid{
        position:fixed;
        inset:0;
        z-index:-2;

        background-image:
          linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.06) 1px, transparent 1px);

        background-size:40px 40px;

        animation:gridMove 10s linear infinite;
      }

      @keyframes gridMove{

        from{
          transform:translateY(0px);
        }

        to{
          transform:translateY(40px);
        }

      }

      /* Main Container */

      .container{
        min-height:100vh;

        display:flex;
        justify-content:center;
        align-items:center;

        padding:20px;
      }

      /* Main Card */

      .card{

        width:100%;
        max-width:950px;

        padding:50px;

        border-radius:30px;

        background:rgba(255,255,255,0.05);

        border:1px solid rgba(0,255,255,0.2);

        backdrop-filter:blur(14px);

        box-shadow:
          0 0 25px rgba(0,255,255,0.15),
          0 0 60px rgba(255,0,255,0.08);

        text-align:center;

      }

      /* Title */

      h1{

        font-size:clamp(3rem,8vw,6rem);

        margin-bottom:15px;

        color:#00ffff;

        letter-spacing:5px;

        text-shadow:
          0 0 10px #00ffff,
          0 0 20px #00ffff,
          0 0 40px #00ffff;

        animation:glow 2s ease-in-out infinite alternate;

        word-break:break-word;
      }

      @keyframes glow{

        from{
          text-shadow:
            0 0 10px #00ffff,
            0 0 20px #00ffff;
        }

        to{
          text-shadow:
            0 0 20px #00ffff,
            0 0 35px #ff00ff,
            0 0 55px #00ffff;
        }

      }

      .subtitle{

        color:#cccccc;

        font-size:clamp(1rem,2vw,1.4rem);

        line-height:1.7;

        margin-bottom:40px;

      }

      /* Status Grid */

      .stats{

        display:grid;

        grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

        gap:20px;

        margin-top:20px;
      }

      .box{

        padding:28px 20px;

        border-radius:20px;

        background:rgba(0,0,0,0.4);

        border:1px solid rgba(0,255,255,0.15);

        transition:0.35s ease;

      }

      .box:hover{

        transform:translateY(-8px) scale(1.03);

        box-shadow:
          0 0 25px rgba(0,255,255,0.25);

        border-color:#00ffff;

      }

      .box h2{

        font-size:clamp(1.5rem,3vw,2.2rem);

        margin-bottom:12px;

        color:#00ffcc;
      }

      .box p{

        color:#bbbbbb;

        font-size:1rem;

        line-height:1.5;
      }

      /* Status Badge */

      .status{

        margin-top:35px;

        display:inline-flex;

        align-items:center;
        justify-content:center;

        gap:10px;

        padding:14px 24px;

        border-radius:100px;

        background:rgba(0,255,204,0.08);

        border:1px solid rgba(0,255,204,0.25);

        color:#00ffcc;

        font-weight:bold;

        font-size:0.95rem;

        box-shadow:
          0 0 20px rgba(0,255,204,0.15);

        flex-wrap:wrap;
      }

      .dot{

        width:10px;
        height:10px;

        border-radius:50%;

        background:#00ff88;

        box-shadow:
          0 0 10px #00ff88,
          0 0 20px #00ff88;

        animation:pulse 1.5s infinite;
      }

      @keyframes pulse{

        0%{
          transform:scale(1);
          opacity:1;
        }

        50%{
          transform:scale(1.4);
          opacity:0.6;
        }

        100%{
          transform:scale(1);
          opacity:1;
        }

      }

      /* Footer */

      .footer{

        margin-top:35px;

        color:#777;

        font-size:0.95rem;

        line-height:1.7;
      }

      /* Mobile */

      @media(max-width:768px){

        .container{
          padding:15px;
        }

        .card{

          padding:30px 20px;

          border-radius:22px;
        }

        .stats{
          grid-template-columns:1fr;
        }

        .status{
          width:100%;
        }

      }

      /* Small Phones */

      @media(max-width:420px){

        h1{
          letter-spacing:2px;
        }

        .subtitle{
          font-size:0.95rem;
        }

        .box{
          padding:22px 16px;
        }

      }

    </style>

  </head>

  <body>

    <div class="background"></div>
    <div class="grid"></div>

    <div class="container">

      <div class="card">

        <h1>SHEEZZI</h1>

        <p class="subtitle">
          Cyberpunk Docker Dashboard Running Live on Railway 🚀
        </p>

        <div class="stats">

          <div class="box">
            <h2>ONLINE</h2>
            <p>Server running successfully with Express.js</p>
          </div>

          <div class="box">
            <h2>DOCKER</h2>
            <p>Containerized & optimized deployment</p>
          </div>

          <div class="box">
            <h2>RAILWAY</h2>
            <p>Production deployment active globally</p>
          </div>

        </div>

        <div class="status">

          <div class="dot"></div>

          SYSTEM SECURED • ALL SERVICES RUNNING

        </div>

        <div class="footer">

          Developed by Shahzad Nawaz ⚡<br>

          Node.js • Docker • Railway • Cyberpunk UI

        </div>

      </div>

    </div>

  </body>

  </html>

  `);

});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});