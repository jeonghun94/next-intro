import { useState, useEffect } from "react";
import Seo from "../componets/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const API_ADDRESS = "ttps://api.themoviedb.org/3/movie/popular?api_key=";

export default function test() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="home" />
      {!movies && <h4>Loading</h4>}
      {movies?.map((x) => (
        <div key={x.id}>{x.original_title}</div>
      ))}
    </div>
  );
}
