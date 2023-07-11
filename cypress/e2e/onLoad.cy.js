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

  // test that the movieCards contain the right information -- using custom command (support file)

  it('displays the correct information in movie cards', () => {
    cy.get('.movie-card').each(($card, index) => {
      const movie = moviesData.movies[index];
      cy.assertMovieCard($card, movie);
    });
  })
});


describe('main page/all movies view', () => {

  // test that when a server-side (5XX) error is thrown, the user is shown a server-side error message & nothing else

  it('displays a server-side error message', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getMovies');
    cy.visit('http://localhost:3000/');

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(500);
    });

    // verify the correct error message is displayed

    cy.contains('.error-message', 'Oops, the server is temporarily down. Please try again later.')
      .should('be.visible');

      // verify that the movie-cards are no longer showing

    cy.get('.movie-card').should('not.exist');
  });

  // test that when there is a client-side error (4XX), the user is shown a different message

  it('displays a client-side error message', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      body: 'Not Found'
    }).as('getMovies');

    cy.visit('http://localhost:3000/');

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(404);
    });

    // verify the correct error message is displayed
    
    cy.contains('.error-message', 'Oops! Something went wrong on your end. Please check your network connection and try again.')
      .should('be.visible');

      // verify that the movie-cards are no longer showing

    cy.get('.movie-card').should('not.exist');
  });

});

