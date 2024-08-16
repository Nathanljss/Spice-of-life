import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  const [music, setMusic] = useState([]);
  const [form, setForm] = useState({
    artist: "",
    album: "",
    song: "",
  });

  useEffect(() => {
    getMusic();
  }, []);

  async function getMusic() {
    const response = await fetch(
      "https://ztcagrqcpbqlfcohswak.supabase.co"
    );
    const data = await response.json();
    setMusic(data);
  }

  function handleChange(event) {
    console.log("Type in an input happened");
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Form is submitted");
    console.log(form);

    await fetch(
      "https://ztcagrqcpbqlfcohswak.supabase.co",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    getMusic();
  }

  return (
    <div>
      <h1>🎵 Music is the spice of life 🎵</h1>
      <p>Discover new music and share yours!</p>
      <h2>
        Tell me your favourite artist, your favourite album by them and
        favourite song from that album
      </h2>
      <form className="tunes" onSubmit={handleSubmit}>
        <input
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
          value={form.artist}
          required
        />
        <input
          name="album"
          placeholder="Album"
          onChange={handleChange}
          value={form.album}
          required
        />
        <input
          name="song"
          placeholder="Song"
          onChange={handleChange}
          value={form.song}
          required
        />
        <button className="submit">Submit</button>
      </form>
      <br></br>
      <hr></hr>
      <br></br>
      <h2>Check these out</h2>
      <br></br>
      <Link to="/">Return Home</Link> |{" "}
      <Link to="/ArtistsPage">Show artists only</Link> |{" "}
      <Link to="/AlbumsPage">Show albums only</Link> |{" "}
      <Link to="/SongsPage">Show songs only</Link>
      {music.map(function (music) {
        return (
          <h3 className="entries" key={music.id}>
            {music.artist} - {music.album} - {music.song}
          </h3>
        );
      })}
    </div>
  );
}
