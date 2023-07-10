describe('template spec', () => {

  //intercept the fetch call for all movies
  //intercept the fetch call for a specific movie

  it('Should show the user movie detials', () => {
    cy.visit('http://localhost:3000/')
      // click the first movie -- put the movie card id as the get parameter
    // cy.get().click()
      //check that the nav is there and has the title image and the home button
    cy.get('.nav-container').contains('img')
      //check that there is a backgorund photo
      //check that there is the cover photo, title, year, runtime, tagline, description, rating, budget, budget number, revenue, revenue number
  })
})