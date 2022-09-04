import styled from "styled-components";
import { mq } from "styles/media-query";
import colors from "styles/colors";

export const StyledSearchContainer = styled.section`
  background: ${colors.white};
  position: absolute;
  top: 4rem;
  left: 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 25;
`;
export const StyledSearchBox = styled.div`
  max-width: 82rem;
  width: 100%;
  height: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 25;
`;

export const StyledSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.0625rem solid ${colors.lightGray};
  background: ${(props) => props.bg};

  &:hover {
    cursor: ${(props) => (props.noHover ? null : "pointer")};
    background: ${(props) => (props.noHover ? null : colors.gray)};
  }
`;

export const StyledSearchField = styled.input`
  width: 94%;
  height: 80%;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  font-size: 1.0625rem;
  font-style: italic;
  opacity: 0.6;
  border: none;

  &:focus {
    outline-width: 0;
  }
`;

export const StyledTrendingOuterBox = styled.div`
  width: 100%;
  max-width: 82rem;
  height: 2.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.9375rem;
`;

export const StyledTrendingTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.4375rem;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-stretch: 100%;
`;

export const StyledSearchItem = styled.div`
  max-width: 82rem;
  height: 1.875rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
  padding-left: 1.25rem;
`;

export const StyledSearchItemText = styled.p`
  width: 100%;
  font-size: 0.9375rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  padding-left: 0.4375rem;
`;
