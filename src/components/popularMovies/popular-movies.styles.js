import styled, { keyframes } from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const swift = keyframes`
  0% {
    transform: translateX(80%);
  }
  50% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(80%);
  }
`;

export const StyledLinearProgress = styled.div`
  width: 100vw;
  height: 0.375rem;
  position: fixed;
  background: ${colors.skiBlue};
  top: 0rem;
  left: 0rem;
  z-index: 22;

  animation: ${swift} 1.5s linear infinite;
`;

export const StyledMoviesContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledMovieCards = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 1080p;

  flex-direction: column;
  justify-content: flex-start;

  ${media.desktop`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  `}

  @media (min-width: 83.125rem) {
    max-width: 59.375rem;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  padding: 0;
  border-width: 0rem;
  border-radius: 0.5rem;
  background: ${colors.skiBlue};
`;

export const StyledButtonTitle = styled.p`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  border-width: 0rem;
  color: ${colors.white};
  cursor: pointer;

  &:hover {
    color: ${colors.black};
  }
`;

export const StyledCircularProgress = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCircle = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0.375rem;
  border-color: ${colors.skiBlue};
  border-right-color: transparent;
  border-style: solid;
  border-radius: 100%;

  animation: ${rotate} 0.8s linear infinite;
`;
