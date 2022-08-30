import styled from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  max-width: 82rem;
  background: ${colors.darkBlue};
  height: 4rem;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &::before {
    content: "";
    background: ${colors.darkBlue};
    position: fixed;
    z-index: -5;
    width: 100vw;
    height: 4rem;
  }

  transition: 0.2s ease-in;
  transform: ${(props) => props.transform};

  ${media.desktop`
    padding-right: 1.25rem;
    padding-left: 1.5625rem;
  `}
`;

export const StyledLogoImg = styled.img`
  width: 9.625rem;
  height: 1.25rem;
`;

export const StyledLogoMobileImg = styled.img`
  width: 3.4375rem;
  height: 2.5rem;
  position: fixed;
  left: calc((100% - 3.4375rem) / 2);
`;

export const StyledRightHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${media.desktop`
    width: calc(100% - 9.625rem);
  `}
`;

export const StyledButtonsBox = styled.section`
  justify-content: center;
  align-items: center;
  align-content: center;
  display: ${(props) => (props.mobile ? "flex" : "none")};

  ${media.desktop`
    display: ${(props) => (props.desktop ? "flex" : "none")};
  `}
`;

export const StyledIconsBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StyledENButton = styled.button`
  width: 1.75rem;
  height: 1.625rem;
  background: transparent;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0.0625rem solid ${colors.white};
  border-radius: 0.1875rem;
  padding: 0.3125rem 0.3125rem;
  color: ${colors.white};
  font-weight: 600;
  transition: linear 0.1s;
  cursor: pointer;
  font-size: 0.75rem;
  margin-left: 1.5625rem;

  &:hover {
    background: ${colors.white};
    color: ${colors.darkBlue};
  }

  display: ${(props) => (props.mobile ? "flex" : "none")};

  ${media.desktop`
    display: ${(props) => (props.desktop ? "flex" : "none")};
  `}
`;

export const StyledDrawer = styled.div`
  width: 90%;
  height: 100vh;
  position: fixed;
  top: 4rem;
  left: 0rem;
  background: ${colors.darkBlue};
  z-index: 40;
  transition: ease 0.3s;
  padding: 1.25rem;
  transform: ${(props) => props.transform};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  display: ${(props) => (props.mobile ? "flex" : "none")};

  ${media.desktop`
    display: ${(props) => (props.desktop ? "flex" : "none")};
  `}
`;

export const StyledDrawerList = styled.ul`
  width: 100%;
  padding: 0rem;
  margin: 0rem;
  margin-bottom: 0.625rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledDrawerTitle = styled.ul`
  width: 100%;
  padding: 0rem;
  margin-bottom: 0.9375rem;
  list-style: none;
  text-align: left;
  color: ${colors.white};
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.9;
`;

export const StyledDrawerItem = styled.ul`
  width: 100%;
  padding: 0rem;
  margin-bottom: 0.9375rem;
  list-style: none;
  text-align: left;
  color: ${colors.white};
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 0.9rem;
  opacity: 0.7;
`;

export const StyledWrapper = styled.ul`
  width: 100%;
  padding: 0rem;
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
