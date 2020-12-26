const apiUrl = `http://www.omdbapi.com/?apikey=cff50ade&`;

const apiTrigger = async query => {
  query = query.toLowerCase(); // because the api accept lower case queries

  // Replace spaces preceeded by a word or a digit by + character
  // as spaces are not allowed in a URL
  query = query.replace(/(?<=\w)\s/g, '+');

  // If query is of pattern ttXXXXXXX, where X is an integer, it's an IMDb id
  const isId = /^tt[0-9]{7}$/.test(query);
  let apiQuery = '';

  // If query is an IMDb id append apiUrl with i parameter (for IMDb ids)
  // else append appiUrl with t parameter (for movie titles)
  apiQuery = isId ? `i=${query}` : `t=${query}`;

  const response = await fetch(apiUrl + apiQuery);

  const data = await response.json();

  return data;
}

export default apiTrigger;

