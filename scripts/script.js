// Optionally, add functionality to adjust the image scale dynamically
function centerImage() {
  const image = document.getElementById('image');
  const container = document.getElementById('container');

  // Ensure the image scales correctly to fit the viewport while keeping aspect ratio
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;
  
  const scaleX = windowWidth / imageWidth;
  const scaleY = windowHeight / imageHeight;
  
  const scale = Math.min(scaleX, scaleY);
  
  // Apply the scale
  image.style.transform = `scale(${scale})`;
  image.style.transformOrigin = 'center center';
}

window.addEventListener('load', centerImage);
window.addEventListener('resize', centerImage);
