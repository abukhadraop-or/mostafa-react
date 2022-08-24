import React from "react";
import {
  StyledItemsList,
  StyledItem,
  StyledListContainer,
} from "components/UI/HeaderButtonListStyles";

function HeaderButtonList(props) {
  return (
    <StyledListContainer>
      <StyledItemsList
        onMouseEnter={() => {
          props.handleButtonHovered(props.mainTitle, true);
        }}
        onMouseLeave={() => {
          props.handleButtonHovered(props.mainTitle, false);
        }}
      >
        {props.items.map((item) => {
          return (
            <StyledItem
              key={`${props.mainTitle}${item.title}`}
              onClick={item.onClick}
            >
              {item.title}
            </StyledItem>
          );
        })}
      </StyledItemsList>
    </StyledListContainer>
  );
}

export default HeaderButtonList;
