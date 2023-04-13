var cantorBanda1 = {
    nome: "marvin gaye",
    LançamentoDa1musica: 1961,
    melhoresMusicas: [ "lets get it on", "sexual healing", "mercy mercy me" ],
    informaçõesDoIntegrante: [ "nasceu em 2 de abril de 1939"," morreu no ano de 1984"],
    estiloMusical: "soul e RB"
}

var cantorBanda2 = {
    nome: " kenderick lamar",
    LançamentoDa1musica: 2011,
    melhoresMusicas:[ "humble", "father time","DNA","alright"],
    informaçõesDoIntegrante: ["kendrick lamar duckworth","EUA","35 anos"],
    estiloMusical:["hiphop", " jazz","rap"]
}

var cantorBanda3 = {
    nome:"kanye west",
    LançamentoDa1musica:2002,
    melhoresMusicas:["father stretch my hands", " ghost town ","24"," violent crimes"],
    informaçõesDoIntegrante:["kanye omari west","EUA","45,"],
    estiloMusical : "hip hop"
}
var Database = []

    Database.push(cantorBanda1)
    Database.push(cantorBanda2)
    Database.push(cantorBanda3)
    console.log(Database)

    Database.sort()
    console.log(Database)
    Database.pop()
    console.log(Database)

