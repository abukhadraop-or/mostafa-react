import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  border: 1px solid e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  font-family: "Source Sans Pro", Arial, sans-serif;
  position: relative;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
    max-height: 141px;
  }

  @media (min-width: 1000px) {
    width: calc((100vw - 292px - 180px) / 3);
    height: calc(((100vw - 292px - 180px) / 3) * 2.3);

    max-width: 200px;
    max-height: 420px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
  }

  @media (min-width: 1040px) {
    width: calc((100vw - 292px - 180px) / 4);
    height: calc(((100vw - 292px - 180px) / 4) * 2.3);
  }

  @media (min-width: 1240px) {
    width: calc((100vw - 292px - 180px) / 5);
    height: calc(((100vw - 292px - 180px) / 5) * 2.1);
  }

  @media (min-width: 1330px) {
    max-width: 170px;
    max-height: 380px;
  }
`;

export const StyledRatingImg = styled.div`
  position: absolute;
  top: -19px;
  left: 10px;
  width: 38px;
  height: 38px;
  background: #000;
  border-radius: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 12px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StyledSuperscripted = styled.sup`
  height: 15px;
  font-weight: 700;
  font-size: 7px;
  opacity: 0.8;
`;

export const StyledVoteBar = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  background: transparent;
  border-radius: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPoster = styled.img`
  @media (min-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    max-width: 94px;
    max-height: 100%;
    margin-right: 10px;
  }
`;

export const StyledLowerSection = styled.div`
  position: relative;
  width: 100%;
  padding: 26px 10px 12px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.9rem;
`;

export const StyledName = styled.div`
  width: 100%;
  font-weight: 900;
  color: #000;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5px;
  overflow-wrap: break-word;
  -webkit-font-smoothing:   antialiased;
`;

export const StyledDate = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  padding: 0;
`;

export const StyledOverview = styled.div`
  width: 98%;
  height: 30px;
  margin-bottom: 15px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 20px;
  display: -webkit-box;
`;
