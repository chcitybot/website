import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          }
        }
      },
      colors: {
        primary: colors.teal,
        backgroundMain:  colors.gray[800],
        bot_dark_blue: "#2447CC",
        bot_light_blue: "#9297FF",
        bot_light_grey: "#edf2f4",
        bot_salmon: "#FFC2AC",
        bot_pink: "#F9B666",
        bot_orange: "#F9B666",
        bot_red: "#FA634B",
        bot_red_salmon: "#F9806E"

      },
      fontFamily: {
        main: ['DM Sans', 'sans-serif'], 
      },
      backgroundImage: {
        'mobile-hero': "url('/public/img/mobile_hero.png')",
        'desktop-hero': "url('/public/img/home_hero_bw.png')",
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
