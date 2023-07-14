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


describe('main page/all movies view', () => {

  it('displays a server-side error message', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('getMovies');
    cy.visit('http://localhost:3000/');

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(500);
    });

    cy.contains('.error-message', 'Oops, the server is temporarily down. Please try again later.')
      .should('be.visible');

    cy.get('.movie-card').should('not.exist');
  });

  it('displays a client-side error message', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      body: 'Not Found'
    }).as('getMovies');

    cy.visit('http://localhost:3000/');

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(404);
    });

    cy.contains('.error-message', 'Oops! Something went wrong on your end. Please check your network connection and try again.')
      .should('be.visible');

    cy.get('.movie-card').should('not.exist');
  });

});

