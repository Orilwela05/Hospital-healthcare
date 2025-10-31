// Select all social icons
const socialIcons = document.querySelectorAll('.social-icon');

// Add click event to each icon
socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const platform = icon.classList.contains('facebook') ? 'Facebook' :
                     icon.classList.contains('whatsapp') ? 'WhatsApp' :
                     icon.classList.contains('twitter') ? 'Twitter' : 'Unknown';
    console.log(`User clicked on ${platform} icon.`);
    
    // Optional: show a small message to user (for example)
    // alert(`Opening ${platform}`);
  });
});
