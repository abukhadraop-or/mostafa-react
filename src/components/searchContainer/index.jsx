import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { BsXLg } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import colors from "styles/colors";
import PropTypes from "prop-types";
import {
  StyledSearchContainer,
  StyledSearchField,
  StyledSearchBox,
  StyledSearchWrapper,
  StyledTrendingTitle,
  StyledTrendingOuterBox,
  StyledSearchItem,
  StyledSearchItemText,
} from "components/searchContainer/search-container.styles";

/**
 * A container that that has the search box that appears upon clicking the search icon in the header.
 *
 * @param {Array} popularMoviesList The array of all movies.
 * @param {bool} searchIsFilled A boolean indicates if the search field is filled with text or not.
 * @param {object} searchFieldRef A ref object for the search field.
 * @param {func} checkInput A function that updates the state (searchIsFilled) according to the search field's content.
 */
function SearchContainer({
  popularMoviesList,
  searchIsFilled,
  searchFieldRef,
  checkInput,
}) {
  const [searchResults, setSearchResults] = useState([]);

  /**
   * A function that filters the movies list and updates the (searchResults) accordingly.
   */
  const filterMoviesSearch = () => {
    const keyWord = searchFieldRef.current.value.toLowerCase();

    const results = popularMoviesList.filter((movie) => {
      if (movie.original_title.toLowerCase().includes(keyWord)) {
        return movie;
      }
    });

    setSearchResults(results);
  };

  return (
    <StyledSearchContainer>
      <StyledSearchWrapper noHover={true}>
        <StyledSearchBox>
          <TbSearch size={18} />
          <StyledSearchField
            ref={searchFieldRef}
            type="text"
            placeholder="search for a movie, tv show, person,..."
            onChange={() => {
              checkInput();
              filterMoviesSearch();
            }}
          />
          <BsXLg
            size={18}
            opacity={0.5}
            style={{ cursor: "pointer" }}
            onClick={() => {
              searchFieldRef.current.value = "";
              checkInput();
            }}
          />
        </StyledSearchBox>
      </StyledSearchWrapper>

      {!searchIsFilled && (
        <StyledSearchWrapper bg={colors.gray} noHover={true}>
          <StyledTrendingOuterBox>
            <FiTrendingUp size={20} />
            <StyledTrendingTitle>Trending</StyledTrendingTitle>
          </StyledTrendingOuterBox>
        </StyledSearchWrapper>
      )}

      {!searchIsFilled &&
        popularMoviesList.slice(0, 10).map((movie, index) => {
          return (
            <StyledSearchWrapper
              isItem={true}
              key={`search wrapper number: ${index}`}
            >
              <StyledSearchItem key={`search item number: ${index}`}>
                <TbSearch size={12} key={`search icon number: ${index}`} />
                <StyledSearchItemText key={`search text number: ${index}`}>
                  {movie.original_title}
                </StyledSearchItemText>
              </StyledSearchItem>
            </StyledSearchWrapper>
          );
        })}

      {searchIsFilled &&
        searchResults.map((movie, index) => {
          return (
            <StyledSearchWrapper
              isItem={true}
              key={`search results wrapper number: ${index}`}
            >
              <StyledSearchItem key={`search item number: ${index}`}>
                <TbSearch size={12} key={`search icon number: ${index}`} />
                <StyledSearchItemText key={`search text number: ${index}`}>
                  {movie.original_title}
                </StyledSearchItemText>
              </StyledSearchItem>
            </StyledSearchWrapper>
          );
        })}
    </StyledSearchContainer>
  );
}

SearchContainer.propTypes = {
  popularMoviesList: PropTypes.array.isRequired,
  searchIsFilled: PropTypes.bool.isRequired,
  searchFieldRef: PropTypes.object.isRequired,
  checkInput: PropTypes.func.isRequired,
};

export default SearchContainer;
