import { useState } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Buscador de Canciones</h2>
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
