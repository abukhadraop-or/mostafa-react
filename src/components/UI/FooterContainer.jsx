import React from "react";
import  { StyledContainer, StyledTitleContainer } from 'components/UI/FooterContainerStyles'
 

function FooterContainer(props) {
  return (
    <StyledContainer>
      <StyledTitleContainer>{props.title}</StyledTitleContainer>
      {props.children}
    </StyledContainer>
  );
}

export default FooterContainer;
