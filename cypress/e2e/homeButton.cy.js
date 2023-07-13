import moviesData from "../fixtures/moviesData";
import { movie1Data } from '../fixtures/movieData.js'

describe('Returning to the main page', () => {
  beforeEach(() => {
    // Intercept the API requests as needed
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      body: moviesData
    });
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
    //   statusCode: 200,
    //   body: movie1Data
    // });
    cy.visit('http://localhost:3000/');
  });

  it('should navigate back to the main page when clicking the home button', () => {
    // Click on a movie card to go to the movie details view
    cy.get('.movie-card').first().click();

    /// should i use an .each() loop here instead of just testing that the first card works??

    // Verify that the movie details view is displayed
    cy.get('.details-page').should('be.visible');

    // Click the home button to return to the main page
    cy.get('.home-icon').click();

    // Verify that the movie details view is no longer visible
    cy.get('.details-page').should('not.exist');

    // Verify that the main page with movie cards is displayed again
    cy.get('.movie-card').should('have.length', 3);
  });
});
