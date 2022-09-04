import PropTypes from 'prop-types';

/**
 * A function that reformats the date from (DD/MM/YYYY) to (DD/month/YYYY).
 *
 * @param {string} date A string representing the date.
 * 
 * @return {string} The new formatted date.
 */
function DateFormater(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  
  return `${day} ${month} ${year}`;
}

DateFormater.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateFormater;
