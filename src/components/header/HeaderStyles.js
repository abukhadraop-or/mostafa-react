import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  max-width: 1312px;
  background: rgba(3, 37, 65, 1);
  height: 64px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &::before {
    content: "";
    background: rgba(3, 37, 65, 1);
    position: fixed;
    z-index: -5;
    width: 100vw;
    height: 64px;
  }

  transition: 0.2s ease-in;
  transform: ${(props) => props.transform};
`;

export const StyledLogoImg = styled.img`
  width: 154px;
  height: 20px;
`;

export const StyledLogoMobileImg = styled.img`
  width: 55px;
  height: 40px;
  position: fixed;
  left: calc((100% - 55px) / 2);
`;

export const StyledRightHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1000px) {
    width: calc(100% - 154px);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyledButtonsBox = styled.section`
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (min-width: 1000px) {
    display: flex;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StyledIconsBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StyledENButton = styled.button`
  width: 28px;
  height: 26px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 5px 5px;
  color: #fff;
  font-weight: 600;
  transition: linear 0.1s;
  cursor: pointer;
  font-size: 12px;
  margin-left: 25px;

  &:hover {
    background: #fff;
    color: rgba(3, 37, 65, 1);
  }
`;

export const StyledDrawer = styled.div`
  width: 90%;
  height: 100vh;
  position: fixed;
  top: 64px;
  left: 0px;
  background: rgba(3, 37, 65, 0.95);
  z-index: 40;
  transition: ease 0.3s;
  padding: 20px;
  transform: ${(props) => props.transform};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledDrawerList = styled.ul`
  width: 100%;
  padding: 0px;
  margin: 0px;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledDrawerItem = styled.ul`
  width: 100%;
  padding: 0px;
  margin-bottom: 15px;
  list-style: none;
  text-align: left;
  color: white;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  opacity: ${(props) => props.opacity};
`;
