/**
 * A function that reformats the date from (DD/MM/YYYY) to (DD/month/YYYY).
 *
 * @param {Date} date A string that represents the base segment of the main URL for the TMDB website.
 * 
 * @return {string} The new formatted date.
 */
function DateFormater(date) {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  const releaseDate = `${day} ${month} ${year}`;

  return releaseDate;
}

DateFormater.defaultProps = {};

DateFormater.propTypes = {
  date: Date,
};

export default DateFormater;
