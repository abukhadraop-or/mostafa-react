import React from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";

import {
  StyledPaletteMainBox,
  StyledPaletteUpperBox,
  StyledHiddenBox,
} from "components/UI/PaletteSliderStyles";

function PaletteSlider(props) {
  return (
    <StyledPaletteMainBox>


      <StyledPaletteUpperBox
        onClick={() => {
          props.sliderClickHandler(props.title);
        }}
      >
        <div>{props.title}</div>
        {props.isOpened ? (
          <RiArrowDownSLine size={24} />
        ) : (
          <RiArrowRightSLine size={24} />
        )}
      </StyledPaletteUpperBox>



      {props.isOpened ? (
        <StyledHiddenBox>{props.children}</StyledHiddenBox>
      ) : null}

      
    </StyledPaletteMainBox>
  );
}

export default PaletteSlider;
