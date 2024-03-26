export async function fetchParks(stateCode, limit = 10, start = 1) {
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

  // Assuming both functions return Promises
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