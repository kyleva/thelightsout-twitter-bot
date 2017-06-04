const Twitter = require('twitter');
const TwitterActions = require('./twitter-actions');
const config = require('./config');

/**
 * Initialize twitter instance
 */
const T = new Twitter(config);

/**
 * Get tweets w/ tracked phrase and do something!
 */
T.stream('statuses/filter', {track: '#tripme'},  function(stream) {
  stream.on('data', (tweet) => {
    const reply = TwitterActions.reply;
    const user = tweet.user.screen_name;

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