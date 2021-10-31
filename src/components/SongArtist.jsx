const SongArtist = ({ artist }) => {
  // console.log(artist);
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a
        href={`http://${artist.strWebsite}`}
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <em>{artist.strWebsite}</em>
      </a>
      <p>{artist.strBiographyES || artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
