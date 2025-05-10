const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    
    // Handle static files (images, videos, etc.)
    if (
      pathname.startsWith('/images/') ||
      pathname.includes('.jpg') ||
      pathname.includes('.jpeg') ||
      pathname.includes('.png') ||
      pathname.includes('.webp') ||
      pathname.includes('.mp4') ||
      pathname.includes('.svg')
    ) {
      const filePath = path.join(__dirname, 'public', pathname);
      
      // Check if file exists
      try {
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          let contentType = 'application/octet-stream';
          
          // Set content type based on file extension
          switch (ext) {
            case '.jpg':
            case '.jpeg':
              contentType = 'image/jpeg';
              break;
            case '.png':
              contentType = 'image/png';
              break;
            case '.webp':
              contentType = 'image/webp';
              break;
            case '.mp4':
              contentType = 'video/mp4';
              break;
            case '.svg':
              contentType = 'image/svg+xml';
              break;
          }
          
          res.writeHead(200, { 'Content-Type': contentType });
          const fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          return;
        }
      } catch (e) {
        console.error(`Error serving static file ${filePath}:`, e);
      }
    }
    
    // Let Next.js handle all other requests
    return handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
