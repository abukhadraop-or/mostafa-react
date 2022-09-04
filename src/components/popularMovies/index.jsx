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
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * @param {bool} isFetchingData A boolean that indicates if there is an active fetching-data process at the moment or not.
 * @param {func} changeFetchingDataState A function that change the state of fetching data when the (getData) function is being called.
 * @param {Array} popularMoviesList An array that stores the list of movies from the API.
 * @param {number} popularMoviesPage A number that stores the current page from the API.
 * @param {func} updateMoviesList A function that changes the list of movies from the API.
 * @param {func} updateMoviesPage A function that changes the the current page from the API.
 *
 * @return {Element} A styled component (section).
 */
function PopularMovies({
  sortedBy,
  isFetchingData,
  changeFetchingDataState,
  popularMoviesList,
  popularMoviesPage,
  updateMoviesList,
  updateMoviesPage,
}) {
  const [isListOpened, setIsListOpened] = useState(false);

  useEffect(() => {
    loadMoreHandler();
  }, []);

  /**
   * A function that fetches the next page of movies from the API.
   */
  const loadMoreHandler = async () => {
    changeFetchingDataState(true);
    const data = await getData(sortedBy, popularMoviesPage + 1);
    updateMoviesPage(popularMoviesPage + 1);
    updateMoviesList([...popularMoviesList, ...data]);
    changeFetchingDataState(false);
  };

  /**
   * A function that toggle the state that indicates if one of the cards' list is opened.
   */
  const toggleIsOpened = () => {
    setIsListOpened((prev) => !prev);
  };

  return (
    <StyledMoviesContainer>
      {isFetchingData ? <StyledLinearProgress /> : null}

      <StyledMovieCards id="cards">
        {popularMoviesList.length !== 0 ? (
          popularMoviesList.map((movie, index) => {
            return (
              <MovieCard
                name={movie.original_title}
                vote={movie.vote_average}
                date={movie.release_date}
                overview={movie.overview}
                imageURL={movie.poster_path}
                isListOpened={isListOpened}
                toggleIsOpened={toggleIsOpened}
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
  changeFetchingDataState: PropTypes.func.isRequired,
  sortedBy: PropTypes.string.isRequired,
  popularMoviesList: PropTypes.array.isRequired,
  popularMoviesPage: PropTypes.number.isRequired,
  updateMoviesList: PropTypes.func.isRequired,
  updateMoviesPage: PropTypes.func.isRequired,
};

export default PopularMovies;
