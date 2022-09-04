import PropTypes from "prop-types";
import constants from "utils/constants";
import CRUD from "utils/crud";

/**
 * A function that fetches the movies data from the API of TMDB.
 *
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * @param {number} page A number that represents the targeted page of the GeT request.
 *
 * @return {Array} A list of movie objects.
 */
async function getData(sortedBy, page) {
  const sortingTechnique = constants.sortingTechniques[sortedBy];
  const baseURL = constants.tmdb.baseURL;
  const apiKey = constants.tmdb.apiKey;

  const url = `${baseURL}/3/discover/movie/?api_key=${apiKey}&sort_by=${sortingTechnique}&page=${page}&include_adult=false&include_video=false`;

  return CRUD.fetchData(url);
}

getData.propTypes = {
  sortedBy: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default getData;
