require("dotenv").config();
const Spotify = require("node-spotify-api"),
    spotify = new Spotify(keys.spotify),
    Twitter = require("twitter"),
    client = new Twitter(keys.twitter),
    searchTweets = require("./twitter.js"),
    keys = require("./keys"),
    request = require("request"),
    fs = require("fs"), // gets called in all functions to append log.txt
    songSearch = require("./spotify.js"),
    movieSearch = require("./omdb.js"),
    doWhat = require("./dowhatever.js");

let cmd = process.argv[2], arg = process.argv[3];


const checkCom = (cmd, arg) => {
    switch (cmd) {
        case "spotify-this-song":
            songSearch.spotifySearch(cmd, arg);
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
    }
};

checkCom(cmd, arg);
