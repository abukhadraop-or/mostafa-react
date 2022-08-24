import React, { useEffect, useState } from "react";
import { ImPlus } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";

import { useSelector } from "react-redux";
import HeaderBlock from "components/UI/HeaderBlock";
import HeaderButtonList from "components/UI/HeaderButtonList";

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
  StyledDrawerItem,
} from "components/header/HeaderStyles";

function Header(props) {
  const isMobile = useSelector((state) => state.mobile.isMobile);
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

  const responsiveMarginStyle = {
    marginLeft: isMobile ? "5px" : "25px",
  };

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

      // down
      if (currentScroll > lastScroll) {
        setHeaderTransform("translate(0px, -100%)");
        // up
      } else if (currentScroll < lastScroll) {
        setHeaderTransform("none");
      }

      lastScroll = currentScroll;
    });
  }, []);

  return (
    <StyledHeader transform={headerTransform}>
      {isMobile ? null : (
        <HeaderBlock
          id="logo"
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25px",
          }}
        >
          <StyledLogoImg
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </HeaderBlock>
      )}

      {isMobile ? (
        <StyledDrawer transform={drawerTransform}>
          <StyledDrawerList>
            <StyledDrawerItem size="1.2rem" weight="bold" opacity="0.9">
              Movies
            </StyledDrawerItem>
            <StyledDrawerItem size="1.2rem" weight="bold" opacity="0.9">
              TV Shows
            </StyledDrawerItem>
            <StyledDrawerItem size="1.2rem" weight="bold" opacity="0.9">
              People
            </StyledDrawerItem>
          </StyledDrawerList>

          <StyledDrawerList>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Contribution Bible
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Apps
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Discussions
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Leaderboard
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Contribute
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              API
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Support
            </StyledDrawerItem>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              About
            </StyledDrawerItem>
          </StyledDrawerList>

          <StyledDrawerList>
            <StyledDrawerItem size="0.9rem" opacity="0.7">
              Logout
            </StyledDrawerItem>
          </StyledDrawerList>
        </StyledDrawer>
      ) : null}

      <StyledRightHeaderBox>
        <StyledButtonsBox>
          <HeaderBlock
            style={responsiveMarginStyle}
            onMouseEnter={() => {
              handleButtonHovered("Movies", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("Movies", false);
            }}
          >
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
          </HeaderBlock>

          <HeaderBlock
            style={responsiveMarginStyle}
            onMouseEnter={() => {
              handleButtonHovered("TVShows", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("TVShows", false);
            }}
          >
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
          </HeaderBlock>

          <HeaderBlock
            style={responsiveMarginStyle}
            onMouseEnter={() => {
              handleButtonHovered("People", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("People", false);
            }}
          >
            People
            {buttonListIsHovered.states.People ? (
              <HeaderButtonList
                handleButtonHovered={handleButtonHovered}
                mainTitle="People"
                items={[{ title: "Popular People", onClick: () => {} }]}
              />
            ) : null}
          </HeaderBlock>

          <HeaderBlock
            style={responsiveMarginStyle}
            onMouseEnter={() => {
              handleButtonHovered("More", true);
            }}
            onMouseLeave={() => {
              handleButtonHovered("More", false);
            }}
          >
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
          </HeaderBlock>
        </StyledButtonsBox>

        {isMobile ? (
          <HeaderBlock
            style={responsiveMarginStyle}
            isIcon={true}
            size={isMobile ? 25 : 30}
            color="white"
          >
            <GoThreeBars
              onClick={() => {
                console.log(drawerTransform);
                setDrawerTransform((prev) =>
                  prev === "none" ? "translateX(-100%)" : "none"
                );
              }}
            />
          </HeaderBlock>
        ) : null}

        {isMobile ? (
          <HeaderBlock>
            <StyledLogoMobileImg
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="logo mobile"
            />
          </HeaderBlock>
        ) : null}

        <StyledIconsBox>
          {isMobile ? null : (
            <HeaderBlock
              style={responsiveMarginStyle}
              isIcon={true}
              size={16}
              color="white"
            >
              <ImPlus />
            </HeaderBlock>
          )}

          {isMobile ? null : <StyledENButton>EN</StyledENButton>}

          <HeaderBlock
            style={responsiveMarginStyle}
            isIcon={true}
            size={isMobile ? 15 : 17}
            color={"white"}
          >
            <FaBell />
          </HeaderBlock>

          <HeaderBlock
            style={responsiveMarginStyle}
            isIcon={true}
            size={isMobile ? 30 : 35}
            color={"white"}
          >
            <IoPersonCircle />
          </HeaderBlock>

          <HeaderBlock
            style={{ ...responsiveMarginStyle, marginRight: "20px" }}
            isIcon={true}
            size={isMobile ? 20 : 23}
            color={"cyan"}
          >
            <TbSearch />
          </HeaderBlock>
        </StyledIconsBox>
      </StyledRightHeaderBox>
    </StyledHeader>
  );
}

export default Header;
