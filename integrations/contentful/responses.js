const getItems = require('./get-items');

function getResponse(){
  require('dotenv').config();

  return getItems({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  .then((data) => {
    const responses = data.items.map((item) => {
      return item.fields.response;
    });

    const getRandomFromArray = require('./../../utils/get-random-from-array');

    return getRandomFromArray(responses);
  });
}

module.exports = {
  get: getResponse
};