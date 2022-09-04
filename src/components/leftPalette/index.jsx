import React, { useState, useRef } from "react";
import SortTabContents from "components/sortingTab";
import getData from "services/get-data";
import PropTypes from "prop-types";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import {
  StyledButton,
  StyledLeftPalette,
  StyledPaletteMainBox,
  StyledPaletteUpperBox,
  StyledHiddenBox,
} from "components/leftPalette/left-palette.styles";

/**
 * A container that represents the left palette that has all tools (sort, filter, ...).
 *
 * @param {func} changeFetchingDataState A function that change the state of fetching data when the (getData) function is being called.
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * @param {func} changeSortingTechnique A function that changes the state of the sorting technique of the movies.
 * @param {func} updateMoviesList A function that changes the list of movies from the API.
 * @param {func} updateMoviesPage A function that changes the the current page from the API.
 *
 * @return {Element} A styled component (section).
 */
function LeftPalette({
  changeFetchingDataState,
  sortedBy,
  changeSortingTechnique,
  updateMoviesList,
  updateMoviesPage,
}) {
  const sortBoxRef = useRef(null);
  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const [sortBoxSelection, setSortBoxSelection] = useState(
    "Popularity Descending"
  );

  const [sortIsOpened, setSortIsOpened] = useState(true);
  const [filtersIsOpened, setFiltersIsOpened] = useState(false);
  const [whereToWatchIsOpened, setWhereToWatchIsOpened] = useState(false);

  /**
   * A function that changes the sorting technique and the list of the movies accordingly.
   */
  const changeSearchHandler = async () => {
    changeFetchingDataState(true);
    const data = await getData(sortedBy, 1);
    updateMoviesPage(1);
    updateMoviesList(data);
    changeFetchingDataState(false);
  };

  /**
   * A function that changes the selected sorting technique from the box.
   *
   * @param {string} newSelection The new sorting technique.
   */
  const changeBoxSelection = (newSelection) => {
    setSortBoxSelection(newSelection);
  };

  /**
   * A function that changes the state of the search button (active/inactive).
   *
   * @param {bool} newState The new state.
   */
  const changeSearchBtnState = (newState) => {
    setSearchButtonActive(newState);
  };

  return (
    <StyledLeftPalette>
      {[
        {
          title: "Sort",
          tab: (
            <SortTabContents
              sortBoxSelection={sortBoxSelection}
              changeBoxSelection={changeBoxSelection}
              sortBoxRef={sortBoxRef}
              changeSearchBtnState={changeSearchBtnState}
              changeSortingTechnique={changeSortingTechnique}
            />
          ),
          isOpened: sortIsOpened,
          setIsOpened: setSortIsOpened,
        },
        {
          title: "Filters",
          tab: null,
          isOpened: filtersIsOpened,
          setIsOpened: setFiltersIsOpened,
        },
        {
          title: "Where To Watch",
          tab: null,
          isOpened: whereToWatchIsOpened,
          setIsOpened: setWhereToWatchIsOpened,
        },
      ].map((slider, index) => {
        return (
          <StyledPaletteMainBox key={`main box number: ${index}`}>
            <StyledPaletteUpperBox
              key={`upper box number: ${index}`}
              onClick={() => {
                slider.setIsOpened((prev) => !prev);
              }}
            >
              <div>{slider.title}</div>
              {slider.isOpened ? (
                <RiArrowDownSLine size={24} />
              ) : (
                <RiArrowRightSLine size={24} />
              )}
            </StyledPaletteUpperBox>

            {slider.isOpened && (
              <StyledHiddenBox key={`hidden box number: ${index}`}>
                {slider.tab}
              </StyledHiddenBox>
            )}
          </StyledPaletteMainBox>
        );
      })}

      <StyledButton
        searchButtonActive={searchButtonActive}
        onClick={changeSearchHandler}
        disabled={!searchButtonActive}
      >
        Search
      </StyledButton>
    </StyledLeftPalette>
  );
}

LeftPalette.propTypes = {
  changeFetchingDataState: PropTypes.func.isRequired,
  sortedBy: PropTypes.string.isRequired,
  changeSortingTechnique: PropTypes.func.isRequired,
  updateMoviesList: PropTypes.func.isRequired,
  updateMoviesPage: PropTypes.func.isRequired,
};

export default LeftPalette;
