describe('Testando as funcionalidades da agenda de contatos', () => {
  
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });


  it('Deve adicionar um novo contato', () => {

    cy.get('[type="text"]').type('Anna Claudia');
    cy.get('[type="email"]').type('anna@gmail.com');
    cy.get('[type="tel"]').type('123');
    cy.get('.adicionar').click();

    cy.contains('Anna Claudia');
    cy.contains('anna@gmail.com');
    cy.contains('123');
  });
  
  it('Deve editar um contato', () => {

    cy.contains('Anna Claudia').parents('.contato').find('.edit').click();
    cy.get('[type="text"]').clear().type('Anna Claudia Barros');
    cy.get('[type="email"]').clear().type('annaclaudia@gmail.com');
    cy.get('[type="tel"]').clear().type('12345');
    cy.get('.alterar').click();

    cy.contains('Anna Claudia Barros');
    cy.contains('annaclaudia@gmail.com');
    cy.contains('12345');

  });

  it('Deve remover um contato existente', () => {

    cy.get('[type="text"]').type('Luluzinha');
    cy.get('[type="email"]').type('remover@gmail.com');
    cy.get('[type="tel"]').type('123456');
    cy.get('.adicionar').click();


    cy.contains('Luluzinha').parents('.contato').find('.delete').click();

    cy.contains('Luluzinha').should('not.exist');
  });
  


})