import GenreRow from "./GenreRow";
import "./Home.css";

const Home = ({ onSelectMovie }) => {
  return (
    <div className="home">
      <GenreRow
        title="🔥 Action Movies"
        movies={[
          "Avengers: Endgame",
          "John Wick",
          "l2 empuraan",
          "Mission: Impossible – the final reckoning",
          "leo",
          "salaar",
          "jailer",
          "pathaan",
          "bullet train",
          "love hurts",
        ]}
        onSelectMovie={onSelectMovie}
      />

      <GenreRow
        title="🎭 Drama Movies"
        movies={[
          "avatar: fire and ash",
          "karwaan",
          "kantara: a legend chapter 1",
          "mad",
          "rrr",
          "blade runner 2049",
          "baahubali: the epic",
          "aavesham",
          "yashoda",
          "120 bahadur",
        ]}
        onSelectMovie={onSelectMovie}
      />

      <GenreRow
        title="😂 Comedy Movies"
        movies={[
          "The Hangover",
          "3 Idiots",
          "the bad guys 2",
          "stree 2",
          "the raja saab",
          "padakkalam",
          "deadpool",
          "hera pheri",
          "dd returns",
          "madgaon express",
        ]}
        onSelectMovie={onSelectMovie}
      />

      <GenreRow
        title="💖 Romance Movies"
        movies={[
          "tu meri main tera main tera tu meri",
          "Hi Nanna",
          "La La Land",
          "96",
          "sita ramam",
          "family star",
          "materialists",
          "anyone but you",
          "thiruchitrambalam",
          "the notebook",
        ]}
        onSelectMovie={onSelectMovie}
      />

      <GenreRow
        title=" 🚀 Sci-Fi Movies"
        movies={[
          "24",
          "maanaadu",
          "tenet",
          "kalki 2898 ad",
          "terminator dark fate",
          "krrish 3",
          "lokah",
          "love insurance kompany",
          "arrival",
          "attack",
        ]}
        onSelectMovie={onSelectMovie}
      />

      <GenreRow
        title="😱 Horror Movies"
        movies={[
          "The Conjuring",
          "Insidious",
          "Untill Dawn",
          "tumbbad",
          "pizza",
          "13B",
          "bhoot",
          "1920",
          "baramulla",
          "haunted 3d",
        ]}
        onSelectMovie={onSelectMovie}
      />
    </div>
  );
};

export default Home;
