const colors = require('tailwindcss/colors')

const ALLEY = 320; // px
const GUT = 16; // px

function scale(n) {
  return Math.round(Math.pow(1.25, n) * 1000) / 1000;
}

function alley(n) {
  return ALLEY * n + 'px';
}

function gut(n) {
  return GUT * n + 'px';
}

const spacing = {
  guts: (function makeGutters() {
    const guts = {
      'gut/2': gut(0.5),
      gut: gut(1),
    };
    const max = 1280 / GUT;
    for (let i = 2; i < max; i += 1) guts[i + 'gut'] = gut(i);
    return guts;
  })(),
  px: {
    '0': '0',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px',
    '10': '10px',
    '12': '12px',
  },
  pc: {
    '1/6': '16.665%',
    '1/5': '20%',
    '1/4': '25%',
    '1/3': '33.333%',
    '2/5': '40%',
    '1/2': '50%',
    '3/5': '60%',
    '2/3': '66.667%',
    '3/4': '75%',
    '4/5': '80%',
    full: '100%',
  },
};

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: alley(2), //  640
      md: alley(3), //  960
      lg: alley(4), // 1280
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      // gray: {
      //   100: '#f2f2f2', // These were generated from here https://maketintsandshades.com/#4b4f4f
      //   200: '#d9d9d9',
      //   300: '#bfc0c0',
      //   400: '#999999',
      //   500: '#7f8080',
      //   600: '#2e2e2e',
      //   700: '#2a2b2b',
      //   800: '#222222',
      //   900: '#191a1a',
      //   1000: '#111111',
      //   1100: '#080909',
      //   light: '#e1eded',
      //   DEFAULT: '#6C6C6C',
      //   med: '#6a6b6b',
      //   dark: '#2A2B2B',
      //   xdark: '#212121'
      // },
      red: {
        DEFAULT: '#ba494f',
        100: '#f1dbdc', // These were generated from here https://maketintsandshades.com/#ba494f
        200: '#e3b6b9',
        300: '#d69295',
        400: '#c86d72',
        500: '#ba494f',
        600: '#953a3f',
        700: '#702c2f',
        800: '#4a1d20',
        900: '#250f10',
      },
      blue: {
        DEFAULT: '#2180ce',
        100: '#d3e6f5', // These were generated from here https://maketintsandshades.com/#2180ce
        200: '#a6cceb',
        300: '#7ab3e2',
        400: '#4d99d8',
        500: '#2180ce',
        600: '#1a66a5',
        700: '#144d7c',
        800: '#0d3352',
        900: '#071a29',
      },
      gray: colors.warmGray,
      green: colors.green,
      yellow: colors.amber,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      purple: colors.purple
    },
    opacity: {
      '0': '0',
      '33': '0.333',
      '25': '0.25',
      '50': '0.5',
      '66': '0.667',
      '75': '0.75',
      '100': '1',
    },
    margin: (_theme, { negative }) => ({
      auto: 'auto',
      ...spacing.guts,
      ...spacing.px,
      ...negative(spacing.guts),
      ...negative(spacing.px),
    }),
    padding: {
      ...spacing.guts,
      ...spacing.px
    },
    height: {
      auto: 'auto',
      '0': '0',
      full: '100%',
      screen: '100vh',
      ...spacing.guts,
      ...spacing.pc,
    },
    maxHeight: {
      none: 'none',
      full: '100%',
      screen: '100vh',
      ...spacing.guts,
    },
    maxWidth: {
      none: 'none',
      full: '100%',
      screen: '100vw',
      ...spacing.guts,
      ...spacing.pc,
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
      ...spacing.guts,
    },
    minWidth: {
      '0': '0',
      ...spacing.guts,
      ...spacing.pc,
    },
    width: {
      '0': '0',
      auto: 'auto',
      full: '100%',
      screen: '100vw',
      ...spacing.guts,
      ...spacing.pc,
    },
    // placeholderColor: theme => ({ gray: theme('colors.gray') }),
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: 'currentColor',
    }),
    borderWidth: {
      '0': '0',
      '1': '1px',
      DEFAULT: '2px',
      '4': '4px',
      '8': '8px',
    },
    fontFamily: {
      sans: [
        'Plain',
        'Helvetica Neue',
        'Helvetica',
        'Franklin Gothic Medium',
        'Franklin Gothic',
        'ITC Franklin Gothic',
        'sans-serif',
      ],
    },
    fontSize: {
      //   rem | px
      '2xs': scale(-2) + 'rem', 
      xs: scale(-1) + 'rem', // 0.64  | 10.24
      sm: scale(0) + 'rem', // 1   | 16
      base: scale(0.5) + 'rem', // 1     | 17
      md: scale(1) + 'rem', // 1.563 | 25
      lg: scale(2) + 'rem', // 1.563 | 25
      xl: scale(3) + 'rem', // 1.953 | 31
      '2xl': scale(4) + 'rem', // 2.441 | 39
      '3xl': scale(5) + 'rem', // 3.052 | 49
      '4xl': scale(6) + 'rem', // 3.815 | 61
      '5xl': scale(7) + 'rem', // 4.768 | 76
    },
    fontWeight: {
      thin: '200',
      normal: '400',
      bold: '600',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      loose: '0.025em',
    },
    lineHeight: {
      none: '1',
      '3tight': '1.125',
      '2tight': '1.25',
      tight: '1.375',
      normal: '1.5',
      loose: '1.625',
      '2loose': '1.75',
    },
    zIndex: {
      auto: 'auto',
      '0': '0',
      pop: '2',
      menu: '4',
      modal: '6',
      'modal-close': '8',
      consent: '10',
    },
  },
  variants: {
    extend: {
     backgroundOpacity: ['dark'],
    }
  },
  corePlugins: {},
  plugins: [
    // { addUtilities, addComponents, addBase, addVariant, e, prefix, theme, variants, config }
    // function ({ addBase }) {
    //   addBase(addPlainFontFace());
    // },
  ],
};



function addPlainFontFace() {
  /*
   * Support for various font weights as sumeric values
   *
   * | Value | Common weight name        |
   * |-------|---------------------------|
   * |   100 | Thin (Hairline)           |
   * |   200 | Extra Light (Ultra Light) |
   * |   300 | Light                     |
   * |   400 | Normal                    |
   * |   500 | Medium                    |
   * |   600 | Semi Bold (Demi Bold)     |
   * |   700 | Bold                      |
   * |   800 | Extra Bold (Ultra Bold)   |
   * |   900 | Black (Heavy)             |
   *
   * woff2 first as it supports better compression
   * woff as a fallback for older browsers back to IE9 and Safari 5
   */

  const fontFace = [
    { file: 'PlainThin-Regular', weight: 200, style: 'normal' },
    { file: 'PlainThin-Italic', weight: 200, style: 'italic' },
    { file: 'PlainRegular-Regular', weight: 400, style: 'normal' },
    { file: 'PlainRegular-Italic', weight: 400, style: 'italic' },
    { file: 'PlainBold-Regular', weight: 600, style: 'normal' },
    { file: 'PlainBold-Italic', weight: 600, style: 'italic' },
  ].map((it) => {
    return {
      fontFamily: 'Plain',
      src: `url('/fonts/${it.file}.woff2') format('woff2'),
      url('/fonts/${it.file}.woff') format('woff')`,
      fontWeight: it.weight,
      fontStyle: it.style,
      fontDisplay: 'swap',
    };
  });

  return {
    '@font-face': fontFace,
    body: { '@apply font-sans': '' },
  };
}