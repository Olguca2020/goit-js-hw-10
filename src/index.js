import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
const refs = {
  selectEl: document.querySelector('#selectElement'),
  loaderEl: document.querySelector(`.loader`),
  errorEl: document.querySelector(`.error`),
  catInfoContainer: document.querySelector(`.cat-info`),
};
const select = new SlimSelect({
  select: '#selectElement',
});
function showLoader() {
  refs.loaderEl.classList.remove('is-hidden');
}
function hideLoader() {
  refs.loaderEl.classList.add('is-hidden');
}
function showContainer() {
  refs.catInfoContainer.classList.remove('is-hidden');
}
function hideContainer() {
  refs.catInfoContainer.classList.add('is-hidden');
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
    refs.loaderEl.classList.add(`is-hidden`);
    showError();
    console.log(err);
  });
let firstLoade = true;
refs.selectEl.addEventListener('change', event => {
  hideError();
  if (firstLoade) {
    firstLoade = false;
    return;
  }
  const breedId = event.target.value;
  
  showLoader();
  hideContainer();
  fetchCatByBreed(breedId)
    .then(res => {
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
      showContainer();
      refs.selectEl.value = '';
    })
    .catch(err => {
      hideLoader();
      showError();
    });
});
