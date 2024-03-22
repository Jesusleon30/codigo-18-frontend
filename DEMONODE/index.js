const axios = require("axios");

axios.get('https://regres.in/api/users?page=2')
.then((rpta) => {
    console.log(rpta);
})
.catch((err => {
    console.log(error);
}))