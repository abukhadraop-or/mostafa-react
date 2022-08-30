import styled from "styled-components";
import colors from "styles/colors";

export const StyledListContainer = styled.div`
  margin: 0;
  width: 5rem;
  height: fit-content;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0rem;
  background: transparent;
`;

export const StyledItemsList = styled.ul`
  margin: 0;
  margin-top: 1.875rem;
  width: 10.625rem;
  max-height: 37.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem 0rem 0.5rem 0rem;
  border: 0.0625rem solid ${colors.lightGray};
  border-radius: 0.3125rem;
  background: ${colors.white};
  color: ${colors.black};
  list-style: none;
`;

export const StyledItem = styled.li`
  width: 100%;
  text-align: left;
  position: relative;
  font-size: 1rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.1875rem 0rem 0.1875rem 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${colors.lightGray};
  }
`;
