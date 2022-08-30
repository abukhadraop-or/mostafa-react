import styled from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";

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
  
  ${media.desktop`
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
  
  ${media.desktop`
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
