const Twitter = require('twitter');
const config = require('./config');
const T = new Twitter(config);

function replyToStatus(params){
  const statusId = params.statusId;
  const message = params.message;
  const user = params.user;

  console.log('Replying to user status.');
  console.log({
    statusId,
    message,
    user
  });

  T.post('statuses/update', {
    'in_reply_to_status_id': statusId,
    'status': `@${user} ${message}`
  }, ( err, data, response ) => {
    if ( err ) {
      console.log(err);
    }
  });
}

module.exports = {
  reply: replyToStatus
};