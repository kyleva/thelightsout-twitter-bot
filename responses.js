const contentful = require('./contentful');

function getResponse(){
  const getItems = contentful.getItems;

  require('dotenv').config();

  return getItems({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
  .then((data) => {
    const responses = data.items.map((item) => {
      return item.fields.response;
    });
    return responses[Math.floor(Math.random() * responses.length)];
  });
}

module.exports = {
  get: getResponse
};