new SlimSelect({select:"#single"}),fetch("".concat("https://api.thecatapi.com/v1/","breeds"),{headers:{"x-api-key":"live_sZJSF2r3b7RaQcpCRE4JWCZQFkPyecbqN78KnhGUiHv7pDzuobrRQWETam8vMi86"}}).then((function(e){if(!e.ok)throw new Error;return e.json()})).then((function(e){var n=document.querySelector("#single");e.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))})).catch((function(e){console.error("Сталася помилка:",e)}));
//# sourceMappingURL=index.cd486a51.js.map
