import React from "react";
import PropTypes from "prop-types";
import {
  StyledItemsList,
  StyledItem,
  StyledListContainer,
} from "components/headerComponents/headerButtonList/header.button.list.styles";

/**
 * A container to represent the hidden list that will be visible when hovering over the header main routes.
 * 
 * @param {string} mainTitle The title of the targeted list.
 * 
 * @param {object} items An array of objects where each one has the item title and its (onClick) function.
 * 
 * @param {func} handleButtonHovered A function to show/hide the whole list when the main title is hovered.
 * 
 * @return {Element} A styled component (div).
 */
function HeaderButtonList({ mainTitle, items, handleButtonHovered }) {
  return (
    <StyledListContainer>
      <StyledItemsList
        onMouseEnter={() => {
          handleButtonHovered(mainTitle, true);
        }}
        onMouseLeave={() => {
          handleButtonHovered(mainTitle, false);
        }}
      >
        {items.map((item) => {
          return (
            <StyledItem
              key={`${mainTitle}${item.title}`}
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

HeaderButtonList.defaultProps = {
  mainTitle: '',
  items: [],
  handleButtonHovered: () => {},
};

HeaderButtonList.propTypes = {
  mainTitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  handleButtonHovered: PropTypes.func,
}

export default HeaderButtonList;
