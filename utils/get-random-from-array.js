function getRandomFromArray(array){
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = getRandomFromArray;