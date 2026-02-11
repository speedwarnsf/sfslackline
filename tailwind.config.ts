import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teal + Gold palette for SF Slackline
        'deep-teal': '#1A3A4A',
        'teal': '#1E6B7B',
        'mid-teal': '#4A9BAA',
        'gold': '#C8A84E',
        'warm-cream': '#F5F0E0',
        'light-gray': '#F2F4F6',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'linear-gradient(135deg, #CCFF0020 0%, #00F0FF10 50%, #FF2D7C10 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.8) 60%, rgba(10,10,15,1) 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'line-walk': 'line-walk 20s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-walk': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
