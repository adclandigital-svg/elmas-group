const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  { id: 1, shortcode: "DcjMKZoJw81" },
  { id: 2, shortcode: "DcjMG4fp40E" },
  { id: 3, shortcode: "DchS9WPSu5h" },
  { id: 4, shortcode: "DcdrUxfRgDq" },
  { id: 5, shortcode: "DcbPyR0pEtf" },
  { id: 6, shortcode: "DcbPsIBho09" },
];

const dir = path.join(__dirname, 'public', 'instagram');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, dest) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log(`Redirecting to ${res.headers.location}`);
      downloadImage(res.headers.location, dest);
    } else if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${dest}`);
      });
    } else {
      console.error(`Failed to download ${url}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err.message);
  });
}

urls.forEach(u => {
  const url = `https://www.instagram.com/p/${u.shortcode}/media/?size=l`;
  const dest = path.join(dir, `${u.shortcode}.jpg`);
  downloadImage(url, dest);
});
