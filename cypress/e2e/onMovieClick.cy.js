import { movie1Data, movie2Data } from '../fixtures/movieData';
import moviesData from "../fixtures/moviesData";

describe('Test that user can click on a movie to view more details', () => {

  //would be interesting to see if I could write a helper function that would write the intercept based off of the card that was clicked - should in theory work because the card that is clicked 
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
      // click the first movie -- put the movie card id as the get parameter
    cy.get().click()
      //check that the nav is there and has the title image and the home button
    cy.get('img.logo').should('be.visibile')
      //check that there is a backgorund photo
      //check that there is the cover photo, title, year, runtime, tagline, description, rating, budget, budget number, revenue, revenue number
  })
  it("should show the user details for a diifferent movie", () => {
    
  })
  it("Should display an informational error message if the fetch call fails (500)", () => {
    
  })
  it("Should display an informational error message if the client fails to make the fetch call (400)", () => {
    
  })
})

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