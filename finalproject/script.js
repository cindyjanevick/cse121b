
const seasonDropdown = document.getElementById("season");
seasonDropdown.addEventListener("change", () => {
  const selectedSeason = seasonDropdown.value;
  display_des(jsonLoc, selectedSeason); 
});



const jsonLoc = "patterns.json";

const displayDesigns = (designs, season) => {
  const designsContainer = document.getElementById("designs");
  designsContainer.innerHTML = ""; // Clear existing designs
  designs.forEach((design) => {
    if (season == "all" || design.seasons.includes(season)) {
      const designCard =
        `
          <div class="design-card">
            <img src="${design.image}" alt="${design.name}">
            <h2>${design.name}</h2>
            <p><strong>Season:</strong> ` +
        design.seasons.join(", ") +
        `</p> 
            <p><strong>Materials:</strong> </p> ` +
        "<li> Yarn: " +
        design.materials.yarn.join(", ") +
        ".</li>" +
        `
            <p><strong>Instructions:</strong> </p> ` +
        "<li>" +
        design.step.join(".</li> \n <li>") +
        ".</li>" +
        `
          </div>
        `;
      designsContainer.innerHTML += designCard;
    }
  });
};

function display_des(url, season) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => displayDesigns(data, season))
    .catch((error) => console.error("Unable to fetch data:", error));
}

display_des(jsonLoc, "all");
