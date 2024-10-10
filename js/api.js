const container = document.getElementById("dataContainer");
// Call API 
function displayData(anime) {
    // console.log(anime.data[0].attributes.canonicalTitle);
    const container = document.getElementById('dataContainer');
    
    // Créer un conteneur pour les informations de l'anime
    const animeDiv = document.createElement('div');
    animeDiv.classList.add("animeDiv");
    container.appendChild(animeDiv);
    
    // // Créer un élément pour le titre
    const titleElement = document.createElement('h3');
    titleElement.textContent = anime.data[0].attributes.canonicalTitle;
    animeDiv.appendChild(titleElement);
    
    // // Créer une liste non ordonnée pour afficher les détails de l'anime
    const detailsList = document.createElement('ul');
    animeDiv.appendChild(detailsList);  
    
    // // Créer un élément de liste pour le synopsis
    const synospsisContainer = document.createElement('li');
    const synopsisItem = document.createElement('p');
    synopsisItem.textContent = "Synopsis : " + anime.data[0].attributes.description;
    synospsisContainer.appendChild(synopsisItem);
    detailsList.appendChild(synospsisContainer);
    
    // // Créer un élément de liste pour le type
    const typeContainer = document.createElement('li');
    const typeItem = document.createElement('p');
    typeItem.textContent = "Type : " + anime.data[0].attributes.showType;
    typeContainer.appendChild(typeItem);
    detailsList.appendChild(typeContainer);
    
    // Créer un élément de liste pour le statut
    const statusContainer = document.createElement('li');
    const statusItem = document.createElement('p');
    statusItem.textContent =  "Status : " + anime.data[0].attributes.status;
    statusContainer.appendChild(statusItem);
    detailsList.appendChild(statusContainer);
}

document.getElementById('animeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const animeId = document.getElementById("id");

    async function waitingForResponse() {
        try {
            const response = await fetch(`https://kitsu.io/api/edge/anime?filter[id]=${animeId.value}`);
            const anime = await response.json();
            displayData(anime);
        }
        catch(error) {
            console.error("Unable to load anime datas from the server : " + error);
        }
    }
    waitingForResponse();
}); 

