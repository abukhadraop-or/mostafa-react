import React, { useState, useEffect } from "react";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import DateFormater from "utils/date-formater";
import DrawArc from "utils/draw-arc";
import PropTypes from "prop-types";
import { FaList } from "react-icons/fa";
import { BsSuitHeartFill, BsBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  StyledRatingImg,
  StyledSuperscripted,
  StyledVoteBar,
  StyledArc,
  StyledArcPath,
  StyledNumericRatio,
  StyledCard,
  StyledPoster,
  StyledLowerSection,
  StyledName,
  StyledDate,
  StyledOverview,
  StyledCornerDots,
  StyledSubWindow,
  StyledSubWindowItem,
  StyledSubWindowTitle,
  StyledBlurred,
} from "components/movieCard/movie-card.styles";

/**
 * A component that creates the movie card.
 *
 * @param {string} name The name of the movie.
 * @param {number} vote The vote of the movie (out of 10).
 * @param {string} date The release date of the movie.
 * @param {string} overview An overview for the movie.
 * @param {string} imageURL The full name of the poster image stored in the TMDB server.
 * @param {string} movieKey A unique string to be added for each movie as a unique key value.
 * @param {bool} isListOpened boolean value indicates if one of the movies' list is opened.
 * @param {func} setIsListOpened A function that changes the state of (isListOpened).
 *
 * @return {Element} A styled component (div).
 */
function MovieCard({
  name,
  vote,
  date,
  overview,
  imageURL,
  movieKey,
  isListOpened,
  setIsListOpened,
}) {
  const releaseDate = DateFormater(date);
  const [imgURL, setImgURL] = useState(
    `https://www.themoviedb.org/t/p/w220_and_h330_face${imageURL}`
  );
  const [clicked, setIsClicked] = useState(false);

  const blankImage = "https://ytstorrenthd.net/img/default_thumbnail.svg";

  useEffect(() => {
    const movieRate = (vote * 10 * 360) / 100;
    var arc1 = DrawArc(19, 19, 17, 0, movieRate);
    var arc2 = DrawArc(19, 19, 15, 0, movieRate);

    document.getElementById(`${movieKey}1`).setAttribute("d", arc1);
    document.getElementById(`${movieKey}2`).setAttribute("d", arc2);
  });

  useEffect(() => {
    if (!isListOpened) {
      setIsClicked(false);
    }

    window.addEventListener('click', (e) => {
      console.log(e.clientX);
    })

  }, [isListOpened]);

  return (
    <StyledCard key={movieKey} >
      <StyledBlurred state={clicked && isListOpened} />

      <StyledCornerDots
        onClick={() => {
          setIsClicked((prev) => !prev);
          setIsListOpened((prev) => !prev);
        }}
      >
        <HiDotsCircleHorizontal size={30} />
      </StyledCornerDots>

      {clicked && isListOpened && (
        <StyledSubWindow>
          <StyledSubWindowItem>
            <FaList size={13} />
            <StyledSubWindowTitle>Add to list</StyledSubWindowTitle>
          </StyledSubWindowItem>
          <StyledSubWindowItem>
            <BsSuitHeartFill size={13} />
            <StyledSubWindowTitle>Favorite</StyledSubWindowTitle>
          </StyledSubWindowItem>
          <StyledSubWindowItem>
            <BsBookmarkFill size={13} />
            <StyledSubWindowTitle>Whatchlist</StyledSubWindowTitle>
          </StyledSubWindowItem>
          <StyledSubWindowItem>
            <AiFillStar size={13} />
            <StyledSubWindowTitle>Your rating</StyledSubWindowTitle>
          </StyledSubWindowItem>
        </StyledSubWindow>
      )}

      <StyledPoster
        onError={(e) => {
          setImgURL(blankImage);
        }}
        alt={name}
        src={imgURL}
      />

      <StyledLowerSection>
        <StyledRatingImg>
          <StyledNumericRatio>
            {Number(vote * 10)}
            <StyledSuperscripted>%</StyledSuperscripted>
          </StyledNumericRatio>

          <StyledVoteBar>
            <StyledArc>
              <StyledArcPath
                id={`${movieKey}1`}
                color={vote < 7 ? "goldenrod" : "chartreuse"}
              />
            </StyledArc>

            <StyledArc>
              <StyledArcPath id={`${movieKey}2`} color="black" />
            </StyledArc>
          </StyledVoteBar>
        </StyledRatingImg>

        <StyledName>{name}</StyledName>
        <StyledDate>{releaseDate}</StyledDate>
        <StyledOverview>{overview}</StyledOverview>
      </StyledLowerSection>
    </StyledCard>
  );
}

MovieCard.defaultProps = {
  name: "No name",
  vote: 0,
  overview: "No overview",
  imageURL: "https://ytstorrenthd.net/img/default_thumbnail.svg",
};

MovieCard.propTypes = {
  name: PropTypes.string,
  vote: PropTypes.number,
  date: PropTypes.string,
  overview: PropTypes.string,
  imageURL: PropTypes.string,
  movieKey: PropTypes.string.isRequired,
  isListOpened: PropTypes.bool,
  setIsListOpened: PropTypes.func,
};

export default MovieCard;
