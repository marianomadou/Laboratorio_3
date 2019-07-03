var vec=[4,3,6,5,7,9,11,8,10];

var personas=[
    {nombre:"Juan",
    edad:20},
    {nombre:"Lucia",
    edad:23},
    {nombre:"Pedro",
    edad:30}
];

var pares=[];

for (var i=0; i<vec.length; i++) {
    if(!(vec[i]%2)){
        pares.push(vec[i]);
    }
        
}
//console.log(pares);

var impares= vec.filter(function(elemento){
    return elemento %2 !=0;
});

var pares= vec.filter(function(elemento){
    return elemento %2 ==0;
});

console.log(pares);
console.log(impares);

console.log(personas.filter(function(p){

    return p.nombre==="Juan";
}))