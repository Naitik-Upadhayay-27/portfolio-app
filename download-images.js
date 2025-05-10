const fs = require('fs');
const path = require('path');
const https = require('https');

// We'll download images directly to the public folder
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting to download images...');
  
  // Image URLs with descriptive names following vriksh-app naming convention
  const images = [
    {
      url: 'https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg',
      filename: 'cultural-festival.jpg',
      description: 'Cultural Festival Branding'
    },
    {
      url: 'https://images.unsplash.com/photo-1613336026275-d6d473084e85',
      filename: 'tech-product.jpg',
      description: 'Futuristic Product Launch'
    },
    {
      url: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3',
      filename: 'fashion-campaign.jpg',
      description: 'Sustainable Fashion Campaign'
    },
    {
      url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
      filename: 'coffee-branding.jpg',
      description: 'Coffee Packaging & Brand Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1605812276723-c31bb1a68a21',
      filename: 'motion-graphics.jpg',
      description: 'Motion Graphics for Series'
    },
    {
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3',
      filename: 'music-video.jpg',
      description: 'Music Video Direction'
    }
  ];
  
  for (const image of images) {
    const filepath = path.join(publicDir, image.filename);
    console.log(`Downloading ${image.description} to ${image.filename}...`);
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.filename}: ${error.message}`);
    }
  }
  
  console.log('\nAll images downloaded successfully!');
  console.log(`Images saved to: ${publicDir}`);
  console.log('\nRestart the development server with: npm run dev');
}

// Run the download function
downloadAllImages().catch(console.error);
