import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import { mobileActions, moviesActions } from "store/store";

import Header from "components/header/Header";
import UpperTitle from "components/palette/UpperTitle";
import Palette from "components/palette/Palette";
import PopularMovies from "components/popular-movies/PopularMovies";
import Footer from "components/footer/Footer";
import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledMiddleSpace = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledWorkspace = styled.div`
  width: 100%;
  max-width: 1312px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledFiller = styled.div`
  position: absolute;
  z-index: -2;
  background: rgba(3, 37, 65, 1);
  width: 100%;
  height: 64px;
`;

function App() {
  const apiKey = useSelector((state) => state.api.apiKey);
  const baseURL = useSelector((state) => state.api.baseURL);
  const sortedBy = useSelector((state) => state.api.sortedBy);

  const [isFetchingData, setIsFetchingData] = useState(false);

  const disptach = useDispatch();

  useLayoutEffect(() => {
    function updateSize() {
      disptach(mobileActions.setMobileState());
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  const getData = async (page) => {
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
      setIsFetchingData(false);

      return response.data.results;

    } catch (e) {
      console.log(e);
      return []
    }
  };

  return (
    <StyledMain>
      <StyledWorkspace>
        <Header />

        <UpperTitle />

        <StyledMiddleSpace>
          <Palette
            getData={getData}
            isFetchingData={isFetchingData}
            setIsFetchingData={setIsFetchingData}
          />
          <PopularMovies
            getData={getData}
            isFetchingData={isFetchingData}
            setIsFetchingData={setIsFetchingData}
          />
        </StyledMiddleSpace>
      </StyledWorkspace>

      <Footer />
    </StyledMain>
  );
}

export default App;
