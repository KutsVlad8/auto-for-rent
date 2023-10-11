const locationCity = string => {
  const words = string.split(',');
  const city = words[1].trim();

  return city;
};

export default locationCity;
