import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.Database_URL });

app.get("/", function (request, response) {
  response.json("I am Root.");
});

app.get("/music", async function (request, response) {
  const data = await db.query(`SELECT * FROM music`);
  response.json(data.rows);
});

app.post("/music", async function (request, response) {
  const artist = request.body.artist;
  const album = request.body.album;
  const song = request.body.song;

  await db.query(
    `INSERT INTO music (artist, album, song) VALUES ($1, $2, $3)`,
    [artist, album, song]
  );
  response.json("Music POST endpoint");
});

app.listen(8080, () => console.log("Server is running, best go catch it"));
