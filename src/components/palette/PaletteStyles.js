import styled from "styled-components";

export const StyledLeftPalette = styled.section`
  @media (min-width: 1000px) {
    width: 260px;
    min-width: 260px;
    margin-right: 2rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
    min-width: 100%;
    margin-right: 0rem;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;
// rgba(228, 228, 228, 0.7)
export const StyledButton = styled.button`
  background: ${(props) =>
    props.searchButtonActive
      ? "rgba(1, 180, 228, 1)"
      : "rgba(228, 228, 228, 0.7)"};
  cursor: ${(props) => (props.searchButtonActive ? "pointer" : "default")};

  color: ${(props) => (props.searchButtonActive ? "white" : "rgba(0, 0, 0, 0.5)")};
  width: 260px;
  height: 44px;
  font-size: 1.1rem;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 0px;
  backdrop-filter: blur(10px);

  @media (max-width: 1000px) {
    width: 100%;
  }

  &:hover {
    background: ${(props) =>
      props.searchButtonActive
        ? "rgba(3, 37, 65, 1)"
        : "rgba(228, 228, 228, 0.7)"};
  }
`;
