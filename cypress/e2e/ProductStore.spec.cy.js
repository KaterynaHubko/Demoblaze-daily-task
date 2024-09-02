/// <reference types='cypress' />


describe('Demoblaze Daily-task', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should register successfully', () => {
  
     const randomNumber = Math.random().toString().slice(2);
     const userName = `Wisna_${randomNumber}`
  
     cy.get('#signin2').click();
     cy.get('#sign-username').type(userName);
     cy.get('#sign-password').type('crazyfrog');
     cy.get('button').contains('Sign up').click();
  
     cy.on('window:alert',(text) =>{
      expect(text).to.contains('Sign up successful');
  
     });
    });

    it('should log in successfully', () => {
       
        const randomNumber = Math.random().toString().slice(2);
        const userName = `Wisna_${randomNumber}`;
    
        cy.get('#login2').click();
        cy.get('#loginusername').type(userName);
        cy.get('#loginpassword').type('crazyfrog');
        cy.get('button').contains('Log in').click();
      });


    it('should add Samsung Galaxy s6 to the cart', () => {
        
        cy.contains('Phones').click();
        cy.contains('Samsung galaxy s6').click();
        cy.contains('Add to cart').click();
    
        
        cy.on('window:alert', (text) => {
          expect(text).to.contains('Product added');
        });
    
       
        cy.get('#cartur').click();
        cy.contains('Samsung galaxy s6').should('exist');
      });
    });
