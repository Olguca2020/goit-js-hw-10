function fetchBreeds() {
const YOUR_API_KEY = `live_sZJSF2r3b7RaQcpCRE4JWCZQFkPyecbqN78KnhGUiHv7pDzuobrRQWETam8vMi86`;
const url = `https://api.thecatapi.com/v1/images/search`;
    return fetch(`https://api.thecatapi.com/v1/breeds`)
      .then(respons => respons.json())
        .then(resp => { return resp.map(breed => breed.name) });  
};
export { fetchBreeds };