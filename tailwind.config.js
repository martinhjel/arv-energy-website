/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "outline":"#74777f","on-primary-fixed-variant":"#2d476f","on-secondary-fixed":"#1b1c1c",
        "on-secondary":"#ffffff","inverse-primary":"#aec7f6","inverse-surface":"#2f3131",
        "secondary":"#5e5e5e","inverse-on-surface":"#f1f1f1","on-tertiary-fixed":"#001b3d",
        "surface-variant":"#e2e2e2","on-tertiary-fixed-variant":"#2d476f",
        "tertiary-container":"#002147","secondary-container":"#e4e2e2","on-background":"#1a1c1c",
        "primary-fixed":"#d6e3ff","on-tertiary-container":"#708ab5","on-error":"#ffffff",
        "surface-tint":"#465f88","primary-fixed-dim":"#aec7f6","error-container":"#ffdad6",
        "surface-bright":"#f9f9f9","primary-container":"#002147","surface-container-lowest":"#ffffff",
        "on-error-container":"#93000a","tertiary-fixed":"#d6e3ff","on-surface-variant":"#44474e",
        "tertiary-fixed-dim":"#aec7f6","outline-variant":"#c4c6cf","surface":"#f9f9f9",
        "secondary-fixed-dim":"#c8c6c6","on-secondary-fixed-variant":"#474747","surface-dim":"#dadada",
        "on-surface":"#1a1c1c","tertiary":"#000a1e","surface-container-high":"#e8e8e8",
        "background":"#f9f9f9","on-primary-container":"#708ab5","on-primary-fixed":"#001b3d",
        "surface-container":"#eeeeee","on-primary":"#ffffff","error":"#ba1a1a","primary":"#000a1e",
        "on-secondary-container":"#656464","secondary-fixed":"#e4e2e2",
        "surface-container-highest":"#e2e2e2","surface-container-low":"#f3f3f3","on-tertiary":"#ffffff"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
        "label": ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
