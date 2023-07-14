import moviesData from "../fixtures/moviesData";
import { movie1Data } from '../fixtures/movieData.js'

describe('Returning to the main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      body: moviesData
    });

    cy.visit('http://localhost:3000/');
  });

  it('should navigate back to the main page when clicking the home button', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: movie1Data
    });

    cy.get('.movie-card').first().click();

    cy.get('.details-page').should('be.visible');

    cy.get('.home-icon').click();

    cy.get('.details-page').should('not.exist');

    cy.get('.movie-card').should('have.length', 3);
  });
});
