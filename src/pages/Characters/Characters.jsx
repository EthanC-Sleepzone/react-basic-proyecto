import { useState, useEffect } from "react";
import "./Characters.css";
import Loading from "../../components/Loading/Loading";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);

  useEffect(() => {
    setLoading(true);
    setCharacters([]);
    fetch(
      `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.data);
        setLoading(false);
        setLimit(Math.floor(res.info.total / res.info.limit) + 1);
      });
  }, [page]);

  return (

    <main id="characters">
      <div class="full_characters"><h1>PERSONAJES DE STAR WARS</h1>
      {loading && <Loading />}
        <div class="characters_map">{characters.map((character) => (
          <Link key={character._id} to={`/character/${character._id}`} className="character_link">
            <CharacterCard character={character} />
          </Link>
        ))}</div>
      </div>

      <Pagination page={page} setPage={setPage} limit={limit} />
    </main>
  );
};

export default Characters;
