
const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error('Oops, the server is temporarily down. Please try again later.');
        } else {
          throw new Error('Oops! Something went wrong on your end. Please check your network connection and try again.');
        }
      }
      return response.json();
    });
};

export { getData };




