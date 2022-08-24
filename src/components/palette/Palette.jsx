import React, { useState, useRef } from "react";
import PaletteSlider from "components/UI/PaletteSlider";
import SortTabContents from "components/palette/SortTabContents";
import { useSelector, useDispatch } from "react-redux";
import { moviesActions } from "store/store";

import {
  StyledButton,
  StyledLeftPalette,
} from "components/palette/PaletteStyles";

function Palette(props) {
  const disptach = useDispatch();

  const [sortBoxSelection, setSortBoxSelection] = useState(
    "Popularity Descending"
  );

  const [searchButtonActive, setSearchButtonActive] = useState(false);
  const moviesPage = useSelector((state) => state.movies.moviesPage);

  const sortBoxRef = useRef(null);

  const [sliderIsOpened, setSliderIsOpened] = useState({
    states: {
      Sort: false,
      Filters: false,
      WhereToWatch: false,
    },
  });

  const sliderClickHandler = (slider) => {
    if (slider === "Sort") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          Sort: !prevState.states.Sort,
        },
      }));
    } else if (slider === "Filters") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          Filters: !prevState.states.Filters,
        },
      }));
    } else if (slider === "Where To Watch") {
      setSliderIsOpened((prevState) => ({
        states: {
          ...prevState.states,
          WhereToWatch: !prevState.states.WhereToWatch,
        },
      }));
    }
  };

  const changeSearchHandler = () => {
    props.setIsFetchingData(true);
    disptach(moviesActions.resetMoviesPage());

    setTimeout(async () => {
      const data = await props.getData(moviesPage);
      disptach(moviesActions.setMovieList(data));
    }, 500);
  };

  return (
    <StyledLeftPalette>
      <PaletteSlider
        title="Sort"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.Sort}
      >
        <SortTabContents
          sortBoxSelection={sortBoxSelection}
          setSortBoxSelection={setSortBoxSelection}
          sortBoxRef={sortBoxRef}
          setSearchButtonActive={setSearchButtonActive}
        />
      </PaletteSlider>

      <PaletteSlider
        title="Filters"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.Filters}
      ></PaletteSlider>

      <PaletteSlider
        title="Where To Watch"
        sliderClickHandler={sliderClickHandler}
        isOpened={sliderIsOpened.states.WhereToWatch}
      ></PaletteSlider>

      <StyledButton
        searchButtonActive={searchButtonActive}
        onClick={changeSearchHandler}
      >
        Search
      </StyledButton>
    </StyledLeftPalette>
  );
}

export default Palette;
