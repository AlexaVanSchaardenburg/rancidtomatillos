import moviesData from "../fixtures/moviesData";

describe('main page/all movies view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: moviesData
    });
    cy.visit('/');
  });

  // test that the logo is shown on page load

  // test that i see the movie collection

  // test that the movieCards contain the right information
});


