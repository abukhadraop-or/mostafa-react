import styled from "styled-components";
import colors from "styles/colors";

export const StyledTabContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border-top: 0.0625rem solid ${colors.darkWhite};
  font-family: "Source Sans Pro", Arial, sans-serif;
`;
export const StyledSection = styled.section`
  width: 100%;
  padding-top: 1rem;
`;

export const StyledSubTitle = styled.div`
  width: 100%;
  font-weight: normal;
  opacity: 0.5;
`;

export const StyledSelectionButton = styled.button`
  width: 100%;
  font-weight: normal;
  margin-top: 0.625rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 0.0625rem ${colors.darkWhite};
  color: ${colors.darkGray};
  background-color: ${(props) => (props.IsOpened ? colors.lightGray : "#e4e7eb")};
  border-radius: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background: ${colors.lightGray};
  }

  transition: background-color 0.2s ease-in-out;
`;

export const StyledSelections = styled.ul`
  margin: 0;
  width: 14.125rem;
  height: 13.75rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  background-color: ${colors.white};
  border: 0.0625rem solid ${colors.lightGray};
  border-radius: 0.625rem;
  padding-left: 0rem;
  padding-bottom: 0.625rem;
  z-index: 3;
  overflow: scroll;
  overflow-x: hidden;
`;

export const StyledSelectionItem = styled.li`
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 0 0 0 0.1875rem rgb(255 255 255 / 15%);
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  padding-left: 1.5625rem;
  min-height: 1.875rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${(props) =>
    props.current === props.selected ? "bold" : "normal"};
  background: ${(props) =>
    props.current === props.selected ? "#f2f2f2" : "white"};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.current === props.selected ? colors.skiBlue : "white"};
    color: ${(props) => (props.current === props.selected ? "white" : "black")};
  }

  transition: 0.2s ease;
`;

export const StyledButtonText = styled.p`
  margin: 0;
  padding: 0;
`;
