/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list 20 heroes', () => {
    cy.get('.hero-card').should('have.length', 20)
  })
})