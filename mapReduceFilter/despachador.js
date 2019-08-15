function traerPersonas() {
    var personasString = localStorage.getItem("Personas");
    personasJson = JSON.parse(personasString);

    if (personasJson != null) {
        lista = personasJson;
        actualizarTabla(lista);
    }
}

function guardarPersona(persona) {
    if (lista == undefined)
        persona.id = 1;
    else
        persona.id = getID(lista);

    var personasString = localStorage.getItem("Personas");
    var personasJson = JSON.parse(personasString);

    if (personasJson == null) {
        personasJson = [JSON.parse(persona.toJSON())];
        localStorage.setItem("Personas", JSON.stringify(personasJson));
    }
    else {
        personasJson.push(JSON.parse(persona.toJSON()));
        localStorage.setItem("Personas", JSON.stringify(personasJson));
    }

    lista = personasJson;
    actualizarTabla(lista);
}

function eliminarPersona(persona) {
    var personasString = localStorage.getItem("Personas");
    var personasJson = JSON.parse(personasString);

    for (var i = 0; i < personasJson.length; i++) {
        if (personasJson[i].id == persona.id) {
            personasJson.splice(i, 1);
            localStorage.setItem("Personas", JSON.stringify(personasJson));
            break;
        }
    }

    lista = personasJson;
    actualizarTabla(lista);
}

function modificarPersona(persona) {
    var personasString = localStorage.getItem("Personas");
    var personasJson = JSON.parse(personasString);

    for (var i = 0; i < personasJson.length; i++) {
        if (personasJson[i].id == persona.id) {
            personasJson[i].nombre = persona.nombre;
            personasJson[i].apellido = persona.apellido;
            personasJson[i].edad = persona.edad;
            personasJson[i].email = persona.email;
            personasJson[i].sexo = persona.sexo;
            personasJson[i].cargo = persona.cargo;
            localStorage.setItem("Personas", JSON.stringify(personasJson));
            break;
        }
    }

    lista = personasJson;
    actualizarTabla(lista);
}

function getID(array) {
    if (array.length == 1) {
        return 2;
    }
    else {
        var maxIndex = array.reduce(function (prev, curr, index) {
            if (prev.id > curr.id)
                return prev.id;
            else
                return curr.id;
        });
        return maxIndex + 1;
    }
}