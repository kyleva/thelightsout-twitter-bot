const express = require('express');
const app = express();
const config = require('./config');

console.log('Starting server!');
console.log('--------------------------------------------------');

/**
 * Set up app
 */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('public/index.html');
});
app.listen(app.get('port'), () => {
  console.log('App is running on port', app.get('port'));
});

/**
 * Ping app every five minutes
 */
const pinger = require('./utils/pinger')(5);

/**
 * Track Twitter stream
 */
const twitter = require('./integrations/twitter');
const trackStream = twitter.trackStream;

trackStream({
  hashtag: config.hashtag,
  match: (tweet) => {
    const response = require('./integrations/contentful/responses').get()
    .then((response) => {
      const reply = twitter.reply;
      reply({
        statusId: tweet.id_str,
        message: response,
        user: tweet.user.screen_name
      });
    });
  }
});