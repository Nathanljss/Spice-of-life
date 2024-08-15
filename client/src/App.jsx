import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArtistsPage } from "./Pages/ArtistsPage";
import { AlbumsPage } from "./Pages/AlbumsPage";
import { SongsPage } from "./Pages/SongsPage";
import { HomePage } from "./Pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ArtistsPage" element={<ArtistsPage />} />
        <Route path="/AlbumsPage" element={<AlbumsPage />} />
        <Route path="/SongsPage" element={<SongsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
