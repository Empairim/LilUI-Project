fetch("https://mhw-db.com/armor")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    // Get the first armor object in the array
    const armor = data[0];

    // Display the name and rank of the armor
    const nameEl = document.querySelector("#name");
    nameEl.textContent = armor.name;
    const rankEl = document.querySelector("#rank");
    rankEl.textContent = armor.rank;

    // Display the male and female images of the armor
    const maleImgEl = document.querySelector("#male-img");
    maleImgEl.src = armor.assets.imageMale;
    const femaleImgEl = document.querySelector("#female-img");
    femaleImgEl.src = armor.assets.imageFemale;
  })
  .catch((err) => console.error(err));
