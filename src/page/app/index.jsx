import React, { useState, useRef } from "react";
import Header from "components/header";
import LeftPalette from "components/leftPalette";
import PopularMovies from "components/popularMovies";
import Footer from "components/footer";
import SearchContainer from "components/searchContainer";
import {
  StyledMain,
  StyledMiddleSpace,
  StyledWorkspace,
  StyledUpperTitle,
} from "page/app/app.styled";

/**
 * The main app component that has all the sections.
 *
 * @return {Element} A styled component (main).
 */
function App() {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [sortedBy, setSortedBy] = useState("Popularity Descending");
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const [popularMoviesPage, setPopularMoviesPage] = useState(0);

  const searchFieldRef = useRef(null);
  const [searchIsFilled, setSearchIsFilled] = useState(false);
  const [searchIsOpened, setSearchIsOpened] = useState(false);

  /**
   * A function that changes the sorting technique.
   *
   * @param {string} newTechnique The new sorting technique.
   */
  const changeSortingTechnique = (newTechnique) => {
    setSortedBy(newTechnique);
  };

  /**
   * A function that changes the state that indicates if there are data being fetching currently.
   *
   * @param {bool} newState The new sorting technique.
   */
  const changeFetchingDataState = (newState) => {
    setIsFetchingData(newState);
  };

  /**
   * A function that updates the list of movies.
   *
   * @param {Array} newData The new list of movies.
   */
  const updateMoviesList = (newData) => {
    setPopularMoviesList(newData);
  };

  /**
   * A function that changes the number of page for fetching movies from the API.
   *
   * @param {number} newPage The new page number.
   */
  const updateMoviesPage = (newPage) => {
    setPopularMoviesPage(newPage);
  };

  /**
   * A function that updates the state (searchIsFilled) according to the search field's content.
   */
  const checkInput = () => {
    searchFieldRef.current.value !== ""
      ? setSearchIsFilled(true)
      : setSearchIsFilled(false);
  };

  /**
   * A function that changes the state of the X icon of the search.
   *
   * @param {bool} newState The new state.
   */
  const changeSearchIconState = (newState) => {
    setSearchIsOpened(newState);
  };

  return (
    <StyledMain>
      <StyledWorkspace>
        <Header
          searchIsOpened={searchIsOpened}
          changeSearchIconState={changeSearchIconState}
          searchFieldRef={searchFieldRef}
        />

        <StyledUpperTitle>Popular Movies</StyledUpperTitle>

        {searchIsOpened && (
          <SearchContainer
            searchFieldRef={searchFieldRef}
            searchIsFilled={searchIsFilled}
            checkInput={checkInput}
            popularMoviesList={popularMoviesList}
          />
        )}

        <StyledMiddleSpace>
          <LeftPalette
            sortedBy={sortedBy}
            changeFetchingDataState={changeFetchingDataState}
            changeSortingTechnique={changeSortingTechnique}
            updateMoviesList={updateMoviesList}
            updateMoviesPage={updateMoviesPage}
          />
          <PopularMovies
            sortedBy={sortedBy}
            popularMoviesList={popularMoviesList}
            popularMoviesPage={popularMoviesPage}
            isFetchingData={isFetchingData}
            changeFetchingDataState={changeFetchingDataState}
            updateMoviesList={updateMoviesList}
            updateMoviesPage={updateMoviesPage}
          />
        </StyledMiddleSpace>
      </StyledWorkspace>

      <Footer />
    </StyledMain>
  );
}

export default App;
