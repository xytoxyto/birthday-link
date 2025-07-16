/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        accent: 'var(--accent)',
        success: 'var(--success)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        'brand-glow': '0 4px 32px 0 rgba(59, 130, 246, 0.15)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;