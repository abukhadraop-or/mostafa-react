import styled from "styled-components";

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
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1080p;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: 1000px) {
  }

  @media (min-width: 1330px) {
    max-width: 950px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  border-width: 0px;
  border-radius: 8px;
  background: rgba(1, 180, 228, 1);
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
  border-width: 0px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const StyledCircularProgress = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
