import React from "react";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { StyledWrapper } from "components/header/header.styles";
import {
  StyledHeaderButton,
  StyledIcon,
} from "components/headerBlock/header-block.styles";

/**
 * A wrapper button for each item in the header.
 *
 * @param {func} onMouseEnter A custom function to bind the action of hovering to the component.
 * @param {func} onMouseLeave A custom function to bind the action of moving the cursor away to the component.
 * @param {bool} desktop A boolean that controls showing/hiding the component in the desktop mode.
 * @param {bool} mobile A boolean that controls showing/hiding the component in the mobile mode.
 * @param {bool} responsiveMargin A boolean that controls adding mobile-responsive margins to selected components.
 * @param {bool} isIcon A boolean that controls adding a wrapper for (Icon) components.
 * @param {object} size A number that specifies the size of the icon, if (isIcon) was true.
 * @param {string} color A string that specifies the color of the icon, if (isIcon) was true.
 * @param {Element} children A styled component (unordered list) that has the contents of the block.
 *
 * @return {Element} A styled component (button).
 */
function HeaderBlock({
  onMouseEnter,
  onMouseLeave,
  desktop,
  mobile,
  responsiveMargin,
  isIcon,
  size,
  color,
  children,
}) {
  return (
    <StyledHeaderButton
      href="127.0.0.1:3000"
      onMouseEnter={onMouseEnter || null}
      onMouseLeave={onMouseLeave || null}
      desktop={desktop}
      mobile={mobile}
      responsiveMargin={responsiveMargin}
    >
      {isIcon ? (
        <StyledIcon size={size}>
          <IconContext.Provider value={{ size: "100%", color: color }}>
            {children}
          </IconContext.Provider>
        </StyledIcon>
      ) : (
        children
      )}
    </StyledHeaderButton>
  );
}

HeaderBlock.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  responsiveMargin: false,
  isIcon: false,
  size: { mobile: 15, desktop: 17 },
  color: "white",
};

HeaderBlock.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  desktop: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
  responsiveMargin: PropTypes.bool,
  isIcon: PropTypes.bool,
  size: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.element,
};

export default HeaderBlock;
