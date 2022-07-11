const GUT = 16; // px

const [xs, sm, md, lg, xl] = [36, 48, 60, 72, 84];

function lineHeight(n) {
  const lhMax = 1.5;
  const lhMin = 1;
  const nMin = 0;
  const nMax = 4;
  if (n <= nMin) return lhMax;
  if (n >= nMax) return lhMin;
  const range = (lhMax - lhMin) / (nMax - nMin);
  return (-n * range) + lhMax;
}

function scale(n) {
  return (Math.round(Math.pow(1.25, n) * 1000) / 1000) + "rem";
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
    const max = parseInt(gut(42)) / GUT;
    for (let i = 2; i <= max; i += 1) guts[i + 'gut'] = gut(i);
    return guts;
  })(),
  px: {
    '0': '0',
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '6': '6px',
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

function makeGridColConsts(n) {
  return { third: gut(n / 3), sixth: gut(n / 6) };
}

module.exports = {
  content: [
    './src/**/*',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    gz: {
      hamburgerMaxBreakpoint: parseInt(gut(md)) - 1 + "px",
      grid: {
        xs: makeGridColConsts(xs),
        sm: makeGridColConsts(sm),
        md: makeGridColConsts(md),
        lg: makeGridColConsts(lg),
        xl: makeGridColConsts(xl),
      },
    },
    screens: {
      xs: gut(xs), //  576
      sm: gut(sm), //  769
      md: gut(md), //  960
      lg: gut(lg), // 1152
      xl: gut(xl), // 1344
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '25': '0.25',
      '33': '0.333',
      '50': '0.5',
      '66': '0.667',
      '75': '0.75',
      '90': '0.9',
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
    spacing: {
      ...spacing.guts,
      ...spacing.px
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
      xs: scale(-2), // 0.64  | 10.24
      sm: scale(-1), // 0.8   | 12.8
      base: scale(0), // 1     | 16
      md: scale(1), // 1.563 | 25
      lg: scale(2), // 1.563 | 25
      xl: scale(3), // 1.953 | 31
      '2xl': scale(4), // 2.441 | 39
      '3xl': scale(5), // 3.052 | 49
      '4xl': scale(6), // 3.815 | 61
      '5xl': scale(7), // 4.768 | 76
    },
    fontWeight: {
      thin: '200',
      normal: '400',
      bold: '600',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      loose: '0.15em',
    },
    lineHeight: {
      none:     lineHeight(4), // 1
      '3tight': lineHeight(3), // 1.125
      '2tight': lineHeight(2), // 1.25
      tight:    lineHeight(1), // 1.375
      normal:   lineHeight(0), // 1.5
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
    extend: {
      backgroundImage: {
        'home-hero-image': "url('/images/ers-coating.jpg')",
        'pat-triangles': "url('/images/patterns/dark-triangles.webp')"
      }
    }
  },
  variants: {},
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