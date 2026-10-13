async function fetchFavoriteShows() {
  const showIds = [67, 525, 56512, 14744, 8, 28653];
  const container = document.getElementById("series-list");

  for (let id of showIds) {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const show = await response.json();

      const showElement = document.createElement("div");
      showElement.className = "series-item";
      showElement.innerHTML = `
                <img src="${show.image.medium}" alt="${show.name} poster" />
                <h4>${show.name}</h4>
            `;

      container.appendChild(showElement);
    } catch (error) {
      console.error("Couldn't get the serie:", error);
    }
  }
}

fetchFavoriteShows();
