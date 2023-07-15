Cypress.Commands.add('assertMovieCard', ($card, movie) => {
  const roundedRating = Math.round(movie.average_rating * 10) / 10;

  cy.wrap($card).within(() => {
    cy.get('h2').should('have.text', movie.title);
    cy.get('.movie-poster').should('have.attr', 'src', movie.poster_path).and('have.attr', 'alt', movie.title);
    cy.get('p').eq(0).should('have.text', movie.release_date.split('-')[0]);
    cy.get('p').eq(1).should('have.text', `Rating: ${roundedRating}/10`);
  });
});


