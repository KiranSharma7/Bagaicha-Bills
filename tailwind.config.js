/** @type {import('tailwindcss').Config} */

/*
 * ═══════════════════════════════════════════════════════
 *  BAGAICHA BLISS — Design System / Tailwind Config
 *  Premium single-origin coffee from Nuwakot, Nepal
 * ═══════════════════════════════════════════════════════
 *
 *  Typography:
 *    Headings  → "Recoleta" (warm, editorial serif)
 *    Body      → "Neue Haas Grotesk Text" (clean, neutral sans)
 *    Accent    → "Recoleta" (for pull quotes, decorative moments)
 *
 *  Fonts setup:
 *    - Recoleta: Self-hosted OTF (Fonts/Recoleta/)
 *    - Neue Haas Grotesk Text: Self-hosted OTF (Fonts/Neue_Haas_Grotesk_Collection/)
 *
 *  Color philosophy:
 *    Drawn directly from the Bagaicha Bliss logo —
 *    deep coffee browns, organic greens, warm creams,
 *    and red coffee cherry accents.
 *    No blues, no purples, no cold tones.
 */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      /* ─── COLORS ─────────────────────────────────── */
      colors: {
        // Primary — Coffee Browns (from logo's farmer & text)
        coffee: {
          50:  "#FAF6F1",   // lightest cream tint
          100: "#F3ECE1",   // warm paper
          200: "#E5D5BF",   // light tan
          300: "#D4BA96",   // warm sand
          400: "#A8845A",   // medium coffee
          500: "#7A5C3A",   // rich coffee brown (primary)
          600: "#5E4429",   // dark roast
          700: "#46321D",   // espresso
          800: "#2E2114",   // near black-brown
          900: "#1A120A",   // deepest dark
          950: "#0F0A06",   // hero dark overlay
        },

        // Secondary — Organic Greens (from logo's leaves)
        leaf: {
          50:  "#F4F8F0",
          100: "#E5EDDB",
          200: "#CDDDBB",
          300: "#A8C48E",
          400: "#7BA35B",   // bright leaf green
          500: "#5A7F3C",   // primary green
          600: "#466530",   // deep forest
          700: "#354D24",
          800: "#263619",
          900: "#1A2511",
        },

        // Accent — Coffee Cherry Red (from logo's berries)
        cherry: {
          400: "#D4543A",   // bright cherry
          500: "#B8412B",   // rich red (primary accent)
          600: "#943321",   // deep cherry
          700: "#6E2618",   // dark wine
        },

        // Neutrals — Warm-tinted
        cream: {
          50:  "#FFFDF9",   // page background (light sections)
          100: "#FDF8F0",   // card background
          200: "#F5EDE0",   // subtle borders
          300: "#E8DCC9",   // dividers
        },

        // Overlay & Text
        ink: {
          DEFAULT: "#1A120A",   // primary text (warm black)
          light:   "#5E4429",   // secondary text
          muted:   "#8B7355",   // captions, metadata
        },
      },

      /* ─── TYPOGRAPHY ─────────────────────────────── */
      fontFamily: {
        // Headings — warm, editorial serif
        heading: ['"Recoleta"', 'Georgia', '"Times New Roman"', 'serif'],

        // Body — clean, neutral sans
        body: ['"Neue Haas Grotesk Text"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],

        // Accent — for pull quotes, special moments
        accent: ['"Recoleta"', 'Georgia', 'serif'],
      },

      fontSize: {
        // Display sizes (hero, big statements)
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.8rem, 6vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display':    ['clamp(2.2rem, 4.5vw, 4rem)',  { lineHeight: '1.0',  letterSpacing: '-0.015em' }],

        // Section headings
        'heading-xl': ['clamp(1.8rem, 3.5vw, 3rem)',  { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading':    ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2',  letterSpacing: '0' }],

        // Step/process numbers
        'step-num':   ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1', letterSpacing: '0.15em' }],

        // Body sizes
        'body-lg':    ['1.125rem',  { lineHeight: '1.7' }],
        'body':       ['1rem',      { lineHeight: '1.7' }],
        'body-sm':    ['0.875rem',  { lineHeight: '1.6' }],

        // Captions & labels
        'caption':    ['0.75rem',   { lineHeight: '1.5', letterSpacing: '0.08em' }],
        'overline':   ['0.75rem',   { lineHeight: '1.5', letterSpacing: '0.2em' }],
      },

      /* ─── SPACING ────────────────────────────────── */
      spacing: {
        'section':     'clamp(5rem, 12vw, 10rem)',     // between major sections
        'section-sm':  'clamp(3rem, 8vw, 6rem)',       // between sub-sections
        'block':       'clamp(2rem, 4vw, 3.5rem)',     // between content blocks
        'gutter':      'clamp(1.5rem, 3vw, 2.5rem)',   // grid gutter
      },

      /* ─── MAX-WIDTHS ────────────────────────────── */
      maxWidth: {
        'content':  '72rem',    // 1152px — main content area
        'narrow':   '42rem',    // 672px — text-heavy sections
        'prose':    '36rem',    // 576px — single column text
        'wide':     '90rem',    // 1440px — full-bleed constrained
      },

      /* ─── BORDER RADIUS ─────────────────────────── */
      borderRadius: {
        'organic':  '1.5rem',      // soft, natural curves
        'organic-sm': '0.75rem',
        'organic-lg': '2.5rem',
      },

      /* ─── SHADOWS ────────────────────────────────── */
      boxShadow: {
        'warm':     '0 4px 20px rgba(122, 92, 58, 0.08)',
        'warm-lg':  '0 8px 40px rgba(122, 92, 58, 0.12)',
        'warm-xl':  '0 16px 60px rgba(122, 92, 58, 0.16)',
        'inner-warm': 'inset 0 2px 8px rgba(122, 92, 58, 0.06)',
      },

      /* ─── TRANSITIONS ───────────────────────────── */
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'smooth':   'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },

      /* ─── ANIMATIONS (CSS-only for lightweight moments) ── */
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'reveal-line': {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-0.5rem)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':     'fade-in 0.6s ease forwards',
        'reveal-line': 'reveal-line 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float':       'float 6s ease-in-out infinite',
      },

      /* ─── ASPECT RATIOS ──────────────────────────── */
      aspectRatio: {
        'hero':      '16 / 9',
        'portrait':  '3 / 4',
        'landscape': '4 / 3',
        'square':    '1 / 1',
      },

      /* ─── BACKGROUND IMAGE (textures, gradients) ── */
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'gradient-warm':  'linear-gradient(180deg, #FAF6F1 0%, #F3ECE1 100%)',
        'gradient-dark':  'linear-gradient(180deg, #1A120A 0%, #2E2114 100%)',
        'gradient-hero':  'linear-gradient(180deg, rgba(26,18,10,0.7) 0%, rgba(26,18,10,0.4) 50%, rgba(26,18,10,0.8) 100%)',
      },
    },
  },

  plugins: [],
};
