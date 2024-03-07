/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Cindy Jane Vick";
let currentYear = "2024";
let profilePicture = "images/myself.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

let newName = "Profile image of" + fullName;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", newName);

/* Step 5 - Array */
const favFoods = ["Lasagna", "Lomo Saltado", "Causa", "Aji de Gallina"];
foodElement.innerHTML = favFoods;
const newfavFoods = "Curry";

favFoods.push(newfavFoods);
foodElement.innerHTML += "<br>" + favFoods;
favFoods.shift();
foodElement.innerHTML += "<br>" + favFoods;
favFoods.pop();
foodElement.innerHTML += "<br>" + favFoods;
