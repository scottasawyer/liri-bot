require("dotenv").config();
const fs = require("fs"),
    request = require("request");


const movieSearch = (cmd, movieName) => {
    if (!movieName && cmd === "movie-this") movieName = "Mr. Nobody";
    else movieName = process.argv[3];
    let queryURL = `http://www.omdbapi.com/?t=${movieName}&plot=full&tomatoes=true&apikey=trilogy`;
    request(queryURL, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            let bodyInfo = JSON.parse(body);
            console.log('\n---------------Spotify Results---------------');
            console.log(`\nMovie Title: ${bodyInfo.Title}`);
            console.log(`\nRelease Year: ${bodyInfo.Year}`);
            console.log(`\nRating: ${bodyInfo.Ratings[0].Source} - ${bodyInfo.Ratings[0].Value}`);
            console.log(`\nRating: ${bodyInfo.Ratings[1].Source} - ${bodyInfo.Ratings[1].Value}`);
            console.log(`\nCountry of Origin: ${bodyInfo.Country}`);
            console.log(`\nLanguage: ${bodyInfo.Language}`);
            console.log(`\nPlot: ${bodyInfo.Plot}`); 
            console.log(`\nActors: ${bodyInfo.Actors}`);
            console.log(`---------------------------------------------`);
            fs.appendFile('log.txt', (`\r\n ---OMDB INFO--- \r\n Command: "movie-this" 
                \r\n  Movie Title: ${bodyInfo.Title} \r\n Release Year: ${bodyInfo.Year} 
                \r\n Rating: ${bodyInfo.Ratings[0].Source} - ${bodyInfo.Ratings[0].Value} 
                \r\n Rating: ${bodyInfo.Ratings[1].Source} - ${bodyInfo.Ratings[1].Value} 
                \r\n Country of origin: ${bodyInfo.Country} \r\n Language: ${bodyInfo.Language} 
                \r\n Plot: ${bodyInfo.Plot} \r\n Actors: ${bodyInfo.Actors} 
                \r\n --------------- \r\n`), function (error) {
                if (error) throw error;
            });
        } else console.log(`This is an ERROR: ${error}`);
    });
};

module.exports.movieSearch = movieSearch;