function pinger(mins){
  const https = require('https');
  const ms = mins * 6000;
  setInterval(() => {
    http.get('https://thelightsout-twitter-bot.herokuapp.com/')
    console.log('Server pinged, keep on running!');
  }, ms);
}

module.exports = pinger;