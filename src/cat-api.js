const YOUR_API_KEY = `live_sZJSF2r3b7RaQcpCRE4JWCZQFkPyecbqN78KnhGUiHv7pDzuobrRQWETam8vMi86`;
const url = `https://api.thecatapi.com/v1/`;
  
function fetchBreeds() {  
  return fetch(`${url}breeds`, {
    headers: {
      'x-api-key': YOUR_API_KEY,
    },
  }).then(respons => {
    if (!respons.ok) {
      throw new Error();
    }
    return respons.json();
  });    
};

function fetchCatByBreed(breedId) {
  return fetch(`${url}images/${breedId}`, {
    headers: {
      'x-api-key': YOUR_API_KEY,
    },
  }).then(respons => {
    if (!respons.ok) {
      throw new Error();
    }
    return respons.json();
  });    
};

export { fetchBreeds, fetchCatByBreed };