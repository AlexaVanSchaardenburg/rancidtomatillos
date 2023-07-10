import moviesData from "../fixtures/moviesData";

// HAPPY PATH //

describe('main page/all movies view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    });
    cy.visit('http://localhost:3000/');
  });

  // test that the logo is shown on page load

  it('displays the app logo on page load', () => {
    cy.get('img.logo').should('be.visible');
  });
  
  // test that i see the movie collection

  it('displays the movie collection', () => {
    cy.get('.movie-card').should('have.length', moviesData.movies.length);
  });

  // test that the movieCards contain the right information

it('displays the correct information in movie cards', () => {
  cy.get('.movie-card').each(($card, index) => {
    const movie = moviesData.movies[index];
    cy.assertMovieCard($card, movie);
  });
});
  
  


});


