require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/:searchTerm', (req,res) => {
    
    let searchTerm = req.params.searchTerm;
    // console.log('inSearchTerm searchterm is:', searchTerm);
    console.log(process.env.GIPHY_API_KEY);

    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}`)
    .then(response => {
        // response.data => {data[a bunch of keys: data]}
        console.log("response.data", response.data.data[0].title);
        const gifsSearch = response.data.data;
        // console.log("gifsSearch:", gifsSearch);
        res.send(gifsSearch);
    }).catch(err => {
        console.log("There was an error with giphy", err);
        res.sendStatus(500);
    })

})

module.exports = router;