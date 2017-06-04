function pinger(mins){
  const http = require('http');
  const ms = mins * 6000;
  setInterval(() => {
    http.get('https://thelightsout-twitter-bot.herokuapp.com/')
  }, ms);
}

module.exports = pinger;