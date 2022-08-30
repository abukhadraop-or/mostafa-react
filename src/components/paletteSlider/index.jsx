import React from "react";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import PropTypes from "prop-types";

import {
  StyledPaletteMainBox,
  StyledPaletteUpperBox,
  StyledHiddenBox,
} from "components/paletteSlider/palette-slider.styles";

/**
 * A component that creates a slider box in the left palette that opens when it is being clicked.
 *
 * @param {string} title The title of the box.
 * @param {bool} isOpened A boolean that refers to the state of the current box (opened/closed).
 * @param {func} sliderClickHandler A function that opens the box and change its relevant sates.
 * @param {Element} children A custom component for each box.
 * 
 * @return {Element} A styled component (div).
 */
function PaletteSlider({ title, isOpened, sliderClickHandler, children }) {
  return (
    <StyledPaletteMainBox>
      <StyledPaletteUpperBox
        onClick={() => {
          sliderClickHandler(title);
        }}
      >
        <div>{title}</div>
        {isOpened ? (
          <RiArrowDownSLine size={24} />
        ) : (
          <RiArrowRightSLine size={24} />
        )}
      </StyledPaletteUpperBox>

      {isOpened ? <StyledHiddenBox>{children}</StyledHiddenBox> : null}
    </StyledPaletteMainBox>
  );
}

PaletteSlider.defaultProps = {
  title: "",
  isOpened: false,
};

PaletteSlider.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  sliderClickHandler: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default PaletteSlider;
