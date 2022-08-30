import React from "react";
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
  const logoImage =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

  return (
    <StyledFooter>
      <StyledNav>
        <StyledContainer>
          <StyledUnorderedList>
            <StyledListItem>
              <StyledImg src={logoImage} alt="The Movie Database (TMDB)" />
            </StyledListItem>
            <StyledListItem>
              <StyledButton>Hi User!</StyledButton>
            </StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>

        <StyledContainer>
          <StyledTitleContainer>The Basics</StyledTitleContainer>
          <StyledUnorderedList>
            <StyledListItem>About TMDB</StyledListItem>
            <StyledListItem>Contact Us</StyledListItem>
            <StyledListItem>Support Forums</StyledListItem>
            <StyledListItem>API</StyledListItem>
            <StyledListItem>System Status</StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>

        <StyledContainer>
          <StyledTitleContainer>Get Involved</StyledTitleContainer>
          <StyledUnorderedList>
            <StyledListItem>Contribution Bible</StyledListItem>
            <StyledListItem>Add New Movie</StyledListItem>
            <StyledListItem>Add New TV Show</StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>

        <StyledContainer>
        <StyledTitleContainer>Community</StyledTitleContainer>
          <StyledUnorderedList>
            <StyledListItem>Guidelines</StyledListItem>
            <StyledListItem>Discussions</StyledListItem>
            <StyledListItem>Leaderboard</StyledListItem>
            <StyledListItem>Twitter</StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>

        <StyledContainer>
        <StyledTitleContainer>Community</StyledTitleContainer>
          <StyledUnorderedList>
            <StyledListItem>Terms of Use</StyledListItem>
            <StyledListItem>API Terms of Use</StyledListItem>
            <StyledListItem>Privacy Policy</StyledListItem>
          </StyledUnorderedList>
        </StyledContainer>
      </StyledNav>

      <StyledFooterSection>Build 13e0a72 (4183)</StyledFooterSection>
    </StyledFooter>
  );
}

export default Footer;
