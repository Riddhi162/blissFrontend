// Color palette from https://coolors.co/palette/220901-621708-941b0c-bc3908-f6aa1c

export const colors = {
  // Primary colors
  primary: {
    darkest: '#2B2D42',  // Deep burgundy
    darker: '#8D99AE',   // Dark rust
    main: '#EDF2F4',     // Bright rust
    lighter: '#EF233C',  // Burnt orange
    accent: '#D90429',   // Golden yellow
  },
  
  // Semantic color mapping
  theme: {
    // Background variations
    bgDark: 'var(--color-primary-darkest)',
    bgMain: 'var(--color-primary-main)',
    bgLight: 'var(--color-primary-lighter)',
    
    // Text variations
    textDark: 'var(--color-primary-darkest)',
    textLight: '#FFFFFF',
    textAccent: 'var(--color-primary-accent)',
    
    // Button variations
    buttonPrimary: 'var(--color-primary-main)',
    buttonHover: 'var(--color-primary-darker)',
    buttonAccent: 'var(--color-primary-accent)',
    
    // Overlay/gradient variations
    overlayDark: 'var(--color-primary-darkest)',
    overlayLight: 'var(--color-primary-lighter)',
  }
};

// CSS Variables
export const cssVariables = `
  :root {
    --color-primary-darkest: ${colors.primary.darkest};
    --color-primary-darker: ${colors.primary.darker};
    --color-primary-main: ${colors.primary.main};
    --color-primary-lighter: ${colors.primary.lighter};
    --color-primary-accent: ${colors.primary.accent};
  }
`; 