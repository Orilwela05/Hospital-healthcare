

function openLightbox(imgElement) {
  lightbox.style.display = 'block';
  lightboxImg.src = imgElement.src;
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
// Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.addEventListener('click', function () {
    this.classList.toggle('active');

    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Image Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

// menu.js — toggles hamburger menu
document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.querySelectorAll(".hamburger")[0];
  const navUl = document.querySelectorAll(".nav-links")[0];

  if (!hamburger || !navUl) return;

  hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navUl.classList.toggle("mobile");
  });

  // Close on link click (mobile)
  navUl.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=> {
      if (window.innerWidth < 900) {
        hamburger.classList.remove("active");
        navUl.classList.remove("mobile");
      }
    });
  });
});

