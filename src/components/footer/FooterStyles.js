import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  color: #fff;
  font-family: "Source Sans Pro", Arial, sans-serif;
  background-image: radial-gradient(
    at 30% top,
    #031d33 0%,
    rgba(3, 37, 65, 1) 70%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 1000px) {
    align-items: flex-start;
    padding-left: 20px;
  }
`;

export const StyledNav = styled.nav`
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    padding-top: 80px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const StyledImg = styled.img`
  @media (min-width: 1000px) {
    display: flex;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StyledButton = styled.a`
  background-color: #fff;
  color: rgba(1, 180, 228, 1);
  font-size: 1.3em;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 8px 16px;
  transition: linear 0.1s;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: ${(props) => props.mobileBreakPoint}px) {
    margin-bottom: 20px;
  }
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  text-decoration: none;
  font-weight: normal;
  margin-bottom: 7px;
  max-width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.8;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  opacity: 0.1;
  font-size: 0.7rem;

  @media (min-width: 1000px) {
    margin-bottom: 5px;
  }

  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

