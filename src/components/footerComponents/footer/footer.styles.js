import styled from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";

export const StyledFooter = styled.footer`
  width: 100%;
  color: ${colors.white};
  font-family: "Source Sans Pro", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1.25rem;
  align-items: flex-start;
  padding-left: 1.25rem;
  background-image: radial-gradient(
    at 30% top,
    ${colors.darkBlue} 0%,
    ${colors.darkBlue} 70%
  );

  ${media.desktop`
    align-items: center;
    padding-left: 0rem;
  `}
`;

export const StyledNav = styled.nav`
  padding-bottom: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1.25rem;
  padding-top: 0rem;
  padding-bottom: 0rem;

  ${media.desktop`
  flex-direction: row;
    padding-top: 5rem;
  `}
`;

export const StyledImg = styled.img`
  width: 8.125rem;
  height: 5.875rem;

  ${media.desktop`
    display: flex;
  `}

  display: none;
`;

export const StyledButton = styled.a`
  background-color: ${colors.white};
  color: ${colors.skiBlue};
  font-size: 1.25rem;
  font-weight: bold;
  border: 0.125rem solid ${colors.white};
  border-radius: 0.3125rem;
  padding: 0.5rem 1rem;
  transition: linear 0.1s;
  display: flex;
  justify-content: center;
  margin-top: 3.125rem;
  margin-bottom: 1.25rem;

  ${media.desktop`
    margin-bottom: 3.125rem;
  `}
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0rem;
  padding: 0rem;
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
  font-weight: normal;
  margin-bottom: 0.4375rem;
  max-width: 16.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.8;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${colors.white};
  opacity: 0.1;
  font-size: 0.7rem;
  margin-bottom: 3.125rem;

  ${media.desktop`
    margin-bottom: 0.3125rem;
  `}
`;
