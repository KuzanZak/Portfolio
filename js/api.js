// Function to display the anime data retrieved from the API
function displayData(anime) {
    // Get the container element where the anime information will be displayed
    const animeContainer = document.getElementById('anime-container');
    
    // Create a div to hold anime details
    const animeDatas = document.createElement('div');
    animeDatas.classList.add("anime-datas");
    animeContainer.appendChild(animeDatas);
    
    // Create and display the anime title
    const animeTitle = document.createElement('h3');
    animeTitle.textContent = anime.data[0].attributes.canonicalTitle;
    animeDatas.appendChild(animeTitle);
    
    // Create an unordered list to hold other anime details
    const animeList = document.createElement('ul');
    animeDatas.appendChild(animeList);  
    
    // Create a list item for the anime's synopsis
    const descriptionContainer = document.createElement('li');
    const descriptionItem = document.createElement('p');
    descriptionItem.textContent = "Synopsis : " + anime.data[0].attributes.description;
    descriptionContainer.appendChild(descriptionItem);
    animeList.appendChild(descriptionContainer);
    
    // Create a list item for the anime's type
    const typeContainer = document.createElement('li');
    const typeItem = document.createElement('p');
    typeItem.textContent = "Type : " + anime.data[0].attributes.showType;
    typeContainer.appendChild(typeItem);
    animeList.appendChild(typeContainer);
    
    // Create a list item for the anime's status
    const statusContainer = document.createElement('li');
    const statusItem = document.createElement('p');
    statusItem.textContent =  "Status : " + anime.data[0].attributes.status;
    statusContainer.appendChild(statusItem);
    animeList.appendChild(statusContainer);
}

// Add an event listener to the form that listens for a "submit" event
document.getElementById('anime-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting the usual way
    event.preventDefault();

    // Get the anime element
    const animeElement = document.getElementById("id");

    async function waitingForResponse() {
        try {
            // Fetch anime data from the Kitsu API using the anime ID from the input field
            const response = await fetch(`https://kitsu.io/api/edge/anime?filter[id]=${animeElement.value}`);
            const anime = await response.json();
            displayData(anime);
        }
        catch(error) {
            // Log any errors if the API request fails
            console.error("Unable to load anime datas from the server : " + error);
        }
    }
    waitingForResponse();
}); 

