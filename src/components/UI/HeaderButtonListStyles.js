import styled from "styled-components";

export const StyledListContainer = styled.div`
  margin: 0;
  width: 80px;
  height: fit-content;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  background: transparent;
`;

export const StyledItemsList = styled.ul`
  margin: 0;
  margin-top: 30px;
  width: 170px;
  max-height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px 0px 8px 0px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  background: #fff;
  color: black;
  list-style: none;
`;

export const StyledItem = styled.li`
  width: 100%;
  text-align: left;
  position: relative;
  font-size: 16px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-stretch: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 3px 0px 3px 1.5rem;
  cursor: pointer;

  &:hover {
    background: rgb(236, 236, 236);
  }
`;
