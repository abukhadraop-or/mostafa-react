import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "store/store";
import getData from "services/get-data";
import MovieCard from "components/moviesContainer/movieCard";
import PropTypes from "prop-types";

import {
  StyledLinearProgress,
  StyledMoviesContainer,
  StyledMovieCards,
  StyledButton,
  StyledButtonTitle,
  StyledCircularProgress,
  StyledCircle,
} from "components/moviesContainer/popularMovies/popular-movies.styles";

/**
 * A container that represents the main space of the page that has all the movie cards.
 *
 * @param {string} baseURL A string that represents the base segment of the main URL for the TMDB website.
 *
 * @param {string} apiKey A string that has the API key from TMDB.
 *
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 *
 * @param {bool} isFetchingData A boolean that indicates if there is an active fetching-data process at the moment or not.
 * 
 * @param {func} setIsFetchingData A function that change the state of fetching data when the (getData) function is being called.
 *
 * @return {Element} A styled component (section).
 */
function PopularMovies({ baseURL, apiKey, sortedBy, isFetchingData, setIsFetchingData }) {
  const disptach = useDispatch();
  const movieList = useSelector((state) => state.movies.movieList);
  const moviesPage = useSelector((state) => state.movies.moviesPage);

  useEffect(() => {
    loadMoreHandler();
  }, []);

  const loadMoreHandler = () => {
    setIsFetchingData(true);

    setTimeout(async () => {
      const data = await getData(
        baseURL,
        apiKey,
        sortedBy,
        moviesPage
      );
      setIsFetchingData(false);
      disptach(moviesActions.appendMovieList(data));
      disptach(moviesActions.incrementMoviesPage());
    }, 500);
  };

  return (
    <StyledMoviesContainer>
      {isFetchingData ? <StyledLinearProgress /> : null}

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
            <StyledCircle />
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

PopularMovies.defaultProps = {};

PopularMovies.propTypes = {
  isFetchingData: PropTypes.bool,
  setIsFetchingData: React.Dispatch<React.SetStateAction,
  baseURL: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  sortedBy: PropTypes.string.isRequired,
};

export default PopularMovies;
