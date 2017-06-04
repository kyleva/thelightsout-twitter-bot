function pinger(mins){
  const https = require('https');
  const ms = mins * 60000;
  const config = require('./../config');

  console.log(`Bind pinger to run once every ${mins} minutes`);

  setInterval(() => {
    https.get(config.siteUrl);
    console.log('Server pinged, keep on running!');
  }, ms);
}

module.exports = pinger;