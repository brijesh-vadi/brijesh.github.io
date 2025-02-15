// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Brijesh",
  imageBackground: true,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  // weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
  // weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  // weatherUnit: 'C', // 'F', 'C'
  // language: 'en', // More languages in https://openweathermap.org/current#multi

  //   trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  //   defaultLatitude: "37.775",
  //   defaultLongitude: "-122.419",

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Admin",
      icon: "user-cog",
      link: "https://admin.thepatidars.org/",
    },
    {
      id: "2",
      name: "Reviewer",
      icon: "users",
      link: "https://reviewer.thepatidars.org/",
    },
    {
      id: "3",
      name: "Github",
      icon: "github",
      link: "https://github.com",
    },
    {
      id: "4",
      name: "Input Tools",
      icon: "italic",
      link: "https://www.google.com/inputtools/try/",
    },
    {
      id: "5",
      name: "Temp Mail",
      icon: "mail-x",
      link: "https://temp-mail.org/en/",
    },
    {
      id: "6",
      name: "Hacksnation",
      icon: "rocket",
      link: "https://hacksnation.com/",
    },
    {
      id: "7",
      name: "Twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "8",
      name: "YouTube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  //   firstlistsContainer: [
  //     {
  //       icon: "music",
  //       id: "1",
  //       links: [
  //         {
  //           name: "Inspirational",
  //           link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //         },
  //         {
  //           name: "Classic",
  //           link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //         },
  //         {
  //           name: "Oldies",
  //           link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //         },
  //         {
  //           name: "Rock",
  //           link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "coffee",
  //       id: "2",
  //       links: [
  //         {
  //           name: "Linkedin",
  //           link: "https://www.linkedin.com",
  //         },
  //         {
  //           name: "Dribbble",
  //           link: "https://www.dribbble.com",
  //         },
  //         {
  //           name: "Trello",
  //           link: "https://www.trello.com",
  //         },
  //         {
  //           name: "Slack",
  //           link: "https://www.slack.com",
  //         },
  //       ],
  //     },
  //   ],

  // Second Links Container
  //   secondListsContainer: [
  //     {
  //       icon: "binary",
  //       id: "1",
  //       links: [
  //         {
  //           name: "Spotify",
  //           link: "https://www.spotify.com",
  //         },
  //         {
  //           name: "Reddit",
  //           link: "https://www.reddit.com",
  //         },
  //         {
  //           name: "Hashnode",
  //           link: "https://www.hashnode.com",
  //         },
  //         {
  //           name: "Pocket",
  //           link: "https://www.pocket.com",
  //         },
  //       ],
  //     },
  //     {
  //       icon: "github",
  //       id: "2",
  //       links: [
  //         {
  //           name: "Front",
  //           link: "https://www.reddit.com/r/Frontend/",
  //         },
  //         {
  //           name: "Rust",
  //           link: "https://www.reddit.com/r/rust/",
  //         },
  //         {
  //           name: "Go",
  //           link: "https://www.reddit.com/r/golang/",
  //         },
  //         {
  //           name: "Repos",
  //           link: "https://github.com/migueravila",
  //         },
  //       ],
  //     },
  //   ],
};
