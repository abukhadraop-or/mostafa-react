import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "store/store";

import MovieCard from "components/UI/MovieCard";
import {
  StyledMoviesContainer,
  StyledMovieCards,
  StyledButton,
  StyledButtonTitle,
  StyledCircularProgress,
} from "components/popular-movies/PopularMoviesStyles";

function PopularMovies(props) {
  const disptach = useDispatch();

  const movieList = useSelector((state) => state.movies.movieList);
  const moviesPage = useSelector((state) => state.movies.moviesPage);

  useEffect(() => {
    loadMoreHandler();
  }, []);

  const loadMoreHandler = () => {
    props.setIsFetchingData(true);

    setTimeout(async () => {
      const data = await props.getData(moviesPage);
      disptach(moviesActions.appendMovieList(data));
      disptach(moviesActions.incrementMoviesPage());
    }, 500);

    // if (moviesPage === 2) {
    //   window.addEventListener("scroll", () => {
    //     if (
    //       window.innerHeight + document.documentElement.scrollTop ===
    //       document.scrollingElement.scrollHeight
    //     ) {
    //       loadMoreHandler();
    //     }
    //   });
    // }
  };

  return (
    <StyledMoviesContainer>
      {props.isFetchingData ? (
        <Box
          sx={{ width: "100vw", height: "10px" }}
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            zIndex: "22",
          }}
        >
          <LinearProgress />
        </Box>
      ) : null}

      <StyledMovieCards id="cards">
        {movieList.length !== 0 ? (
          movieList.map((movie, index) => {
            return (
              <MovieCard
                name={movie.original_title}
                vote={movie.vote_average}
                date={movie.release_date}
                overview={movie.overview}
                imageURL={movie.poster_path}
                movieKey={`${index}${movie.original_title}`}
                key={`${index}${movie.original_title}`}
              />
            );
          })
        ) : (
          <StyledCircularProgress>
            <CircularProgress sx={{ width: "100%", height: "100%" }} />
          </StyledCircularProgress>
        )}
      </StyledMovieCards>

      <StyledButton>
        <StyledButtonTitle onClick={loadMoreHandler}>
          Load More
        </StyledButtonTitle>
      </StyledButton>
    </StyledMoviesContainer>
  );
}

export default PopularMovies;
