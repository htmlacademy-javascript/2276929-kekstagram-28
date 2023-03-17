const getRandomNumber = function (a, b){
  const up = Math.ceil(Math.min(a, b));
  const low = Math.floor(Math.max(a, b));
  const result = Math.random() * (up - low + 1) + low;

  return Math.floor(result);
};

export{getRandomNumber};
