import styled from "styled-components";

export const StyledTabContainer = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #eee;
  font-family: "Source Sans Pro", Arial, sans-serif;
`;
export const StyledSection = styled.section`
  width: 100%;
  padding-top: 16px;
`;

export const StyledSubTitle = styled.div`
  width: 100%;
  font-weight: normal;
  opacity: 0.5;
`;

export const StyledSelectionButton = styled.button`
  width: 100%;
  font-weight: normal;
  margin-top: 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #e4e7eb;
  color: #212529;
  background-color: ${(props) => (props.IsOpened ? "#ced3db" : "#e4e7eb")};
  border-radius: 0.5rem;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    background: #ced3db;
  }

  transition: background-color 0.2s ease-in-out;
`;

export const StyledSelections = styled.ul`
  margin: 0;
  width: 226px;
  height: 220px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding-left: 0px;
  padding-bottom: 10px;
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
  box-shadow: inset 0 0 0 3px rgb(255 255 255 / 15%);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 25px;
  min-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${props => props.current === props.selected ? "bold" : "normal"};
  background: ${props => props.current === props.selected ? "#f2f2f2" : "white"};
  cursor: pointer;

  &:hover {
      background: ${props => props.current === props.selected ? "rgba(1, 180, 228, 1)" : "white"};
      color: ${props => props.current === props.selected ? "white" : "black"};
  }

  transition: 0.2s ease; 
`;

export const StyledButtonText = styled.p`
  margin: 0;
  padding: 0;
`;