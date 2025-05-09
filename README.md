# Art Director Portfolio

A modern, minimalist portfolio website for an art director, built with Next.js.

## Image Setup

The portfolio is designed to use 5 specific images that need to be saved to the `/public/images/portfolio/` directory:

1. `image1.jpg` - Blue silhouette in field
2. `image2.jpg` - Person in field at sunset
3. `image3.jpg` - Person with camera in city
4. `image4.jpg` - Person at desk with window
5. `image5.jpg` - Person in chair with light

Please save these images with the exact filenames listed above.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/data/data.ts` - Contains all static content for the website
- `/src/app/` - Next.js app directory with page components
- `/src/components/` - Reusable UI components
- `/public/images/` - Static images used throughout the site

## Deployment

This project is configured for easy deployment to Vercel.
