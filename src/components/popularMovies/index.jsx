import React, { useState, useEffect } from "react";
import getData from "services/get-data";
import MovieCard from "components/movieCard";
import PropTypes from "prop-types";

import {
  StyledLinearProgress,
  StyledMoviesContainer,
  StyledMovieCards,
  StyledButton,
  StyledButtonTitle,
  StyledCircularProgress,
  StyledCircle,
} from "components/popularMovies/popular-movies.styles";

/**
 * A container that represents the main space of the page that has all the movie cards.
 *
 * @param {string} baseURL A string that represents the base segment of the main URL for the TMDB website.
 * @param {string} apiKey A string that has the API key from TMDB.
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * @param {bool} isFetchingData A boolean that indicates if there is an active fetching-data process at the moment or not.
 * @param {func} setIsFetchingData A function that change the state of fetching data when the (getData) function is being called.
 * @param {object} popularMoviesList An object that stores the list of movies and the current page from the API.
 * @param {func} setPopularMoviesList A function that changes the list of movies and the current page from the API.
 *
 * @return {Element} A styled component (section).
 */
function PopularMovies({
  baseURL,
  apiKey,
  sortedBy,
  isFetchingData,
  setIsFetchingData,
  popularMoviesList,
  setPopularMoviesList,
}) {
  const [isListOpened, setIsListOpened] = useState(false);

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
        popularMoviesList.moviesPage
      );

      setIsFetchingData(false);

      setPopularMoviesList((prev) => ({
        movieList: [...prev.movieList, ...data],
        moviesPage: prev.moviesPage + 1,
      }));
    }, 500);
  };

  return (
    <StyledMoviesContainer>
      {isFetchingData ? <StyledLinearProgress /> : null}

      <StyledMovieCards id="cards">
        {popularMoviesList.movieList.length !== 0 ? (
          popularMoviesList.movieList.map((movie, index) => {
            return (
              <MovieCard
                name={movie.original_title}
                vote={movie.vote_average}
                date={movie.release_date}
                overview={movie.overview}
                imageURL={movie.poster_path}
                isListOpened={isListOpened}
                setIsListOpened={setIsListOpened}
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

PopularMovies.propTypes = {
  isFetchingData: PropTypes.bool.isRequired,
  setIsFetchingData: PropTypes.func.isRequired,
  baseURL: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  sortedBy: PropTypes.string.isRequired,
  popularMovies: PropTypes.object.isRequired,
  setPopularMovies: PropTypes.func.isRequired,
};

export default PopularMovies;
