import { fetchBreeds } from './cat-api';
const displaySelect = new SlimSelect({
  select: '#selectElement',
});
let displayData = []; 
fetchBreeds().then(res => {
  return displayData = res.map((breed, index) => ({
    value: breed.id,
    text: breed.name,
    display: index === 0 ? false : true,
  }));

});


  displaySelect.setData(displayData);
  const breedNames = displayData.map(breed => breed.text);
  displaySelect.set(breedNames);
