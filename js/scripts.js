let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['Grass', 'Poison']
    },
    {
        name: 'Charmander',
        height: 0.6,
        type: ['Fire']
    },
    {
        name: 'Charzard',
        height: 1.7,
        type: ['fire','Flying']
    },
    {
        name: 'Squirtle',
        height: 0.5,
        type: ['Water']
    },
    {
        name: 'Pikachu',
        height: 0.4,
        type: ['electric']
    }
]

for (let i = 0; i <pokemonList.length; i++){
    if (pokemonList[i].height >=1){
        document.write(pokemonList[i].name + ' ' + '(Height:' + pokemonList[i].height + ')' + ' - Wow, that\'s big!' + '<br/>');
    }else if (pokemonList[i].height <1 && pokemonList[i].height >=.5){
        document.write(pokemonList[i].name + ' '  + '(Height:' + pokemonList[i].height + ')' +  ' - This is an average size.' + '<br/>');
    }else {
        document.write(pokemonList[i].name + ' ' + '(Height:' + pokemonList[i].height + ')' + ' - This is very small!' + '<br/>');
    }
}