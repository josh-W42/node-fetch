const fetch = require('node-fetch');

fetch('https://api.github.com/users/josh-W42')
.then(response => {
    // console.log(response);
    return response.json();
}).catch(error => {
    console.log("Error: ", error);
}).then(json  => {
    console.log(json);
});

