//fetch all movies

const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => {
      if(!response.ok){
        //code for error handling goes here
      } else {
        return response.json()
      }
    })
    .catch(error => {
      //code for no repsonse reutned goes here -- ideally do not use alert BUT code below would technically work
      //error => alert(`${error.message}`)
    })
};

//fetch specific movie detail

const getIndividualMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then((response) => {
    if(!response.ok){
      //code for error handling goes here
    } else {
      return response.json()
    }
  })
  .catch(error => {
    //code for no repsonse reutned goes here -- ideally do not use alert BUT code below would technically work
    //error => alert(`${error.message}`)
  })
};

const getData = (url) => {
  return fetch(url)
  .then((response) => {
    if(!response.ok){
      //code for error handling goes here
    } else {
      return response.json()
    }
  })
  .catch(error => {
    //code for no repsonse reutned goes here -- ideally do not use alert BUT code below would technically work
    //error => alert(`${error.message}`)
  })
}

export {
  getData
};

