import React, { useState } from "react";
import Header from "components/headerComponents/header";
import Palette from "components/leftPaletteComponents/leftPalette";
import PopularMovies from "components/moviesContainer/popularMovies";
import Footer from "components/footerComponents/footer";

import {
  StyledMain,
  StyledMiddleSpace,
  StyledWorkspace,
  StyledUpperTitle,
} from "page/app/app.styled";

/**
 * The main app component that has all the sections.
 * 
 * @return {Element} A styled component (main).
 */
function App() {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [sortedBy, setSortedBy] = useState("Popularity Descending");

  const apiKey = "0b7a45b84863262f053eb799d51f84fb"
  const baseURL = "https://api.themoviedb.org"

  return (
    <StyledMain>
      <StyledWorkspace>
        <Header />

        <StyledUpperTitle />

        <StyledMiddleSpace>
          <Palette
            setIsFetchingData={setIsFetchingData}
            apiKey={apiKey}
            baseURL={baseURL}
            sortedBy={sortedBy}
            setSortedBy={setSortedBy}
          />
          <PopularMovies
            isFetchingData={isFetchingData}
            setIsFetchingData={setIsFetchingData}
            apiKey={apiKey}
            baseURL={baseURL}
            sortedBy={sortedBy}
          />
        </StyledMiddleSpace>
      </StyledWorkspace>

      <Footer />
    </StyledMain>
  );
}

export default App;
