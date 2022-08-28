import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiArrowDownSFill } from "react-icons/ri";
import {
  StyledTabContainer,
  StyledSection,
  StyledSubTitle,
  StyledSelectionButton,
  StyledSelections,
  StyledSelectionItem,
  StyledButtonText,
} from "components/leftPaletteComponents/sortingTab/sorting-tab.styles";

/**
 * A container that represents the sorting box in the left palette.
 *
 * @param {React.MutableRefObject} sortBoxRef A reference object to reach and control the box with the sorting technique selection.
 *
 * @param {string} sortBoxSelection A string that represents the current selection of the sorting technique.
 *
 * @param {func} setSortBoxSelection A function that changes the current sorting technique selection from the box.
 *
 * @param {func} setSortedBy A function that changes global sorting technique state.
 *
 * @param {func} setSearchButtonActive A function that changes the state of the search button (enabled/disabled).
 *
 * @return {Element} A styled component (div).
 */
function SortTabContents({
  sortBoxRef,
  sortBoxSelection,
  setSortBoxSelection,
  setSortedBy,
  setSearchButtonActive,
}) {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  return (
    <StyledTabContainer>
      <StyledSection>
        <StyledSubTitle>Sort Results By</StyledSubTitle>

        <StyledSelectionButton
          IsOpened={isOptionsOpened}
          onClick={() => setIsOptionsOpened(!isOptionsOpened)}
        >
          <StyledButtonText ref={sortBoxRef}>
            {sortBoxSelection}
          </StyledButtonText>
          <RiArrowDownSFill size={20} />
        </StyledSelectionButton>

        {isOptionsOpened ? (
          <StyledSelections>
            {[
              "Popularity Descending",
              "Popularity Ascending",
              "Rating Descending",
              "Rating Ascending",
              "Released Date Descending",
              "Released Date Ascending",
              "Title (A-Z)",
              "Title (Z-A)",
            ].map((selection, index) => {
              return (
                <StyledSelectionItem
                  selected={sortBoxSelection}
                  current={selection}
                  key={`${index}${selection}`}
                  onClick={() => {
                    setSortBoxSelection(selection);
                    setSortedBy(selection);
                    setSearchButtonActive(true);
                    setIsOptionsOpened(false);
                  }}
                >
                  {selection}
                </StyledSelectionItem>
              );
            })}
          </StyledSelections>
        ) : null}
      </StyledSection>
    </StyledTabContainer>
  );
}

SortTabContents.defaultProps = {};

SortTabContents.propTypes = {
  sortBoxRef: React.MutableRefObject,
  sortBoxSelection: PropTypes.string,
  setSortBoxSelection: React.Dispatch < React.SetStateAction,
  setSortedBy: React.Dispatch < React.SetStateAction,
  setSearchButtonActive: React.Dispatch < React.SetStateAction,
};

export default SortTabContents;
