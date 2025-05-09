const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const portfolioDir = path.join(__dirname, 'public', 'images', 'portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
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
  
  // Image URLs for the 5 images shown in the conversation
  const images = [
    {
      url: 'https://i.pinimg.com/originals/9d/44/75/9d44754c4da6e9ee1eff104b38095e4c.jpg',
      filename: 'image1.jpg',
      description: 'Blue silhouette in field'
    },
    {
      url: 'https://images.unsplash.com/photo-1613336026275-d6d473084e85',
      filename: 'image2.jpg',
      description: 'Person in field at sunset'
    },
    {
      url: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3',
      filename: 'image3.jpg',
      description: 'Person with camera in city'
    },
    {
      url: 'https://images.unsplash.com/photo-1536240478700-b869070f9279',
      filename: 'image4.jpg',
      description: 'Person at desk with window'
    },
    {
      url: 'https://images.unsplash.com/photo-1605812276723-c31bb1a68a21',
      filename: 'image5.jpg',
      description: 'Person in chair with light'
    }
  ];
  
  for (const image of images) {
    const filepath = path.join(portfolioDir, image.filename);
    console.log(`Downloading ${image.description} to ${image.filename}...`);
    try {
      await downloadImage(image.url, filepath);
    } catch (error) {
      console.error(`Error downloading ${image.filename}: ${error.message}`);
    }
  }
  
  console.log('\nAll images downloaded successfully!');
  console.log(`Images saved to: ${portfolioDir}`);
  console.log('\nRestart the development server with: npm run dev');
}

// Run the download function
downloadAllImages().catch(console.error);
