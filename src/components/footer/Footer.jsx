import React from "react";
import { useSelector } from "react-redux";
import FooterContainer from "components/UI/FooterContainer";
import {
  StyledFooter,
  StyledNav,
  StyledImg,
  StyledButton,
  StyledUnorderedList,
  StyledListItem,
  StyledFooterSection,
} from "components/footer/FooterStyles";

function Footer(props) {
  const mobileBreakPoint = useSelector(
    (state) => state.mobile.mobileBreakPoint
  );

  return (
    <StyledFooter>
      <StyledNav>
        <FooterContainer>
          <StyledImg
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width="130"
            height="94"
          />
          <StyledButton mobileBreakPoint={mobileBreakPoint}>
            Hi User!
          </StyledButton>
        </FooterContainer>

        <FooterContainer title="The Basics">
          <StyledUnorderedList>
            <StyledListItem>About TMDB</StyledListItem>
            <StyledListItem>Contact Us</StyledListItem>
            <StyledListItem>Support Forums</StyledListItem>
            <StyledListItem>API"</StyledListItem>
            <StyledListItem>System Status</StyledListItem>
          </StyledUnorderedList>
        </FooterContainer>

        <FooterContainer title="Get Involved">
          <StyledUnorderedList>
            <StyledListItem>Contribution Bible</StyledListItem>
            <StyledListItem>Add New Movie</StyledListItem>
            <StyledListItem>Add New TV Show</StyledListItem>
          </StyledUnorderedList>
        </FooterContainer>

        <FooterContainer title="Community">
          <StyledUnorderedList>
            <StyledListItem>Guidelines</StyledListItem>
            <StyledListItem>Discussions</StyledListItem>
            <StyledListItem>Leaderboard</StyledListItem>
            <StyledListItem>Twitter</StyledListItem>
          </StyledUnorderedList>
        </FooterContainer>

        <FooterContainer title="Community">
          <StyledUnorderedList>
            <StyledListItem>Terms of Use</StyledListItem>
            <StyledListItem>API Terms of Use</StyledListItem>
            <StyledListItem>Privacy Policy</StyledListItem>
          </StyledUnorderedList>
        </FooterContainer>
      </StyledNav>

      <StyledFooterSection>Build 13e0a72 (4183)</StyledFooterSection>
    </StyledFooter>
  );
}

export default Footer;
