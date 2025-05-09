const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const portfolioDir = path.join(__dirname, 'public', 'images', 'portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Instructions for the user
console.log(`
============================================================
IMAGE DOWNLOAD INSTRUCTIONS
============================================================

The portfolio website is set up to use 5 specific images:

1. image1.jpg - Blue silhouette in field
2. image2.jpg - Person in field at sunset
3. image3.jpg - Person with camera in city
4. image4.jpg - Person at desk with window
5. image5.jpg - Person in chair with light

Please save these images to:
${portfolioDir}

Make sure to name them exactly as listed above.

Once the images are saved, restart the development server:
npm run dev

============================================================
`);
