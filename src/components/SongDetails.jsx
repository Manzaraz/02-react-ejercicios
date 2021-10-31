import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <article className="grid-1-2">
      {bio.artists ? (
        <SongArtist />
      ) : (
        <Message
          msg={`Error: no existe el intérprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric lyric={lyric} />
      )}
    </article>
  );
};

export default SongDetails;
