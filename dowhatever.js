require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const spotSearch = require("./spotify.js");

const doWhat = () => {

    fs.readFile('random.txt', 'utf8', (error, data) => {
        if (!error) {
            let ran_txt = data.split(',');

            let cmd = ran_txt[0];
            let arg2 = ran_txt[1];

            spotSearch.songSearch(cmd, arg2);
        } else {
            console.log(`Error Occurred: ${error}`)
        }
    });


    
};

module.exports.doWhat = doWhat;