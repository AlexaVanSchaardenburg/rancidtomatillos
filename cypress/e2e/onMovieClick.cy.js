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
    cy.get('.movie-card').first().click()
  });

  it('Should show the user movie details', () => {
    cy.get('nav')
      // .contains('img')
      // .contains('button')
    cy.get('.details-page')
      // .contains('img') for the background photo
    cy.get('.info')
      // .contains('img')
    cy.get('.movie-overview-section')
      .contains('h1', 'Black Adam')
      // .contains('p', 'The world needed a hero. It got Black Adam.')
      // .contains('p', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.get('.date-and-runtime')
      .contains('p', '2022')
      // .contains('p', '125 min')
    cy.get('.movie-rating-section')
      .contains('h3', 'Rating: 4/10')
      // .contains('p', 'Movie Budget:')
      // .contains('p', '$200000000')
      // .contains('p', 'Movie Revenue:')
      // .contains('p', '$384571691')
      /*check that there is the: 
      background photo, 
      cover photo, 
      title✅, 
      year✅, 
      runtime✅, 
      tagline✅, 
      description✅, 
      rating✅, 
      budget✅, 
      budget number✅, 
      revenue✅, 
      revenue number✅*/
  });

  it("should show the user details for a diifferent movie", () => {
    
  });

  it("Should display an informational error message if the fetch call fails (500)", () => {
    
  });

  it("Should display an informational error message if the client fails to make the fetch call (400)", () => {
    
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