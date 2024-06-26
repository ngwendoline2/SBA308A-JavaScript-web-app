
// ParksFunctions.js
import { fetchParkData } from './fetchParks.js';
import { displayParksInDropdown } from './displayData.js'; 
import { parks } from './parksData.js';

function listParks() {
  return parks.map(park => `${park.name} National Park`).join(', ');
}

function findParkByName(name) {
  return parks.find(park => park.name.toLowerCase() === name.toLowerCase());
}

// app.js
import { searchParks } from './displayData.js';

document.getElementById('searchForm').addEventListener('submit', event => {
  event.preventDefault(); // Prevent form from submitting traditionally
  const stateCode = document.getElementById('stateCode').value;
  searchParks(stateCode);
});

// Initial search for demonstration purposes (optional)
searchParks('CA');
export { listParks, findParkByName };

// module exports an array of object
// parksData.js
const parks = [
    {
      id: 1,
      name: "Yellowstone",
      location: "Wyoming",
      established: "March 1, 1872",
    },
    {
      id: 2,
      name: "Yosemite",
      location: "California",
      established: "October 1, 1890",
    },
    {
      id: 3,
      name: "Grand Canyon",
      location: "Arizona",
      established: "February 26, 1919",
    },
  ];
  
  // app.js (Modified Version)
import { searchParks, submitComment } from './displayData.js';

// Existing event listener for search...

// Example of setting up an event listener for comment submission
// Assume there's a form with `id="commentForm"` and inputs for parkId, userName, and userComment
document.getElementById('commentForm').addEventListener('submit', event => {
  event.preventDefault(); // Prevent form from submitting in the traditional way
  const parkId = document.getElementById('parkId').value;
  const userName = document.getElementById('userName').value;
  const userComment = document.getElementById('userComment').value;
  submitComment(parkId, userName, userComment);
});
  export { parks };

// Event listener for button click
document.getElementById('showInfoBtn').addEventListener('click', () => {
    const parkCode = document.getElementById('selectedPark').value;
    //const parkData = await fetchParkData();
    displayParksInDropdown(parkCode);
});

// // apiService.js
// const API_URL = "https://api.thecatapi.com/v1/images/search"
// const API_KEY = 'live_j62f1ot1i7dwTJ3SR66xT2e3D7SjYYUq0a67e1DgMGQRROAR9CHNDArFu9UMQMpx'; 

// async function fetchParks(stateCode, limit = 10, start = 1) {
//   const url = `${BASE_URL}?stateCode=${stateCode}&limit=${limit}&start=${start}&api_key=${API_KEY}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Fetch error: ", error);
//   }
// }
window.addEventListener('DOMContentLoaded', async () => {
    const selectedPark = document.getElementById('selectedPark');
    const parkData = await fetchParkData();

    if (!parkData) {
        console.error('No park data available');
        return;
    }

parkData.forEach(park => {
    const option = document.createElement('option');
    option.value = park.parkCode;
    option.textContent = park.fullName;
    selectedPark.appendChild(option); 
    });
});

// // api.js
// uiService.js (Expanded Version)
import { fetchParks, postComment } from './parksData.js';

// Existing functions...

async function submitComment(parkId, userName, userComment) {
  const comment = {
    author: userName,
    text: userComment,
  };
  const response = await postComment(parkId, comment);
  if (response) {
    console.log('Comment posted successfully:', response);
    // could update the UI to show the newly added comment
  }
}
// app.js (Modified Version)
import { searchParks, submitComment } from './displayData.js';
// Function to fetch park data using Promises directly
async function fetchParkData(parkId) {
    const url = `https://www.nps.gov/yell/planyourvisit/serviceanimals.htm/api/parks/${parkId}`;
    return fetch(url) // fetch returns a Promise
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // .json() returns a Promise
      })
      .then(data => {
        console.log('Park data:', data);
        return data; // Pass the park data for further processing or return it
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

// Existing event listener for search...
import { fetchParkData } from './fetchParks.js';
import { fetchParkImage } from './fetchImages.js';

// both functions return Promises
fetchParkData()
  .then(parkData => {
    console.log(parkData);
    // Do something with the park data
  })
  .catch(error => {
    console.error('Error fetching park data:', error);
  });

fetchParkImage()
  .then(image => {
    console.log(image);
    // Do something with the park image
  })
  .catch(error => {
    console.error('Error fetching park image:', error);
  });

 async function displayParksInDropdown(parkCode) {
    const parkData = await fetchParkData();
    const selectedPark = parkData.find(park => park.parkCode === parkCode);
    
    if (selectedPark) {
        const parkImage = await fetchParkImage(parkCode);

        const parkInfoDiv = document.getElementById('parkInfo');
        parkInfoDiv.innerHTML = `
        <h3>${selectedPark.fullName}</h3>
        <p>${selectedPark.description}</p>
        <p><strong>Location:</strong> ${selectedPark.states}</p>
        <p><strong>Address:</strong> ${selectedPark.addresses[0].city}</p>
        <p><strong>URL:</strong> <a href="${selectedPark.url}" target="_blank">${selectedPark.url}</a></p>
        ${parkImage ? `<img src="${parkImage}" alt="${selectedPark.fullName} Image">` : ''}
        `;
        } else {
            console.error('Selected park data not found.')
        }
}

// Example of setting up an event listener for comment submission
// Assume there's a form with `id="commentForm"` and inputs for parkId, userName, and userComment
document.getElementById('commentForm').addEventListener('submit', event => {
  event.preventDefault(); // Prevent form from submitting in the traditional way
  const parkId = document.getElementById('parkId').value;
  const userName = document.getElementById('userName').value;
  const userComment = document.getElementById('userComment').value;
  submitComment(parkId, userName, userComment);
});
import { searchParks, submitComment } from './fetchParks.js';

var data = [
	{
		"email": "aliquam@icloud.edu",
		"phone": "(742) 559-1794",
		"name": "Shelley Cummings",
		"postalZip": "EZ83 2ZW",
		"region": "Jigawa",
		"country": "France",
		"list": "19",
		"address": "P.O. Box 359, 9162 Facilisis Avenue"
	},
	{
		"email": "lectus@protonmail.com",
		"phone": "1-544-718-2541",
		"name": "Cody Osborn",
		"postalZip": "2822",
		"region": "Zachodniopomorskie",
		"country": "Nigeria",
		"list": "3",
		"address": "274-9746 Mi, Ave"
	},
	{
		"email": "fringilla.euismod@yahoo.net",
		"phone": "1-601-622-5788",
		"name": "Kelly Johns",
		"postalZip": "7012 IS",
		"region": "Sikkim",
		"country": "United Kingdom",
		"list": "3",
		"address": "224 Lacus. Street"
	},
	{
		"email": "neque.venenatis@hotmail.ca",
		"phone": "1-516-522-9628",
		"name": "Karen Cote",
		"postalZip": "27863",
		"region": "Northern Territory",
		"country": "Sweden",
		"list": "19",
		"address": "Ap #945-6159 Sed St."
	},
	{
		"email": "ligula.tortor.dictum@icloud.net",
		"phone": "1-461-383-7115",
		"name": "Sybil Carrillo",
		"postalZip": "402081",
		"region": "Xīnán",
		"country": "Philippines",
		"list": "17",
		"address": "P.O. Box 148, 7152 Justo. Rd."
	}
];







//*** Reflection on the issues: */
//express package the dependencies wasen't installed

// 1. The image API works, but the image itseld isn't loading.


// Each API request contains:
    // Resource Endpoint
    // Query String Parameters
    // HTTP Request Header with an API Key
    // For example, consider the following URL: https://developer.nps.gov/api/v1/alerts?parkCode=acad,dena

// HTTP Header

    // curl -H 'X-Api-Key: INSERT-API-KEY-HERE' 'https://developer.nps.gov/api/v1/parks?parkCode=acad'
    // GET Query Parameter

    // curl 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=INSERT-API-KEY-HERE'


// How do I get images from the "parks" endpoint on the NPS API since they are not included by default in the API response?
// In order to include non default properties in the API response, you should use the "fields" query string parameter. Please see the API documentation page for detailed information on the query string parameters.

// For example, an API request to the URL below would return the default fields and the images property (fields=images) for all parks located in DC and MD (stateCode=DC,MD).

// https://developer.nps.gov/api/v0/parks?stateCode=DC,MD,VA&fields=images