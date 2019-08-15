"use strict";
var lista;
$(function () {
    cargarSexo();
    calcularPromedio();
    calcularGenderMix();
    personaMasVieja();
    armarEncabezado(null);
    //mapearCampos(lista);
    $('#cmbFiltro').change(function () {
        filtrarPersonas(this.value);
        calcularPromedio();
        calcularGenderMix();
        personaMasVieja();
        //mapearCampos(lista);
    });
    $("#chkBoxes").change(function () {
        mapearCampos(lista);
        //alert("update");
    });
});
function cargarSexo() {
    var todos = document.createElement("option");
    var diputado = document.createElement("option");
    var senador = document.createElement("option");
    todos.appendChild(document.createTextNode("Todos"));
    diputado.appendChild(document.createTextNode("Diputado"));
    senador.appendChild(document.createTextNode("Senador"));
    document.getElementById("cmbFiltro").appendChild(todos);
    document.getElementById("cmbFiltro").appendChild(diputado);
    document.getElementById("cmbFiltro").appendChild(senador);
}
function filtrarPersonas(tipo) {
    var personasFiltradas;
    if (lista != undefined) {
        if (tipo != "Todos") {
            personasFiltradas = lista
                .filter(function (persona) {
                return persona.cargo === tipo;
            });
            actualizarTabla(personasFiltradas);
        }
        else {
            actualizarTabla(lista);
        }
    }
}
//Filtra por nombre la grilla.
function FiltrarNombre() {
    $(document).ready(function () {
        $("#txtFiltroNombre").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#bodyTabla").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });
}
function calcularPromedio() {
    var promedio = 0;
    var cantidadTotal;
    if (lista != undefined) {
        cantidadTotal = lista.filter(function (persona) {
            if ($("#cmbFiltro").val() === "Todos") {
                return persona;
            }
            else {
                return persona.cargo === $("#cmbFiltro").val();
            }
        });
        promedio = lista.filter(function (persona) {
            if ($("#cmbFiltro").val() === "Todos")
                return persona.cargo;
            else
                return persona.cargo === $("#cmbFiltro").val();
        })
            .map(function (users) {
            return parseInt(users.edad);
        })
            .reduce(function (previo, actual) {
            return previo + actual;
        }, 0) / cantidadTotal.length;
    }
    $("#txtPromedio").val((promedio).toFixed(1));
}
function calcularGenderMix() {
    var porcentaje = 0;
    var cantidadTotalMasculino;
    var cantidadSeleccionado;
    if (lista != undefined) {
        cantidadSeleccionado = lista.filter(function (persona) {
            if ($("#cmbFiltro").val() === "Todos")
                return persona;
            else
                return persona.cargo === $("#cmbFiltro").val();
        });
        cantidadTotalMasculino = lista.filter(function (persona) {
            if ($("#cmbFiltro").val() === "Todos")
                return persona;
            else
                return persona.cargo === $("#cmbFiltro").val();
        }).filter(function (persona) {
            if (persona.sexo === "Femenino")
                return persona;
        });
        porcentaje = ((cantidadTotalMasculino.length * 100) / cantidadSeleccionado.length);
    }
    $("#txtGenderMix").val((porcentaje).toFixed(0) + " %");
}
function personaMasVieja() {
    var list = JSON.parse(localStorage.Personas);
    var listadoFiltrado = obtenerPersonasFiltradas(list);
    var maximo = 0;
    var maximoNombre = "";
    if (list != undefined) {
        listadoFiltrado.reduce(function (previo, actual) {
            if (parseInt(actual.edad) > maximo) {
                maximo = actual.edad;
                maximoNombre = actual.nombre;
            }
            return actual.nombre;
        }, 0);
        $('#txtViejo').val(maximoNombre);
    }
}
function obtenerPersonasFiltradas() {
    var personas = lista;
    var listadoFiltrado = personas;
    if ($('#cmbFiltro').val() == "Todos") {
        return listadoFiltrado = lista;
    }
    else if ($('#cmbFiltro').val() == "Diputado") {
        listadoFiltrado = listadoFiltrado.filter(function (persona) {
            return (persona.cargo == "Diputado");
        });
    }
    else if ($('#cmbFiltro').val() == "Senador") {
        listadoFiltrado = listadoFiltrado.filter(function (persona) {
            return (persona.cargo == "Senador");
        });
    }
    return listadoFiltrado;
}
function armarEncabezado(lista) {
    $('#theadTabla').empty();
    var list;
    if (lista == null) {
        list = JSON.parse(localStorage.Personas);
    }
    else {
        list = lista;
    }
    var tr = document.createElement('tr');
    for (var key in list[0]) {
        var th = document.createElement('th');
        var texto = document.createTextNode(key);
        th.appendChild(texto);
        tr.appendChild(th);
    }
    document.getElementById('theadTabla').appendChild(tr);
}
//hacer el mapeo ACÁ y la concha de la lora
function mapearCampos(lista) {
    var array2 = {};
    array2.nombre = $('#chknombre')[0].checked;
    array2.apellido = $('#chkapellido')[0].checked;
    array2.edad = $('#chkedad')[0].checked;
    array2.email = $('#chkemail')[0].checked;
    array2.sexo = $('#chksexo')[0].checked;
    array2.id = $('#chkid')[0].checked;
    array2.cargo = $('#chkcargo')[0].checked;
    console.log("array2" + array2.chkApellido);
    var listaFiltrada = lista.map(function (valor) {
        var nuevoArray = {};
        for (var key in valor) {
            if (array2[key] == true) {
                console.log("key " + key);
                console.log("array2[key] " + array2[key]);
                nuevoArray[key] = valor[key];
            }
        }
        return nuevoArray;
    });
    armarEncabezado(listaFiltrada);
    actualizarTabla(listaFiltrada);
}
