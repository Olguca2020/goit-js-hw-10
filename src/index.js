import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
const select = new SlimSelect({
  select: '#selectElement',
  });

const refs = {
  selectEl: document.querySelector('#selectElement'),
  loaderEl: document.querySelector(`.loader`),
  errorEl: document.querySelector(`.error`),
  catInfoContainer: document.querySelector(`.cat-info`),
};

function showLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loaderEl.classList.add('is-hidden');
}

function showBreedSelect() {
  refs.selectEl.classList.remove('is-hidden');
}

function hideBreedSelect() {
  refs.selectEl.classList.add('is-hidden');
}


function showError() {
  refs.errorEl.classList.remove('is-hidden');
}

function hideError() {
  refs.errorEl.classList.add('is-hidden');
}

fetchBreeds()
  .then(res => {
    const options = res.map(({ reference_image_id, name }) => ({
      value: reference_image_id,
      text: name,
    }));
    select.setData(options);
    select.selectEl.classList.remove(`is-hidden`);
    refs.loaderEl.classList.add(`is-hidden`);
  })
  .catch(err => {
    hideBreedSelect();
    refs.loaderEl.classList.add(`is-hidden`);
    showError();
    Notiflix.Notify.failure(`Error: ${err.message}`);
  });

  refs.selectEl.addEventListener('change', event => {
  const breedId = event.target.value;
    showLoader();
    hideError();
  fetchCatByBreed(breedId)
    .then(res => {
      console.log(res)
      const {
        url,
        breeds: [{ name, description, temperament }],
      } = res;
       const marcup = `
        <img src="${url}" alt="${name}">
        <div class="title">
        <h3>${name}</h3>
        <p>${description}</p>
        <p><strong>Temperament:</strong> ${temperament}</p>
        </div>
      `;
      
      refs.catInfoContainer.innerHTML = marcup;
      hideLoader();
      refs.selectEl.value = "";
    })
    .catch(err => {
      hideBreedSelect();
      showError();
      Notiflix.Notify.failure(`Error: ${err.message}`);
    });
})
