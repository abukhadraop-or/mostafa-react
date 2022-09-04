import styled from "styled-components";
import { mq } from "styles/media-query";
import colors from "styles/colors";

export const StyledLeftPalette = styled.section`
  width: 100%;
  min-width: 100%;
  margin-right: 0rem;
  padding-left: 0rem;
  padding-right: 0rem;

  ${mq.desktop`
    width: 16.25rem;
    min-width: 16.25rem;
    margin-right: 2rem;
  `}
`;

export const StyledButton = styled.button`
  width: 100%;
  background: ${(props) =>
    props.searchButtonActive ? colors.skiBlue : colors.lightGray2};
  cursor: ${(props) => (props.searchButtonActive ? "pointer" : "default")};

  color: ${(props) => (props.searchButtonActive ? colors.white : colors.lightBlack)};
  height: 2.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 1.25rem;
  border-radius: 1.25rem;
  border: 0rem;
  backdrop-filter: blur(0.625rem);

  ${mq.desktop`
    width: 16.25rem;
  `}

  &:hover {
    background: ${(props) =>
      props.searchButtonActive ? colors.darkBlue : colors.lightGray2};
  }
`;

export const StyledPaletteMainBox = styled.div`
  width: 100%;
  min-width: 100%;
  min-height: 3.25rem;
  border: 0.0625rem solid ${colors.darkWhite};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Source Sans Pro", Arial, sans-serif;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);

  ${mq.desktop`
    min-width: 16.25rem;
    width: 16.25rem;
  `}
`;

export const StyledPaletteUpperBox = styled.div`
  width: 100%;
  min-width: 100%;
  padding: 0.875rem 1rem;
  height: 3.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${mq.desktop`
    min-width: 16.25rem;
    width: 16.25rem;
  `}
`;

export const StyledHiddenBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;