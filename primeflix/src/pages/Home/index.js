import React, { useState, useEffect } from "react";
import api from "../../services/api";
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "88a65939ca18f60c284da99205a4fbcf",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
