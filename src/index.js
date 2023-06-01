import { fetchBreeds } from "./cat-api";
import SlimSelect from 'slim-select';
console.log(fetchBreeds());

new SlimSelect({
  select: '#single',
});


