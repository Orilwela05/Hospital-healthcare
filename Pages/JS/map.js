document.addEventListener("DOMContentLoaded", () => {
  // Contact Form
  const contactForm = document.getElementById("contactForm");
  const contactResponse = document.getElementById("contactResponse");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactResponse.innerHTML = `<p>Your message has been sent successfully!</p>`;
    });
  }

  // Leaflet Map for Polokwane Medi Clinic
  const mapContainer = document.getElementById("map");
  if (mapContainer) {
    // Coordinates for Polokwane Medi Clinic
    const clinicLat = -23.9040;
    const clinicLng = 29.4689;

    const map = L.map("map").setView([clinicLat, clinicLng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    L.marker([clinicLat, clinicLng])
      .addTo(map)
      .bindPopup("<b>Polokwane Medi Clinic</b><br>Healthcare Hospital Location")
      .openPopup();
  }
});
