/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(190 74% 34%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ink: {
          950: '#06131a',
          900: '#0b1f2b',
          800: '#112f40',
          700: '#19425a',
          600: '#255a7a',
          500: '#39789e',
          400: '#5a99be',
          300: '#94c2dc',
          200: '#cbe3f0',
          100: '#e7f3f9',
          50: '#f4f9fc',
        },
        aqua: {
          50: '#f0fdfb',
          100: '#ccfbf4',
          200: '#99f6ea',
          300: '#5cd6c9',
          400: '#2eb8ac',
          500: '#209db6',
          600: '#15788e',
          700: '#136072',
          800: '#144e5d',
          900: '#15414e',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(32, 157, 182, 0.12)",
        "card-hover": "0 12px 36px -4px rgba(32, 157, 182, 0.22)",
        glow: "0 0 25px -3px rgba(46, 184, 172, 0.35)",
        floating: "0 10px 40px -10px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.5s infinite ease-in-out',
        float: 'float 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
