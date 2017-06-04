const Twitter = require('twitter');
const twitterConfig = require('./config');

function trackStream(params){
  /**
   * Initialize twitter instance
   */
  const T = new Twitter(twitterConfig);

  T.stream('statuses/filter', {track: params.hashtag},  function(stream) {
    stream.on('data', params.match);

    stream.on('error', (error) => {
      console.log(error);
    });
  });
}

module.exports = trackStream;