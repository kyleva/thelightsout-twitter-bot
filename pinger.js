function pinger(mins){
  const https = require('https');
  const ms = mins * 60000;

  console.log(`Bind pinger to run once every ${mins} minutes`);

  setInterval(() => {
    https.get('https://thelightsout-twitter-bot.herokuapp.com/');
    console.log('Server pinged, keep on running!');
  }, ms);
}

module.exports = pinger;