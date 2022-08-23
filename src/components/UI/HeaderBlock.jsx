import React from "react";
import { IconContext } from "react-icons";
import { StyledButton } from 'components/UI/HeaderBlockStyles'

function HeaderBlock(props) {
  return (
    <StyledButton
      href="127.0.0.1:3000"
      style={props.style}
      onMouseEnter={props.onMouseEnter || null}
      onMouseLeave={props.onMouseLeave || null}
    >
      {props.isIcon ? (
          <IconContext.Provider
            value={{ size: props.size, color: props.color }}
          >
            {props.children}
          </IconContext.Provider>
      ) : (
        props.children
      )}
    </StyledButton>
  );
}

export default HeaderBlock;
