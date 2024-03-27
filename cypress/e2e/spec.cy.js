describe('Pokemon Testing', () => {
    it('First Test', () => {

        //Get a list of pokemon
        cy.GetListOfPokemon().then((pokemonList) => {
            const firstPokemonName = pokemonList[0].name;

            // Log the name of the first Pokemon
            cy.log(`Name of the first Pokemon: ${firstPokemonName}`);

            //From the list of results from point 1, find the first pokemon and obtain the name of the first pokemon in the list
            cy.GetFirstPokemonFromList(firstPokemonName).then((pokemonDetails) => {
                expect(pokemonDetails.name).to.eq(firstPokemonName);
                // Assert the species name of the Pokemon
                expect(pokemonDetails.species.name).to.eq(firstPokemonName);
            })
        })

    })



})