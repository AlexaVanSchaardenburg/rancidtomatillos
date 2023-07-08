//on page load fetch all movies and assign those movies to a variables that we can map through to display the movies - potentially use async await?
  //api calls live in api folder and are exported to needed components
  // promise.all goes in the component -- to use the data returned in the fetch once it is resolved from the promise. 


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

export {
  getAllMovies,
  getIndividualMovie
};

