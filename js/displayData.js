export { searchParks } from './displayData.js';

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