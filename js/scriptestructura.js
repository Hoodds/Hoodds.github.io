document.addEventListener('DOMContentLoaded', () => {
    const qrcodeSmall = document.getElementById('qrcode-small');
    const qrcodeOverlay = document.getElementById('qrcode-overlay');
    const qrcodeCloseBtn = document.getElementById('qrcode-close-btn');

qrcodeSmall.addEventListener('click', () => {
    qrcodeOverlay.style.display = 'block';
});

qrcodeCloseBtn.addEventListener('click', () => {
    qrcodeOverlay.style.display = 'none';
});


  thumbnails.querySelectorAll('img').forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      openFullImage(thumbnail.src, thumbnail.alt);
    });
  });

  function openFullImage(src, alt) {
    fullImage.src = src;
    fullImage.alt = alt;
    fullImageOverlay.style.display = 'block';
  }

  closeBtn.addEventListener('click', () => {
    fullImageOverlay.style.display = 'none';
  });
});
