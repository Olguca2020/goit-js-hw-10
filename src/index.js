import { fetchBreeds } from "./cat-api";
import SlimSelect from 'slim-select';
fetchBreeds()

new SlimSelect({
  select: '#single',
});


