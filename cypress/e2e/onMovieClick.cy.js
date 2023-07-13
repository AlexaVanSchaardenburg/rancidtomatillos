import { movie1Data, movie2Data } from '../fixtures/movieData';
import moviesData from "../fixtures/moviesData";

describe('Test that user can click on a movie to view more details', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    });

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      body: movie1Data
    });

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      body: movie2Data
    });

    cy.visit('http://localhost:3000/')
  });

  it('Should show the user movie details', () => {

    cy.get('.movie-card').first().click()
    cy.get('.details-page').should('be.visible');
    cy.get('.movie-card').should('not.exist');
    cy.get('img.logo').should('be.visible')
    cy.get('.home-icon').should('be.visible')
    cy.get('img.backdrop-image').should('be.visible')
    cy.get('img.cover-image').should('be.visible')
    cy.get('.movie-overview-section').contains('h1', 'Black Adam')
    cy.get('.movie-overview-section').contains('p', 'The world needed a hero. It got Black Adam.')
    cy.get('.movie-overview-section').contains('p', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.get('.date-and-runtime').contains('p', '2022')
    cy.get('.date-and-runtime').contains('p', '125 min')
    cy.get('.movie-rating-section').contains('h3', 'Rating: 4/10')
    cy.get('.movie-rating-section').contains('p', 'Movie Budget:')
    cy.get('.movie-rating-section').contains('p', '$200000000')
    cy.get('.movie-rating-section').contains('p', 'Movie Revenue:')
    cy.get('.movie-rating-section').contains('p', '$384571691')
  });

  it("should show the user details for a diifferent movie", () => {
        cy.get('.movie-card').last().click()
        cy.get('.details-page').should('be.visible');
        cy.get('.movie-card').should('not.exist');
        cy.get('img.logo').should('be.visible')
        cy.get('.home-icon').should('be.visible')
        cy.get('img.backdrop-image').should('be.visible')
        cy.get('img.cover-image').should('be.visible')
        cy.get('.movie-overview-section').contains('h1', 'R.I.P.D. 2: Rise of the Damned')
        cy.get('.movie-overview-section').contains('p', 'Meet the new law of the Afterlife.')
        cy.get('.movie-overview-section').contains('p', 'When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.')
        cy.get('.date-and-runtime').contains('p', '2022')
        cy.get('.date-and-runtime').contains('p', '102 min')
        cy.get('.movie-rating-section').contains('h3', 'Rating: 7/10')
        cy.get('.movie-rating-section').contains('p', 'Movie Budget:')
        cy.get('.movie-rating-section').contains('p', '$130')
        cy.get('.movie-rating-section').contains('p', 'Movie Revenue:')
        cy.get('.movie-rating-section').contains('p', '$78324220')
  });
});

describe('Displays error messaging', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    });

    cy.visit('http://localhost:3000/')
  });

  it('Should display a 500 level error message for the user', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
      body: 'Not Found'
    }).as('getMovies');


    cy.get('.movie-card').first().click();

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(500);
    });

    cy.contains('.error-message', 'Oops, the server is temporarily down. Please try again later.')
      .should('be.visible');
  });

  it('Should display a 400 level error message for the user', () => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 404,
      body: 'Not Found'
    }).as('getMovies');

    cy.get('.movie-card').first().click();

    cy.wait('@getMovies').then((interception) => {
      expect(interception.response.statusCode).to.equal(404);
    });

    cy.contains('.error-message', 'Oops! Something went wrong on your end. Please check your network connection and try again.')
      .should('be.visible');
  });
});