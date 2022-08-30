import axios from "axios";
import PropTypes from "prop-types";

/**
 * A function that fetches the movies data from the API of TMDB.
 *
 * @param {string} baseURL A string that represents the base segment of the main URL for the TMDB website.
 *
 * @param {string} apiKey A string that has the API key from TMDB.
 *
 * @param {string} sortedBy A string that represents state of the sorting technique of the movies.
 * 
 * @param {number} page A number that represents the targeted page of the GeT request.
 * 
 * @return {Array} A list of movie objects.
 */
async function getData(baseURL, apiKey, sortedBy, page) {
  const mappedKeywords = {
    "Popularity Descending": "popularity.desc",
    "Popularity Ascending": "popularity.asc",
    "Rating Descending": "vote_average.desc",
    "Rating Ascending": "vote_average.asc",
    "Released Date Descending": "release_date.desc",
    "Released Date Ascending": "release_date.asc",
    "Title (A-Z)": "original_title.asc",
    "Title (Z-A)": "original_title.desc",
  };

  try {
    const url = `${baseURL}/3/discover/movie/?api_key=${apiKey}&sort_by=${mappedKeywords[sortedBy]}&page=${page}&include_adult=false&include_video=false`;
    const response = await axios.get(url);

    return response.data.results;
  } catch (e) {
    return [];
  }
}

getData.defaultProps = {
  baseURL: "https://api.themoviedb.org",
  apiKey: "0b7a45b84863262f053eb799d51f84fb",
  sortedBy: "Popularity Descending",
  page: 1,
};

getData.propTypes = {
  baseURL: PropTypes.string,
  apiKey: PropTypes.string,
  sortedBy: PropTypes.string,
  page: PropTypes.number,
};

export default getData
