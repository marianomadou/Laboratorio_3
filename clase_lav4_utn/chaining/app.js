var personas=[
    {nombre:"Juan",
    edad:20},
    {nombre:"Lucia",
    edad:23},
    {nombre:"Pedro",
    edad:30}
];

var menoresTreinta= personas.filter(function(elemento){
    return elemento.edad <30;
})
.map(function(persona){
    return persona.nombre;
})
.reduce(function(previo, actual)
{
    return prev =+actual.length;
})
;   

console.log(menoresTreinta);


