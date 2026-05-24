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
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Sheezzi Cyber Dashboard</title>

    <style>

      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        background: #050816;
        font-family: Arial, sans-serif;
        color: white;
        overflow:hidden;
      }

      .background{
        position:absolute;
        width:100%;
        height:100%;
        background:
          radial-gradient(circle at top left, #00ffcc33, transparent 30%),
          radial-gradient(circle at bottom right, #ff00ff22, transparent 30%),
          #050816;
        z-index:-2;
      }

      .grid{
        position:absolute;
        width:100%;
        height:100%;
        background-image:
          linear-gradient(rgba(0,255,255,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,255,0.07) 1px, transparent 1px);
        background-size:40px 40px;
        z-index:-1;
      }

      .container{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        padding:20px;
      }

      .card{
        background: rgba(255,255,255,0.05);
        border:1px solid rgba(0,255,255,0.2);
        backdrop-filter: blur(10px);
        border-radius:20px;
        padding:50px;
        width:90%;
        max-width:800px;
        box-shadow:
          0 0 20px #00ffff55,
          0 0 40px #ff00ff22;
      }

      h1{
        font-size:70px;
        margin-bottom:20px;
        color:#00ffff;
        text-shadow:
          0 0 10px #00ffff,
          0 0 20px #00ffff,
          0 0 40px #00ffff;
        animation: glow 2s infinite alternate;
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
            0 0 40px #ff00ff,
            0 0 60px #00ffff;
        }
      }

      .subtitle{
        font-size:24px;
        color:#cccccc;
        margin-bottom:40px;
      }

      .stats{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
        gap:20px;
        margin-top:30px;
      }

      .box{
        padding:25px;
        border-radius:15px;
        background: rgba(0,0,0,0.4);
        border:1px solid rgba(0,255,255,0.2);
        transition:0.3s;
      }

      .box:hover{
        transform:translateY(-5px) scale(1.03);
        box-shadow:0 0 20px #00ffff55;
      }

      .box h2{
        font-size:35px;
        color:#00ffcc;
        margin-bottom:10px;
      }

      .box p{
        color:#aaa;
        font-size:18px;
      }

      .status{
        margin-top:35px;
        display:inline-block;
        padding:12px 25px;
        border-radius:50px;
        background:#00ffcc22;
        border:1px solid #00ffcc55;
        color:#00ffcc;
        font-weight:bold;
        box-shadow:0 0 15px #00ffcc55;
      }

      .footer{
        margin-top:30px;
        color:red;
        font-size:14px;
      }

      @media(max-width:768px){

        h1{
          font-size:45px;
        }

        .subtitle{
          font-size:18px;
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
          Cyberpunk Docker Dashboard Running on Railway 🚀
        </p>

        <div class="stats">

          <div class="box">
            <h2>ONLINE</h2>
            <p>Server Status</p>
          </div>

          <div class="box">
            <h2>DOCKER</h2>
            <p>Container Active</p>
          </div>

          <div class="box">
            <h2>RAILWAY</h2>
            <p>Deployment Live</p>
          </div>

        </div>

        <div class="status">
          SYSTEM SECURED • ALL SERVICES RUNNING
        </div>

        <div class="footer">
          Developed by Shahzad Nawaz ⚡
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