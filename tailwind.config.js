import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          }
        }
      },
      colors: {
        primary: colors.teal,
        backgroundMain: colors.gray[800],
        // Primary
        bot_dark_blue: "#4047D2",
        bot_red: "#FA634B",
        // Secondary
        bot_light_blue: "#9297FF",
        bot_pink: "#F9B666",
        bot_orange_red: "#FF8558",
        bot_dark_red: "#9A2C3B",
        bot_salmon: "#FFC2AC",
        bot_light_grey: "#edf2f4",
        bot_red_salmon: "#F9806E",
        // Secondary light
        bot_salmon_light: "#FCDBB3",
        bot_red_light: "#CD969D",
        // Purple range
        bot_purple: "#4D3B72",
        bot_purple_light: "#AF94D6",
        bot_blue_gray: "#95B2D2",
        // Teal/green range
        bot_teal: "#1C887A",
        bot_teal_light: "#ACD9E1",
        bot_green: "#80D094",
        // Background & Typography
        bot_bg: "#F4F6FC",
        bot_gray: "#8D8D8D",
      },
      fontFamily: {
        heading: ['Eczar', 'serif'],
        main: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        // Figma CI typography (+2px)
        'h1': ['36px', { lineHeight: '40px', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '30px', fontWeight: '500' }],
        'h3': ['24px', { lineHeight: '30px', fontWeight: '500' }],
        'paragraph': ['19px', { lineHeight: '25px', fontWeight: '400' }],
        'caption': ['19px', { lineHeight: '24px', fontWeight: '400' }],
        // Larger display sizes for hero/sections (+2px)
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
        'bounce-x-neg': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-4px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.8s ease-out 0.15s forwards',
        'fade-up-delay-2': 'fade-up 0.8s ease-out 0.3s forwards',
        'fade-up-delay-3': 'fade-up 0.8s ease-out 0.45s forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'bounce-x-right': 'bounce-x 1s ease-in-out infinite',
        'bounce-x-left': 'bounce-x-neg 1s ease-in-out infinite',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
