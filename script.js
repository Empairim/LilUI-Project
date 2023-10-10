function showTab(tabIndex) {
  // Hide all tabs
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the selected tab
  let selectedTab = document.getElementById("tab" + (tabIndex + 1));
  selectedTab.classList.add("active");

  let catUrl = "https://api.thecatapi.com/v1/images/search";
  fetch(catUrl)
    .then((res) => res.json())
    .then((data) => {
      let img = document.createElement("img");
      img.src = data[0].url;

      selectedTab.innerHTML = "I PRESENT YOU A KITTYYYY";
      selectedTab.appendChild(img);
    })
    .catch((err) => console.log(err));
}
