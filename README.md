# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 14, featuring smooth animations, custom cursor effects, and responsive design.

## 🌟 Features

- **Modern UI/UX**: Sleek and contemporary design with smooth transitions
- **Custom Animations**:
  - Magnetic elements
  - Text reveal effects
  - Parallax sections
  - Custom cursor
  - Gooey effects
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Smooth Scrolling**: Implemented using Lenis for butter-smooth page scrolling
- **Dynamic Pages**:
  - Home
  - About
  - Portfolio
  - Show Reel
  - Contact
  - Book Online (with calendar integration)
- **GSAP Animations**: Advanced animations using GSAP
- **TypeScript**: Built with type safety using TypeScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Animation Libraries**:
  - GSAP
  - Framer Motion
  - Shery.js
  - Lenis
- **Other Tools**:
  - ESLint
  - Raw Loader

## 📁 Project Structure

```
├── public/
│   └── images/           # Static images and media files
├── src/
│   ├── app/             # Next.js 14 app router pages
│   ├── components/      # Reusable components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── ui/         # UI components
│   ├── data/           # Static data and configurations
│   └── types/          # TypeScript type definitions
```

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Deployment on Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure your project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

## 🎨 Key Components

- **CustomCursor**: Implements a custom cursor with magnetic effect
- **MagneticElement**: Creates magnetic hover effects on elements
- **ParallaxSection**: Handles parallax scrolling effects
- **TextReveal**: Animated text reveal effects
- **TiltCard**: Interactive tilting card components
- **GooeyEffect**: Implements liquid-like animations
- **SmoothScroll**: Handles smooth scrolling using Lenis

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (480px)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is MIT licensed.
