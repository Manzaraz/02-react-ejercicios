import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  // console.log(bio);
  if (!lyric || !bio) return null;

  return (
    <>
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
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
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
    </>
  );
};

export default SongDetails;
