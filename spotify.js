require("dotenv").config();
const Spotify = require("node-spotify-api"),
    keys = require("./keys");
const spotify = new Spotify(keys.spotify);
fs = require("fs");

const songSearch = (cmd, songTitle) => {
    if (!songTitle && cmd === "spotify-this-song") songTitle = "The Sign";
    else songTitle = songTitle;

    spotify.search({
        type: 'track',
        query: songTitle
    }, (err, data) => {
        if (err) return console.log('Error occurred: ' + err);
        let dataSearch = data.tracks.items[0];
        console.log(`\n---------------Spotify Results---------------\nSong Title: ${dataSearch.name}
            \nArtist: ${dataSearch.album.artists[0].name}\nPreview: ${dataSearch.preview_url}
            \nAlbum: ${dataSearch.album.name}\n---------------------------------------------`);
        fs.appendFile('log.txt', (`\r\n ---SPOTIFY INFO--- \r\n Command: "spotify-this-search" 
            \r\n Song Title: ${dataSearch.name} \r\n Artist Name: ${dataSearch.album.artists[0].name} 
            \r\n Preview Url: ${dataSearch.preview_url} \r\n Album Name: ${dataSearch.album.name} \r\n -------------------`), function (error) {
            if (error) throw error;
        }) 
    });
}

module.exports.songSearch = songSearch;