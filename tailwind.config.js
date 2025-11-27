module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_services/**/*.md',
    './_portfolio/**/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    extend: {
      colors: {
        // OrionSoft.dev Brand Colors
        orion: {
          navy: '#0A1128',      // Derin Lacivert - Primary Background
          white: '#FFFFFF',     // Saf Beyaz - Primary Text
          cyan: '#00FFFF',      // Parlak Camgöbeği - Accent/Interactive
          gray: '#A0A0A0',      // Orta Gri - Secondary Text
          purple: '#8A2BE2',    // Uzak Mor - Tertiary Accent
        },
        // Status Colors
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
        // Legacy primary colors (for gradual migration)
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00FFFF',  // Camgöbeği
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#0A1128',  // Lacivert
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-in-out',
        'slide-in': 'slideIn 0.6s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
