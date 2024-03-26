export async function submitComment(parkId, userName, userComment) {
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