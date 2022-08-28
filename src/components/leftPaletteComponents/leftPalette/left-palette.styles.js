import styled from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";


export const StyledLeftPalette = styled.section`
  width: 100%;
  min-width: 100%;
  margin-right: 0rem;
  padding-left: 0rem;
  padding-right: 0rem;

  ${media.desktop`
    width: 16.25rem;
    min-width: 16.25rem;
    margin-right: 2rem;
  `}
`;

export const StyledButton = styled.button`
  width: 100%;
  background: ${(props) =>
    props.searchButtonActive
      ? colors.skiBlue
      : "#e4e4e4b2"};
  cursor: ${(props) => (props.searchButtonActive ? "pointer" : "default")};

  color: ${(props) =>
    props.searchButtonActive ? "white" : "#0000007f"};
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

  ${media.desktop`
    width: 16.25rem;
  `}

  &:hover {
    background: ${(props) =>
      props.searchButtonActive
        ? "#032541ff"
        : "#e4e4e4b2"};
  }
`;
