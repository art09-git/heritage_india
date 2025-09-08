module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Golden Saffron
        primary: {
          DEFAULT: "#B8860B", // golden-saffron-500
          50: "#FEF9E7", // golden-saffron-50
          100: "#FDF2D0", // golden-saffron-100
          200: "#FAE5A1", // golden-saffron-200
          300: "#F7D872", // golden-saffron-300
          400: "#E4C441", // golden-saffron-400
          500: "#B8860B", // golden-saffron-500
          600: "#9A7209", // golden-saffron-600
          700: "#7C5E07", // golden-saffron-700
          800: "#5E4A05", // golden-saffron-800
          900: "#403603", // golden-saffron-900
        },
        // Secondary Colors - Earthy Temple
        secondary: {
          DEFAULT: "#8B4513", // earthy-temple-500
          50: "#F5F0EB", // earthy-temple-50
          100: "#EBE1D7", // earthy-temple-100
          200: "#D7C3AF", // earthy-temple-200
          300: "#C3A587", // earthy-temple-300
          400: "#AF875F", // earthy-temple-400
          500: "#8B4513", // earthy-temple-500
          600: "#763A10", // earthy-temple-600
          700: "#612F0D", // earthy-temple-700
          800: "#4C240A", // earthy-temple-800
          900: "#371907", // earthy-temple-900
        },
        // Accent Colors - Warm Invitation
        accent: {
          DEFAULT: "#CD853F", // warm-invitation-500
          50: "#FBF7F2", // warm-invitation-50
          100: "#F7EFE5", // warm-invitation-100
          200: "#EFDFCB", // warm-invitation-200
          300: "#E7CFB1", // warm-invitation-300
          400: "#DFBF97", // warm-invitation-400
          500: "#CD853F", // warm-invitation-500
          600: "#B07135", // warm-invitation-600
          700: "#935D2B", // warm-invitation-700
          800: "#764921", // warm-invitation-800
          900: "#593517", // warm-invitation-900
        },
        // Background Colors
        background: "#FDF5E6", // parchment-canvas
        surface: "#F5F5DC", // content-elevation
        // Text Colors
        text: {
          primary: "#2F1B14", // rich-reading
          secondary: "#5D4E37", // content-hierarchy
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // cultural-connection-500
          50: "#F0F8F0", // cultural-connection-50
          100: "#E1F1E1", // cultural-connection-100
          200: "#C3E3C3", // cultural-connection-200
          300: "#A5D5A5", // cultural-connection-300
          400: "#87C787", // cultural-connection-400
          500: "#228B22", // cultural-connection-500
          600: "#1E7A1E", // cultural-connection-600
          700: "#1A691A", // cultural-connection-700
          800: "#165816", // cultural-connection-800
          900: "#124712", // cultural-connection-900
        },
        warning: {
          DEFAULT: "#DAA520", // cultural-sensitivity-500
          50: "#FDF9F0", // cultural-sensitivity-50
          100: "#FBF3E1", // cultural-sensitivity-100
          200: "#F7E7C3", // cultural-sensitivity-200
          300: "#F3DBA5", // cultural-sensitivity-300
          400: "#EFCF87", // cultural-sensitivity-400
          500: "#DAA520", // cultural-sensitivity-500
          600: "#BA8E1C", // cultural-sensitivity-600
          700: "#9A7718", // cultural-sensitivity-700
          800: "#7A6014", // cultural-sensitivity-800
          900: "#5A4910", // cultural-sensitivity-900
        },
        error: {
          DEFAULT: "#A0522D", // cultural-guidance-500
          50: "#F7F2EF", // cultural-guidance-50
          100: "#EFE5DF", // cultural-guidance-100
          200: "#DFCBBF", // cultural-guidance-200
          300: "#CFB19F", // cultural-guidance-300
          400: "#BF977F", // cultural-guidance-400
          500: "#A0522D", // cultural-guidance-500
          600: "#884626", // cultural-guidance-600
          700: "#703A1F", // cultural-guidance-700
          800: "#582E18", // cultural-guidance-800
          900: "#402211", // cultural-guidance-900
        },
      },
      fontFamily: {
        headlines: ['Crimson Text', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Merriweather', 'serif'],
        accents: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
      },
      boxShadow: {
        'cultural': '0 4px 12px rgba(139, 69, 19, 0.1)',
        'cultural-hover': '0 6px 16px rgba(139, 69, 19, 0.15)',
      },
      transitionTimingFunction: {
        'cultural': 'ease-in-out',
      },
      transitionDuration: {
        'cultural': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'cultural': '0.5rem',
      },
    },
  },
  plugins: [],
}