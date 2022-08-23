import styled from "styled-components";

export const StyledPaletteMainBox = styled.div`
  width: 100%;
  min-width: 100%;
  min-height: 52px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Source Sans Pro", Arial, sans-serif;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);

  @media (min-width: 1000px) {
    min-width: 260px;
    width: 260px;
  }
`;

export const StyledPaletteUpperBox = styled.div`
  padding: 14px 16px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media (min-width: 1000px) {
    min-width: 260px;
    width: 260px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const StyledHiddenBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
