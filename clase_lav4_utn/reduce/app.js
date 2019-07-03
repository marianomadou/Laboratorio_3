var vec=[5,4,3,6,7,3,2];



/*
var contador=0;

for(var i=0;vec.length; i++){
    contador += vec[i];
}

console.log("Total: " + contador);


var x= vec.reduce(function(previo,actual,indice){
    console.log("previo: "+ previo + " - actual: "+ actual +" - indice: "+ indice )
    return(previo+actual);
},0);

console.log(x);
*/

var personas=[
    {nombre:"Juan",
    edad:20},
    {nombre:"Lucia",
    edad:23},
    {nombre:"Pedro",
    edad:30}
];

var totalEdad= personas.reduce(
    function(previo, actual){
        previo.total+=actual.edad;
        return previo;
},{total:0});

console.log(totalEdad);