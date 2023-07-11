import { movie1Data, movie2Data } from '../fixtures/movieData';
import moviesData from "../fixtures/moviesData";

describe('Test that user can click on a movie to view more details', () => {

  //would be interesting to see if I could write a helper function that would write the intercept based off of the card that was clicked - should in theory work because the card that is clicked 
  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: moviesData
    });

    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
    //   statusCode: 200,
    //   body: movie1Data
    // });

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      body: movie2Data
    });

    cy.visit('http://localhost:3000/')
  });

  it('Should show the user movie details', () => {
    //clicks on the first movie in the array - Black Adam
    cy.get('.movie-card').first().click()

    //checks that the details page is displayind the movie cards are not visible
    cy.get('.details-page').should('be.visible');
    cy.get('.movie-card').should('not.exist');

    //checks that the nav is still visible and the home button is displayed
    cy.get('img.logo').should('be.visible')
    cy.get('.home-icon').should('be.visible')

    //checks if there is a background image and cover image
    // cy.get('.img.background-image')
      // .contains('img') for the background photo
    // cy.get('.info')
      // .contains('img')
    
    //checks if the title, tagline, description, release year, runtime, rating, budget header, budget total, revenue header and revenue total are all in the page
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
        //clicks on the first movie in the array - Black Adam
        cy.get('.movie-card').last().click()

        //checks that the details page is displayind the movie cards are not visible
        cy.get('.details-page').should('be.visible');
        cy.get('.movie-card').should('not.exist');
    
        //checks that the nav is still visible and the home button is displayed
        cy.get('img.logo').should('be.visible')
        cy.get('.home-icon').should('be.visible')
    
        //checks if there is a background image and cover image
        // cy.get('.img.background-image')
          // .contains('img') for the background photo
        // cy.get('.info')
          // .contains('img')
        
        //checks if the title, tagline, description, release year, runtime, rating, budget header, budget total, revenue header and revenue total are all in the page
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

  it('Should display a 500 level error message for the user', () => {
    //intercpet with 500 here
    //click on the first movie card
    //
  });
  it('Should display a 400 level error message for the user', () => {

  });
});

//TO DO TO WRITE TESTING
  //Set up mock data file
    //figure out how to use Postman to view the data
    //set up mock data in fixtures files
  //Set up intercepts for both fetch calls
    //use mock data from 
    //ffigure out how to use fixtures
  //Write test to check that all the info I expect to be there is there for movie #1
  //Write same test for another movie???
  //Write sad path to test that I get the expected errors if the fetch fails 
    //one test for 400, one for 500