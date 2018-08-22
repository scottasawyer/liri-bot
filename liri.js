require("dotenv").config();
const Spotify = require("node-spotify-api"),
    keys = require("./keys"),
    request = require("request"),
    Twitter = require("twitter"),
    fs = require("fs"), 
    searchTweets = require("./twitter.js"),
    songSearch = require("./spotify.js"),
    movieSearch = require("./omdb.js"),
    doWhat = require("./dowhatever.js");
let spotify = new Spotify(keys.spotify),
    client = new Twitter(keys.twitter);

let cmd = process.argv[2], arg = process.argv[3];

const checkSwitch = (cmd, arg) => {
    switch (cmd) {
        case "spotify-this-song":
            songSearch.songSearch(cmd, arg);
            break;
        case "movie-this":
            movieSearch.movieSearch(cmd, arg);
            break;
        case "my-tweets":
            searchTweets.getTweets(cmd)
            break;
        case "do-what-it-says":
            doWhat.doWhat();
            break;
        default: console.log("Missing or invalid user command.");
            break;
    }
};

checkSwitch(cmd, arg);
