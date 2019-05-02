describe('test', () => {
    it('test regression', () => {
        cy.visit('http://127.0.0.1:8080');
        cy.get('.container');
        cy.percySnapshot('first snapshot');
    });
});
