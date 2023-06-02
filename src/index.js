import { fetchBreeds } from "./cat-api";
new SlimSelect({
  select: '#single',
});

fetchBreeds()
  .then(res => {    
    const breedSelect = document.querySelector(`#single`);    
    res.forEach(breed => {
      const optionElement = document.createElement(`option`);
      optionElement.value = breed.id;
      optionElement.textContent = breed.name;      
      breedSelect.appendChild(optionElement);
    });
  })
  .catch (error => {
    console.error('Сталася помилка:', error);
  });




