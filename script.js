

const fromlocation = document.getElementById("fromlocation");
const tolocation = document.getElementById("tolocation");
const searchlocation = document.getElementById("searchlocation");
const searchbtn = document.getElementById("searchbtn");
const pushing = document.getElementById("pushing");
const searchbtndestination = document.getElementById("searchbtndestination");
const mylocation = document.getElementById("mylocation");

const savedLocation = localStorage.getItem("location");
if (savedLocation) {
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(savedLocation)}&z=15&output=embed" loading="lazy"></iframe>`;
}

searchbtn.addEventListener("click", () => {
  const location = searchlocation.value.trim();
  if (!location) return alert("Please enter a location.");
  localStorage.setItem("location", location);
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(location)}&z=15&output=embed" loading="lazy"></iframe>`;
});

searchbtndestination.addEventListener("click", () => {
  const from = fromlocation.value.trim();
  const to = tolocation.value.trim();
  if (!from || !to) return alert("Enter both source and destination.");
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?saddr=${encodeURIComponent(from)}&daddr=${encodeURIComponent(to)}&output=embed" loading="lazy"></iframe>`;
});

mylocation.addEventListener("click", () => {
  if (!navigator.geolocation) return alert("Geolocation not supported.");
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed" loading="lazy"></iframe>`;
  }, () => {
    alert("Unable to fetch current location.");
  });
});
const sharebtn = document.getElementById("sharebtn");

sharebtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation not supported");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const mapUrl = `https://maps.google.com/?q=${latitude},${longitude}`;

    // Copy to clipboard
    navigator.clipboard.writeText(mapUrl).then(() => {
      alert("📍 Location link copied! Share it with anyone.");
    }).catch(() => {
      alert("❌ Failed to copy location.");
    });
  }, () => {
    alert("Unable to fetch current location.");
  });
});
