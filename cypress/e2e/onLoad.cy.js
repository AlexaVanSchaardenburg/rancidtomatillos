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

  // test that the movieCards contain the right information
});


