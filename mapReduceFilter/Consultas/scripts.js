//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Female';
    })
    .map(function(user){
        return user.nombre;
    });
}

//console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Male';
    })
    .map(function(user){
        return user.email;
    });
}

//console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
    return usuarios
    .filter(function (user) {
        return user.edad > 17;
    })
    .map(function(user){
        return { "nombre": user.nombre, "apellido": user.apellido, "edad": user.edad };
    });
    
}
//console.log(soluciones.usuariosMayores(data, 40));

  // Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios){
    viejito = usuarios.reduce((max,actual)=>
    {
        if(actual.edad>max.edad)
        {
            max = actual;
        }
        return max;
    })
    var array = [viejito];
    return array.map((user)=>
    {
        return {"Nombre":user.nombre,"Edad":user.edad};
});
}

//console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){
    var auxEdad = 0;
    var edades = usuarios.map((user)=>
    {
        return user.edad;
    });
    var auxEdad = edades.reduce((previo,actual)=>
    {
         return previo + actual;
    });
return (auxEdad /edades.length).toFixed(2);
}

//console.log("Promedio de edad de usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
   
    var auxProm = 0;
    var edadesTotales = usuarios.filter((user)=>
    {
        return (user.genero == "Male");
    })
    .map((user)=>
    {
        return user.edad;
    })
    .reduce((previo,actual)=>
    {
        auxProm++;
        return previo+actual;
    })
 return (edadesTotales/auxProm).toFixed(2);
}

//console.log("Promedio de edad de varones: " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){

    var auxProm = 0;
    var edadesTotales = usuarios.filter((user)=>
    {
        return (user.genero == "Female");
    })
    .map((user)=>
    {
        return user.edad;
    })
    .reduce((previo,actual)=>
    {
        auxProm++;
        return previo+actual;
    })
 return (edadesTotales/auxProm).toFixed(2);
}

console.log("Promedio de edad de mujeres: " + soluciones.promedioMujeres(data));