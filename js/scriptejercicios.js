document.addEventListener('DOMContentLoaded', () => {
    const qrcodeSmall = document.getElementById('qrcode-small');
    const qrcodeOverlay = document.getElementById('qrcode-overlay');
    const qrcodeCloseBtn = document.getElementById('qrcode-close-btn');
    const thumbnails = document.getElementById('thumbnails');
    const fullImage = document.getElementById('full-image');
    const fullImageOverlay = document.getElementById('full-image-overlay');
    const closeBtn = document.getElementById('close-btn');

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

function openTab(tabName) {
    var tabContents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    var tabLinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.classList.add("active");
}

openTab('tab1'); // Abre la primera pestaña por defecto al cargar la página
