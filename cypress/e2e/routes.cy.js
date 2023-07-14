import moviesData from "../fixtures/moviesData";
import { movie1Data, movie2Data } from "../fixtures/movieData";

describe('Check routes for navigation to MovieDetails page via MovieCard click', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 200,
        body: moviesData
      }).as('getMovies');

      cy.visit('http://localhost:3000/');

      cy.wait('@getMovies');
    })

  it('should navigate to the correct route path when the 1st card is clicked', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: movie1Data
    });

    cy.get('.movie-card').first().click();

    cy.url().should('eq', 'http://localhost:3000/436270');
  })

  it('should navigate to the correct route path when the last card is clicked', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      body: movie2Data
    });

    cy.get('.movie-card').last().click();

    cy.url().should('eq', 'http://localhost:3000/1013860');
  });
});

describe('Check route for navigation from Details page to home page via the home button', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    }).as('getMovies');

    cy.visit('http://localhost:3000/436270');

    cy.wait('@getMovies');
  })

  it('should navigate to the correct route when the home button is clicked', () => {

    cy.get('#button').click();

    cy.url().should('eq', 'http://localhost:3000/')
  })
});

