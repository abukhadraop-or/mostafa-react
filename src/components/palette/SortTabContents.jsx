import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "store/store";

import {
  StyledTabContainer,
  StyledSection,
  StyledSubTitle,
  StyledSelectionButton,
  StyledSelections,
  StyledSelectionItem,
  StyledButtonText,
} from "components/palette/SortTabContentsStyles";

import { RiArrowDownSFill } from "react-icons/ri";

function SortTabContents(props) {
  const disptach = useDispatch();
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  return (
    <StyledTabContainer>
      <StyledSection>
        <StyledSubTitle>Sort Results By</StyledSubTitle>

        <StyledSelectionButton
          IsOpened={isOptionsOpened}
          onClick={() => setIsOptionsOpened(!isOptionsOpened)}
        >
          <StyledButtonText ref={props.sortBoxRef}>
            {props.sortBoxSelection}
          </StyledButtonText>
          <RiArrowDownSFill size={20} />
        </StyledSelectionButton>

        {isOptionsOpened ? (
          <StyledSelections>
            {[
              { method: "Popularity Descending" },
              { method: "Popularity Ascending" },
              { method: "Rating Descending" },
              { method: "Rating Ascending" },
              { method: "Released Date Descending" },
              { method: "Released Date Ascending" },
              { method: "Title (A-Z)" },
              { method: "Title (Z-A)" },
            ].map((selection, index) => {
              return (
                <StyledSelectionItem
                  selected={props.sortBoxSelection}
                  current={selection.method}
                  key={`${index}${selection.method}`}
                  onClick={() => {
                    props.setSortBoxSelection(selection.method);
                    disptach(apiActions.setSortedBy(selection.method));
                    props.setSearchButtonActive(true);
                    setIsOptionsOpened(false);
                  }}
                >
                  {selection.method}
                </StyledSelectionItem>
              );
            })}
          </StyledSelections>
        ) : null}
      </StyledSection>
    </StyledTabContainer>
  );
}

export default SortTabContents;
