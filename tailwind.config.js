import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        backgroundMain:  colors.gray[800],
        bot_dark_blue: "#1f4372",
        bot_light_blue: "#527fd9",
        bot_light_grey: "#edf2f4",
        bot_salmon: "#f2b4b4",
        bot_pink: "#ea85a6"
      },
      fontFamily: {
        main: ['DM Sans', 'sans-serif'], 
      },
      backgroundImage: {
        'mobile-hero': "url('/public/img/mobile_hero.png')",
        'desktop-hero': "url('/public/img/home_hero_bw.png')",
      },
    }
  }
}
