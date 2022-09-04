import PropTypes from "prop-types";

/**
 * A function that creates the shape of the rating bar for each movie.
 *
 * @param {number} x The x-offset of the arc.
 * @param {number} y The y-offset of the arc.
 * @param {number} radius The radius of the arc.
 * @param {number} startAngle The angle where the arc starts.
 * @param {number} endAngle The angle where the arc ends.
 *
 * @return {string} The formatted string to dray the required arc inside (path) tag in the (svg) element.
 */
function DrawArc(x, y, radius, startAngle, endAngle) {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
    "L",
    x,
    y,
    "L",
    start.x,
    start.y,
  ].join(" ");

  return d;
}

DrawArc.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
};

export default DrawArc;
