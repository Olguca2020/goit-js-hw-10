import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#single',
});

const YOUR_API_KEY = `live_sZJSF2r3b7RaQcpCRE4JWCZQFkPyecbqN78KnhGUiHv7pDzuobrRQWETam8vMi86`;
const url = `https://api.thecatapi.com/v1/images/search`;
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(respons => respons.json())
  .then(json => console.log(json));
