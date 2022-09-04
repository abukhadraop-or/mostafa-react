import React from "react";
import constants from "utils/constants";
import {
  StyledFooter,
  StyledNav,
  StyledImg,
  StyledButton,
  StyledUnorderedList,
  StyledListItem,
  StyledFooterSection,
  StyledContainer,
  StyledTitleContainer,
} from "components/footer/footer.styles";

/**
 * The footer component that has several groups of links.
 *
 * @return {Element} A styled component (footer).
 */
function Footer() {
  return (
    <StyledFooter>
      <StyledNav>
        <StyledContainer>
          <StyledUnorderedList>
            <StyledListItem>
              <StyledImg src={constants.images.footerLogoImage} alt="TMDB" />
            </StyledListItem>
            <StyledListItem>
              <StyledButton>Hi User!</StyledButton>
            </StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>

        {constants.footerLists.map((list) => {
          return (
            <StyledContainer key={`container:${list.title}`}>
              <StyledTitleContainer key={`title:${list.title}`}>
                {list.title}
              </StyledTitleContainer>
              <StyledUnorderedList key={`list:${list.title}`}>
                {list.items.map((item) => {
                  return (
                    <StyledListItem key={`item:${item}`}>{item}</StyledListItem>
                  );
                })}
              </StyledUnorderedList>
            </StyledContainer>
          );
        })}
      </StyledNav>

      <StyledFooterSection>Build 13e0a72 (4183)</StyledFooterSection>
    </StyledFooter>
  );
}

export default Footer;
