const createClient = require('contentful').createClient;

function getItems(params){
  const space = params.space;
  const accessToken = params.accessToken;

  const contentfulClient = createClient({
    space,
    accessToken
  });

  return contentfulClient.getEntries()
}

module.exports = getItems;