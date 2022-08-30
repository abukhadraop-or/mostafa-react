import React, { useState, useRef } from "react";
import PaletteSlider from "components/paletteSlider";
import SortTabContents from "components/sortingTab";
import getData from "services/get-data";
import PropTypes from "prop-types";
import {
  StyledButton,
  StyledLeftPalette,
} from "components/leftPalette/left-palette.styles";

/**
 * A container that represents the left palette that has all tools (sort, filter, ...).
 *
 * @param {func} setIsFetchingData A function that change the state of fetching data when the (getData) function is being called.
 * @param {string} baseURL A string that represents the base segment of the main URL for the TMDB website.
 * @param {string} apiKey A string that has the API key from TMDB.
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * @param {func} setSortedBy A function that changes the state of the sorting technique of the movies.
 * @param {object} popularMoviesList An object that stores the list of movies and the current page from the API.
 * @param {func} setPopularMoviesList A function that changes the list of movies and the current page from the API.
 *
 * @return {Element} A styled component (section).
 */
function Palette({
  setIsFetchingData,
  baseURL,
  apiKey,
  sortedBy,
  setSortedBy,
  popularMoviesList,
  setPopularMoviesList,
}) {
  const sortBoxRef = useRef(null);
  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const [sortBoxSelection, setSortBoxSelection] = useState(
    "Popularity Descending"
  );

  const [sliderIsOpened, setSliderIsOpened] = useState({
    states: {
      Sort: true,
      Filters: false,
      WhereToWatch: false,
    },
  });

  const sliderClickHandler = (slider) => {
    if (slider === "Sort") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          Sort: !prevState.states.Sort,
        },
      }));
    } else if (slider === "Filters") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          Filters: !prevState.states.Filters,
        },
      }));
    } else if (slider === "Where To Watch") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          WhereToWatch: !prevState.states.WhereToWatch,
        },
      }));
    }
  };

  const changeSearchHandler = () => {
    setIsFetchingData(true);
    setPopularMoviesList((prev) => ({
      movieList: prev.movieList,
      moviesPage: 1,
    }));

    setTimeout(async () => {
      const data = await getData(
        baseURL,
        apiKey,
        sortedBy,
        popularMoviesList.moviesPage
      );

      setIsFetchingData(false);

      setPopularMoviesList((prev) => ({
        movieList: data,
        moviesPage: prev.moviesPage,
      }));
    }, 500);
  };

  return (
    <StyledLeftPalette>
      <PaletteSlider
        title="Sort"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.Sort}
      >
        <SortTabContents
          sortBoxSelection={sortBoxSelection}
          setSortBoxSelection={setSortBoxSelection}
          sortBoxRef={sortBoxRef}
          setSearchButtonActive={setSearchButtonActive}
          setSortedBy={setSortedBy}
        />
      </PaletteSlider>

      <PaletteSlider
        title="Filters"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.Filters}
      ></PaletteSlider>

      <PaletteSlider
        title="Where To Watch"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.WhereToWatch}
      ></PaletteSlider>

      <StyledButton
        searchButtonActive={searchButtonActive}
        onClick={changeSearchHandler}
      >
        Search
      </StyledButton>
    </StyledLeftPalette>
  );
}

Palette.defaultProps = {};

Palette.propTypes = {
  setIsFetchingData: PropTypes.func,
  baseURL: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
  sortedBy: PropTypes.string.isRequired,
  setSortedBy: PropTypes.func,
  popularMovies: PropTypes.object.isRequired,
  setPopularMovies: PropTypes.func.isRequired,
};

export default Palette;
