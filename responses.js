module.exports = {
  get: function(){
    const responses = [
      'Who do ya think you are?',
      'Wuzzup fam?',
      'Don\'t worry -- we see you.'
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
};