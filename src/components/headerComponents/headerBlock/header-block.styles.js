import styled from "styled-components";
import { media } from "styles/media-query";
import colors from "styles/colors";

export const StyledHeaderButton = styled.button`
  color: ${colors.white};
  cursor: pointer;
  background: transparent;
  border: 0rem;
  font-weight: 600;
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  position: relative;
  display: ${(props) => (props.mobile ? "flex" : "none")};
  margin-left: ${(props) => (props.responsiveMargin ? "5px" : "0px")};

  ${media.desktop`
    display: ${(props) => (props.desktop ? "flex" : "none")};
    margin-left: ${(props) => (props.responsiveMargin ? "25px" : "0px")};
  `}
`;

export const StyledIcon = styled.div`
  width: ${(props) => props.size.mobile}px;
  height: ${(props) => props.size.mobile}px;

  ${media.desktop`
    width: ${(props) => props.size.desktop}px;
    height: ${(props) => props.size.desktop}px;
  `}
`;
