const Twitter = require('twitter');
const TwitterActions = require('./twitter-actions');
const config = require('./config');

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