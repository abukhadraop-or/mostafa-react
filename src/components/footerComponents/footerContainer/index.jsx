import React from "react";
import PropTypes from "prop-types";
import {StyledUnorderedList} from "components/footerComponents/footer/footer.styles";

import {
  StyledContainer,
  StyledTitleContainer,
} from "components/footerComponents/footerContainer/footer-container.styles";

/**
 * A container to group the lists in the footer.
 * 
 * @param {string} title The title of each group.
 * 
 * @param {StyledUnorderedList} children A styled component (unordered list) that has the items of each group.
 *  
 * @return {Element} A styled component (section).
 */
function FooterContainer({ title, children }) {
  return (
    <StyledContainer>
      <StyledTitleContainer>{title}</StyledTitleContainer>
      {children}
    </StyledContainer>
  );
}

FooterContainer.defaultProps = {
  title: '',
};

FooterContainer.propTypes = {
  title: PropTypes.string,
  children: StyledUnorderedList,
}

export default FooterContainer;
