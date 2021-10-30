import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <>
      <article className="grid-1-2">
        <SongArtist />
        <SongLyric />
      </article>
    </>
  );
};

export default SongDetails;
