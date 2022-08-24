import React, { useState } from "react";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Stage, Layer, Arc } from "react-konva";

import {
  StyledRatingImg,
  StyledSuperscripted,
  StyledVoteBar,
  StyledCard,
  StyledPoster,
  StyledLowerSection,
  StyledName,
  StyledDate,
  StyledOverview,
} from "components/UI/MovieCardStyles";

function MovieCard(props) {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [imageURL, setImageURL] = useState(
    `https://www.themoviedb.org/t/p/w220_and_h330_face${props.imageURL}`
  )
  const isMobile = useSelector((state) => state.mobile.isMobile);

  const dateObj = new Date(props.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();
  const releaseDate = `${day} ${month} ${year}`;

  const dotsStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: "5",
    cursor: "pointer",
    opacity: "0.7",
    color: isIconHovered ? "rgb(1,180,228)" : "rgb(227,227,227)",
  };

  return (
    <StyledCard key={props.movieKey}>
      {isMobile ? null : (
        <HiDotsCircleHorizontal
          onMouseEnter={() => setIsIconHovered(true)}
          onMouseLeave={() => setIsIconHovered(false)}
          style={dotsStyle}
          size={30}
        />
      )}

      <StyledPoster
        onError={(e) => {
          setImageURL("https://ytstorrenthd.net/img/default_thumbnail.svg");
          console.log(e);
        }}
        alt={props.name}
        src={imageURL}
      />

      <StyledLowerSection>
        <StyledRatingImg>
          {Number(props.vote * 10)}
          <StyledSuperscripted>%</StyledSuperscripted>

          <StyledVoteBar>
            <Stage width={38} height={38}>
              <Layer>
                <Arc
                  innerRadius={15}
                  outerRadius={15}
                  stroke={props.vote < 7 ? "goldenrod" : "chartreuse"}
                  strokeWidth={2}
                  angle={(props.vote * 10 * 360) / 100}
                  rotation={-90}
                  x={19}
                  y={19}
                />
              </Layer>
            </Stage>
          </StyledVoteBar>
        </StyledRatingImg>

        <StyledName>{props.name}</StyledName>
        <StyledDate>{releaseDate}</StyledDate>
        {isMobile ? <StyledOverview>{props.overview}</StyledOverview> : null}
      </StyledLowerSection>
    </StyledCard>
  );
}

export default MovieCard;
