import moviesData from "../fixtures/moviesData";

describe('main page/all movies view', () => {
  // beforeEach(() => {

  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
  //     statusCode: 200,
  //     body: moviesData
  //   }).as('getMovies')
  //   cy.visit('http://localhost:3000/');
  // });

  it('displays the app logo on page load', () => {

    cy.visit('http://localhost:3000/');

    cy.get('img.logo').should('be.visible');
  });

  it('displays the movie collection', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    }).as('getMovies')
    cy.visit('http://localhost:3000/');

    cy.get('.movie-card').should('have.length', moviesData.movies.length);
  });

  it('displays the correct information in movie cards', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    }).as('getMovies')

    cy.visit('http://localhost:3000/');
    
    cy.get('.movie-card').each(($card, index) => {
      const movie = moviesData.movies[index];
      cy.assertMovieCard($card, movie);
    });
  })
});