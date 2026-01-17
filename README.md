# Mohamed Zaid - Portfolio Website

A premium interactive portfolio website featuring fluid cursor simulations, physics-based 3D card tilt, scroll-driven animations, and a polished dark theme.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## ⚡ Key Features

- **Fluid Splash Cursor**: Interactive WebGL fluid simulation that follows mouse movements in the Hero section
- **3D Tilt Cards**: Physics-based (spring) 3D tilt effect on hover for all interaction cards
- **Spotlight Effects**: Dynamic spotlight gradients that follow cursor position
- **Scroll Animations**: Smooth reveal animations using Framer Motion
- **Responsive Design**: Fully optimized for all device sizes
- **Accessibility**: Reduced motion support and keyboard navigation
- **SEO Optimized**: Built with Next.js metadata API

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main portfolio page
│   └── globals.css      # Global styles and design tokens
├── components/
│   ├── effects/         # Interactive effects (SplashCursor, FluidCursor, etc.)
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Highlights, Pillars, Projects, Skills, Experience, Education
│   └── ui/              # Reusable UI components (Card, Button, SectionWrapper)
├── data/
│   └── content.ts       # Centralized content file
├── hooks/               # Custom React hooks (useReducedMotion)
└── public/              # Static assets and Resume PDF
```

## ✏️ Editing Content

All portfolio content is securely managed in `data/content.ts`. You can easily update:

- **Personal Info**: `personalInfo` object
- **Projects**: `projects` array
- **Skills**: `skills` object categories
- **Experience**: `experience` array
- **Education**: `education` object

## 🎨 Customization

### Colors

Defined in `app/globals.css` as CSS variables:

```css
:root {
  --bg-primary: #0a0a0f;
  --accent: #6366f1;
  /* ... */
}
```

### Components

- **Card.tsx**: Controlled via props like `tilt`, `spotlight`, `glowColor`.
- **SplashCursor.tsx**: Configurable fluid physics (sim resolution, dissipation, curl, etc.).

## 🌐 Deployment

Ready for zero-config deployment on [Vercel](https://vercel.com).

```bash
npx vercel
```

## 📝 License

MIT
