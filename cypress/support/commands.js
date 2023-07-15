// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('assertMovieCard', ($card, movie) => {
  const roundedRating = Math.round(movie.average_rating * 10) / 10;

  cy.wrap($card).within(() => {
    cy.get('h2').should('have.text', movie.title);
    cy.get('.movie-poster').should('have.attr', 'src', movie.poster_path).and('have.attr', 'alt', movie.title);
    cy.get('p').eq(0).should('have.text', `✩ ${roundedRating}/10 stars ✩`);
    cy.get('p').eq(1).should('have.text', movie.release_date.split('-')[0]);
  });
});



