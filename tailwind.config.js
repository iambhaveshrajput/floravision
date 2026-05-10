/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1a2416',
          secondary: '#1f2d1a',
          card: '#1e2a1a',
          darker: '#151d12',
        },
        green: {
          accent: '#4a7c59',
          light: '#6aab7a',
          border: '#2d4a2a',
          highlight: '#5a8f6a',
        },
        text: {
          primary: '#e8e8e8',
          muted: '#9aaa95',
          dim: '#6a7a65',
        },
        yellow: {
          star: '#f5c518',
          accent: '#c8b45a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl2': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6)',
        glow: '0 0 20px rgba(74,124,89,0.15)',
      },
    },
  },
  plugins: [],
}
