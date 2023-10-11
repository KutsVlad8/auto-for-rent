const locationCountry = string => {
  const words = string.split(',');
  const country = words[2].trim();

  return country;
};

export default locationCountry;
