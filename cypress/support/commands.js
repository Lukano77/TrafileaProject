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

Cypress.Commands.add('GetListOfPokemon',() =>{
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlApi}/v2/pokemon/`
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.results).to.not.be.empty;
            return response.body.results;
    })
})  

Cypress.Commands.add('GetFirstPokemonFromList',(pokemonName) =>{
    cy.request({
        method: "GET",
        url: `${Cypress.env().baseUrlApi}/v2/pokemon/${pokemonName}`
    }).then((response)=>{
        expect(response.status).to.eq(200)
        return response.body;
        })
    })