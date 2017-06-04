const Twitter = require('twitter');
const TwitterActions = require('./twitter-actions');
const config = require('./config');
const express = require('express');
const app = express();

/**
 * Set up app
 */
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.render('public/index.html');
});
app.listen(app.get('port'), function() {
  console.log('App is running on port', app.get('port'));
});

/**
 * Initialize twitter instance
 */
const T = new Twitter(config);

console.log('Initialized Twitter instance.');
console.log(T);

console.log('Look to track #tripme Tweets!');

/**
 * Get tweets w/ tracked phrase and do something!
 */
T.stream('statuses/filter', {track: '#tripme'},  function(stream) {
  console.log('Started tracking #tripme hashtag via Streaming API.');

  stream.on('data', (tweet) => {
    const reply = TwitterActions.reply;
    const user = tweet.user.screen_name;

    console.log('Wow, there\'s a #tripme Tweet!');

    const response = require('./responses').get()
    .then((response) => {
      reply({
        statusId: tweet.id_str,
        message: response,
        user: user
      });
    });
  });

  stream.on('error', (error) => {
    console.log(error);
  });
});