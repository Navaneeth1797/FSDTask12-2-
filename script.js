function getRandomDisneyCharacter() {
  const disneyApiUrl = "https://api.disneyapi.dev/character";

  fetch(disneyApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("characterContainer");
      if (data.data && data.data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const character = data.data[randomIndex];
        container.innerHTML = `
            <p><b>Name:</b> ${character.name}</p>
            <p><b>Films:</b> ${character.films.join(", ")}</p>
            <p><b>TV Shows:</b> ${character.tvShows.join(", ")}</p>
            <p><b>Video Games:</b> ${character.videoGames.join(", ")}</p>
            <p><b>Image:</b> <img src="${
              character.imageUrl
            }" class="img-fluid rounded" alt="${character.name}"></p>
          `;
      } else {
        console.error("Invalid data structure from Disney API:", data);
        alert("Invalid data structure from Disney API.");
      }
    })
    .catch((error) => {
      console.error("Error fetching Disney character:", error);
      alert("Error fetching Disney character.");
    });
}

getRandomDisneyCharacter();

document
  .getElementById("changeCharacterBtn")
  .addEventListener("click", getRandomDisneyCharacter);
