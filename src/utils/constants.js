const tmdb = {
  apiKey: "0b7a45b84863262f053eb799d51f84fb",
  baseURL: "https://api.themoviedb.org",
  baseImageURL: "https://www.themoviedb.org/t/p/w220_and_h330_face",
};

const images = {
  footerLogoImage:
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
  desktopLogoImage:
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",
  mobileLogoImage:
    "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
  blankImage: "https://ytstorrenthd.net/img/default_thumbnail.svg",
};

const drawerLists = [
  ["Movies", "TV Shows", "People"],
  [
    "Contribution Bible",
    "Apps",
    "Discussions",
    "Leaderboard",
    "Contribute",
    "API",
    "Support",
    "About",
  ],
];

const headerLists = [
  {
    title: "Movies",
    items: ["Popular", "New Playing", "Upcoming", "Top Rated"],
  },
  {
    title: "TV Shows",
    items: ["Popular", "Airing Today", "On TV", "Top Rated"],
  },
  {
    title: "People",
    items: ["Popular People"],
  },
  {
    title: "More",
    items: ["Discussion", "Leaderboard", "Support", "API"],
  },
];

const footerLists = [
  {
    title: "The Basics",
    items: [
      "About TMDB",
      "Contact Us",
      "Support Forums",
      "API",
      "System Status",
    ],
  },
  {
    title: "Get Involved",
    items: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
  },
  {
    title: "Community",
    items: ["Guidelines", "Discussions", "Leaderboard", "Twitter"],
  },
  {
    title: "Legal",
    items: ["Terms of Use", "API Terms of Use", "Privacy Policy"],
  },
];

const sortingTechniques = {
  "Popularity Descending": "popularity.desc",
  "Popularity Ascending": "popularity.asc",
  "Rating Descending": "vote_average.desc",
  "Rating Ascending": "vote_average.asc",
  "Released Date Descending": "release_date.desc",
  "Released Date Ascending": "release_date.asc",
  "Title (A-Z)": "original_title.asc",
  "Title (Z-A)": "original_title.desc",
};

export default {
  tmdb,
  images,
  drawerLists,
  headerLists,
  footerLists,
  sortingTechniques,
};
