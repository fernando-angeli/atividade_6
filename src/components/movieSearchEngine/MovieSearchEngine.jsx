import { useState } from "react";
import axios from "axios";
import Title from "../../components/title/Title";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import Input from "../../components/input/Input";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

function MovieSearchEngine() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmJjYjQ4OGEwNzliZmI5YjRjMjA5ZmEyY2VhMzUxZSIsIm5iZiI6MTczMTY2NjA2My43OTYzNzM2LCJzdWIiOiI2NmJmODYxMjIyZmIyODAzZDM0ODliMWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4LSyDG-Y9feCrmrURX6FFXUjllWgpBGGCHpLZ39_CE0";

  const [movie, setMovie] = useState([]);
  const [error, setError] = useState();
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        include_adult: "false",
        language: "pt-br",
        page: "1",
        query: `${query}`,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(query);

    axios
      .request(options)
      .then(function (response) {
        setMovie(response.data.results);
      })
      .catch(function (error) {
        setError(error);
        console.error("Erro:" + error);
      });
  };

  return (
    <Container>
      <Title title="Movies" />
      <Input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Informe um filme para pesquisar"
      />
      <Button
        onClick={searchMovies}
        description="Buscar"
        border="1px solid"
        borderRadius="0.5rem"
        textColor="white"
        width="8rem"
        height="2.5rem"
        fontSize="1.1rem"
      />
      <Movies>
        {movie &&
          movie.map((m) => (
            <MovieCard
              key={m.id}
              title={m.original_title}
              date={m.release_date}
              poster={`https://image.tmdb.org/t/p/original${m.backdrop_path}`}
            />
          ))}
      </Movies>
      <div className="error" style={{ color: "red" }}>
        {error}
      </div>
    </Container>
  );
}

export default MovieSearchEngine;
