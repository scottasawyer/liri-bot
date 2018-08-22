require("dotenv").config();
const keys = require("./keys"),
    Twitter = require("twitter"),
    client = new Twitter(keys.twitter),
    fs = require("fs"),
    searchTweets = (cmd) => {
        const param = {
            screen_name: 'brassgoogie'
        };

        client.get('statuses/user_timeline', param, (error, tweets, response) => {
            if (!error && response.statusCode === 200 && cmd === "my-tweets") {
                for (let i = 0; i < tweets.length; i++) {
                    let tweet = tweets[i].text,
                        tweetDate = tweets[i].created_at;
                    console.log(`\n---------------Twitter---------------\n Tweet # ${i}\n${tweet}
                        \nTweeted On: ${tweetDate}\n-------------------------------------`);
                    fs.appendFile('log.txt', (`\r\n---Twitter---\r\nCommand: "my-tweets"\r\nTweet # ${i}
                        \r\nTweet: ${tweet}\r\nTweeted On: ${tweetDate}\r\n`), function (error) {
                        if (error) console.log(`Yous gots an error: ${error}`);
                    })
                }
            } else {
                console.log(`YOU GOT YOURSELF AN ERROR: ${error}`);
            }
        });
    }
module.exports.searchTweets = searchTweets;