import React, { useEffect, useState } from "react";
import { ImPlus } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import HeaderBlock from "components/headerComponents/headerBlock";
import HeaderButtonList from "components/headerComponents/headerButtonList";
import {
  StyledHeader,
  StyledLogoImg,
  StyledLogoMobileImg,
  StyledRightHeaderBox,
  StyledButtonsBox,
  StyledIconsBox,
  StyledENButton,
  StyledDrawer,
  StyledDrawerList,
  StyledDrawerTitle,
  StyledDrawerItem,
  StyledWrapper,
} from "components/headerComponents/header/header.styles";

/**
 * The Header component that has the main routes.
 *
 * @return {Element} A styled component (header).
 */
function Header() {
  const [headerTransform, setHeaderTransform] = useState("none");
  const [drawerTransform, setDrawerTransform] = useState("translateX(-100%)");
  const [buttonListIsHovered, setButtonListIsHovered] = useState({
    states: {
      Movies: false,
      TVShows: false,
      People: false,
      More: false,
    },
  });

  const desktopLogoImage =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
  const mobileLogoImage =
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

  const handleButtonHovered = (button, newState) => {
    if (button === "Movies") {
      setButtonListIsHovered((prevState) => ({
        states: {
          ...prevState.states,
          Movies: newState,
        },
      }));
    } else if (button === "TVShows") {
      setButtonListIsHovered((prevState) => ({
        states: {
          ...prevState.states,
          TVShows: newState,
        },
      }));
    } else if (button === "People") {
      setButtonListIsHovered((prevState) => ({
        states: {
          ...prevState.states,
          People: newState,
        },
      }));
    } else if (button === "More") {
      setButtonListIsHovered((prevState) => ({
        states: {
          ...prevState.states,
          More: newState,
        },
      }));
    }
  };

  useEffect(() => {
    var lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        setHeaderTransform("translate(0px, -100%)");
      } else if (currentScroll < lastScroll) {
        setHeaderTransform("none");
      }

      lastScroll = currentScroll;
    });
  }, []);

  return (
    <StyledHeader transform={headerTransform}>
      <HeaderBlock id="logo" mobile={false} desktop={true}>
        <StyledWrapper>
          <StyledLogoImg src={desktopLogoImage} alt="desktop logo" />
        </StyledWrapper>
      </HeaderBlock>

      <StyledDrawer transform={drawerTransform} mobile={true} desktop={false}>
        <StyledDrawerList>
          <StyledDrawerTitle>Movies</StyledDrawerTitle>
          <StyledDrawerTitle>TV Shows</StyledDrawerTitle>
          <StyledDrawerTitle>People</StyledDrawerTitle>
        </StyledDrawerList>

        <StyledDrawerList>
          <StyledDrawerItem>Contribution Bible</StyledDrawerItem>
          <StyledDrawerItem>Apps</StyledDrawerItem>
          <StyledDrawerItem>Discussions</StyledDrawerItem>
          <StyledDrawerItem>Leaderboard</StyledDrawerItem>
          <StyledDrawerItem>Contribute</StyledDrawerItem>
          <StyledDrawerItem>API</StyledDrawerItem>
          <StyledDrawerItem>Support</StyledDrawerItem>
          <StyledDrawerItem>About</StyledDrawerItem>
        </StyledDrawerList>

        <StyledDrawerList>
          <StyledDrawerItem>Logout</StyledDrawerItem>
        </StyledDrawerList>
      </StyledDrawer>

      <StyledRightHeaderBox>
        <StyledButtonsBox mobile={false} desktop={true}>
          <HeaderBlock
            onMouseEnter={() => {
              handleButtonHovered("Movies", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("Movies", false);
            }}
            mobile={false}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              Movies
              {buttonListIsHovered.states.Movies ? (
                <HeaderButtonList
                  handleButtonHovered={handleButtonHovered}
                  mainTitle="Movies"
                  items={[
                    { title: "Popular", onClick: () => {} },
                    { title: "New Playing", onClick: () => {} },
                    { title: "Upcoming", onClick: () => {} },
                    { title: "Top Rated", onClick: () => {} },
                  ]}
                />
              ) : null}
            </StyledWrapper>
          </HeaderBlock>

          <HeaderBlock
            onMouseEnter={() => {
              handleButtonHovered("TVShows", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("TVShows", false);
            }}
            mobile={false}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              TV Shows
              {buttonListIsHovered.states.TVShows ? (
                <HeaderButtonList
                  handleButtonHovered={handleButtonHovered}
                  mainTitle="TVShows"
                  items={[
                    { title: "Popular", onClick: () => {} },
                    { title: "Airing Today", onClick: () => {} },
                    { title: "On TV", onClick: () => {} },
                    { title: "Top Rated", onClick: () => {} },
                  ]}
                />
              ) : null}
            </StyledWrapper>
          </HeaderBlock>

          <HeaderBlock
            onMouseEnter={() => {
              handleButtonHovered("People", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("People", false);
            }}
            mobile={false}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              People
              {buttonListIsHovered.states.People ? (
                <HeaderButtonList
                  handleButtonHovered={handleButtonHovered}
                  mainTitle="People"
                  items={[{ title: "Popular People", onClick: () => {} }]}
                />
              ) : null}
            </StyledWrapper>
          </HeaderBlock>

          <HeaderBlock
            onMouseEnter={() => {
              handleButtonHovered("More", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("More", false);
            }}
            mobile={false}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              More
              {buttonListIsHovered.states.More ? (
                <HeaderButtonList
                  handleButtonHovered={handleButtonHovered}
                  mainTitle="More"
                  items={[
                    { title: "Discussion", onClick: () => {} },
                    { title: "Leaderboard", onClick: () => {} },
                    { title: "Support", onClick: () => {} },
                    { title: "API", onClick: () => {} },
                  ]}
                />
              ) : null}
            </StyledWrapper>
          </HeaderBlock>
        </StyledButtonsBox>

        <HeaderBlock
          isIcon={true}
          size={{ mobile: 25, desktop: 30 }}
          color="white"
          mobile={true}
          desktop={false}
          responsiveMargin={true}
        >
          <StyledWrapper>
            <GoThreeBars
              onClick={() => {
                setDrawerTransform((prev) =>
                  prev === "none" ? "translateX(-100%)" : "none"
                );
              }}
            />
          </StyledWrapper>
        </HeaderBlock>

        <HeaderBlock mobile={true} desktop={false}>
          <StyledWrapper>
            <StyledLogoMobileImg src={mobileLogoImage} alt="logo mobile" />
          </StyledWrapper>
        </HeaderBlock>

        <StyledIconsBox>
          <HeaderBlock
            isIcon={true}
            size={{ mobile: 16, desktop: 16 }}
            color="white"
            mobile={false}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              <ImPlus />
            </StyledWrapper>
          </HeaderBlock>

          <StyledENButton mobile={false} desktop={true}>
            EN
          </StyledENButton>

          <HeaderBlock
            isIcon={true}
            size={{ mobile: 15, desktop: 17 }}
            color={"white"}
            mobile={true}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              <FaBell />
            </StyledWrapper>
          </HeaderBlock>

          <HeaderBlock
            isIcon={true}
            size={{ mobile: 30, desktop: 35 }}
            color={"white"}
            mobile={true}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              <IoPersonCircle />
            </StyledWrapper>
          </HeaderBlock>

          <HeaderBlock
            isIcon={true}
            size={{ mobile: 20, desktop: 23 }}
            color={"cyan"}
            mobile={true}
            desktop={true}
            responsiveMargin={true}
          >
            <StyledWrapper>
              <TbSearch />
            </StyledWrapper>
          </HeaderBlock>
        </StyledIconsBox>
      </StyledRightHeaderBox>
    </StyledHeader>
  );
}

export default Header;
