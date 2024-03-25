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
import { searchParks } from './uiService.js';

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
  
  export { parks };

// Event listener for button click
document.getElementById('showInfoBtn').addEventListener('click', () => {
    const parkCode = document.getElementById('selectedPark').value;
    //const parkData = await fetchParkData();
    displayParksInDropdown(parkCode);
});

// apiService.js
const API_KEY = 'your_api_key_here'; // Replace with your actual API key
const BASE_URL = 'https://developer.nps.gov/api/v1/parks';

async function fetchParks(stateCode, limit = 10, start = 1) {
  const url = `${BASE_URL}?stateCode=${stateCode}&limit=${limit}&start=${start}&api_key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}
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

// cript.js
import { listParks, findParkByName } from './parksFunctions.js';

console.log("National Parks:");
console.log(listParks());

const search = "Yosemite";
console.log(`Searching for: ${search}`);
const park = findParkByName(search);
if (park) {
  console.log(`Found: ${park.name} National Park, established on ${park.established}`);
} else {
  console.log("Park not found.");
}


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