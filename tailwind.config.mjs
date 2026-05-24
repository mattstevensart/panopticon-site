/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Panopticon Prison Palette — matched from PanopticonAvatarCreator.gd
        'p-root':   '#0a0a0f',
        'p-canvas': '#0f0f17',
        'p-panel':  '#171721',
        'p-accent': '#388cff',
        'p-red':    '#e6261a',
        'p-teal':   '#1ae0c2',
        'p-text':   '#d6d6e0',
        'p-dim':    '#b8b4c9',
        'p-unlock': '#8c40ff',
        'p-green':  '#39eb61',
        'p-thumb':  '#333340',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        ui:      ['Electrolize', 'sans-serif'],
        comic:   ['"Exo 2"', 'sans-serif'],
        dot:     ['"Zen Dots"', 'cursive'],
      },
      fontSize: {
        'xs':   ['0.8rem',  { lineHeight: '1.5' }],
        'sm':   ['0.95rem', { lineHeight: '1.6' }],
        'base': ['1.1rem',  { lineHeight: '1.7' }],
        'lg':   ['1.25rem', { lineHeight: '1.6' }],
        'xl':   ['1.4rem',  { lineHeight: '1.5' }],
        '2xl':  ['1.65rem', { lineHeight: '1.4' }],
        '3xl':  ['2rem',    { lineHeight: '1.3' }],
        '4xl':  ['2.5rem',  { lineHeight: '1.2' }],
      },
      boxShadow: {
        'accent-glow': '0 0 12px 2px rgba(56,140,255,0.45)',
        'teal-glow':   '0 0 12px 2px rgba(26,224,194,0.45)',
        'red-glow':    '0 0 12px 2px rgba(230,38,26,0.55)',
        'unlock-glow': '0 0 16px 4px rgba(140,64,255,0.50)',
      },
      backgroundImage: {
        'scanline':    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
        'grid-subtle': "linear-gradient(rgba(56,140,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,140,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
};
