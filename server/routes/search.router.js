const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) => {

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}`)
    .then(response => {
        console.log(response.data);
        const gifsSearch = response.data.data;
        res.send(gifsSearch)
    }).catch(err => {
        console.log("There was an error with giphy", err);
        res.sendStatus(500);
    })

})

module.exports = router;