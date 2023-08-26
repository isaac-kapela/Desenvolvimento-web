var artista1 = {
    nome: "H.E.R",
    lancamentoPrimeiroCD: 2016,
    melhoresMusicas:["Every King of Way", "Best Part", "Focus", "Find a Way"],
    informacaoIntegrante: [ "Gabriella Wilson", "Eua", "25 anos"],
    estilo: "R&B"
}

var artista2 = {
    nome: "Bruno Mars",
    lancamentoPrimeiroCD: 2010,
    melhoresMusicas:[ "Locked Out of Heaven", "24K Magic", "Treasure", "Leave the Door Open"],
    informacaoIntegrante: [ "Peter Gene Hernandez", "Eua","37 anos"],
    estilo: "R&B, pop, hip hop"

}

var artista3 = {
    nome: "SZA",
    lancamentoPrimeiroCD: 2017,
    melhoresMusicas:[ "Pretty Little Birds", "Normal girl", "Good Days", "Special"],
    informacaoIntegrante: [ "Solána Imani Rowe","Eua","32 anos"],
    estilo: "R&B"
}

var database = []

database.push(artista1)
database.push(artista2)
database.push(artista3)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)