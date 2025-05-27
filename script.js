
const fromlocation = document.getElementById("fromlocation");
const tolocation = document.getElementById("tolocation");
const searchlocation = document.getElementById("searchlocation");
const searchbtn = document.getElementById("searchbtn");
const pushing = document.getElementById("pushing");
const searchbtndestination = document.getElementById("searchbtndestination");


const savedLocation = localStorage.getItem("location");
if (savedLocation) {
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(savedLocation)}&z=15&output=embed" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}


searchbtn.addEventListener("click", () => {
  const location = searchlocation.value.trim();
  if (!location) return alert("Please enter a location.");
  localStorage.setItem("location", location);
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(location)}&z=15&output=embed" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});

searchbtndestination.addEventListener("click", () => {
  const from = fromlocation.value.trim();
  const to = tolocation.value.trim();
  if (!from || !to) return alert("Please enter both locations.");
  pushing.innerHTML = `<iframe src="https://maps.google.com/maps?saddr=${encodeURIComponent(from)}&daddr=${encodeURIComponent(to)}&output=embed" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
});
