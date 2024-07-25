import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        backgroundMain:  colors.gray[800]
      },
      fontFamily: {
        main: ['Oxanium', 'sans-serif'], 
      },
      backgroundImage: {
        'mobile-hero': "url('/public/img/mobile_hero.png')",
        'desktop-hero': "url('/public/img/home_hero_bw.png')",
      },
    }
  }
}
