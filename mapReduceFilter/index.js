var btnAlta;
var divFrm;
var frmAlta;
var divInfo;
var btnCancelar;

var lista;

window.onload = asignarEventos;

function asignarEventos() {

    $("#divFrm").hide();
    $("#divId").hide();

    //CLIC EN BOTON AGREGAR
    $("#btnAgregar").click(function () {
        mostrarFormulario();
    });
    //CLIC EN BOTON CANCELAR 
    $("#btnCancelar").click(function () {
            $("#divFrm").animate({  borderSpacing: -10 }, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate('+now+'deg)'); 
                  $(this).css('-moz-transform','rotate('+now+'deg)');
                  $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'slow'
            },'linear');
            $("#divFrm").hide("slow");
            $("#divId").fadeOut(1250, "swing");
    });

    //capturo el evento submit del form
    $("#formularioAgregar").submit(function (event) {
        event.preventDefault();//mato el evento   

        if ($(document.activeElement).val() == $("#btnDarDeAlta").val()) {//pregunto cual boton envio el submit
            //CLIC EN BOTON DAR DE ALTA
            altaPersona();
            $("#divFrm").hide("slow");//oculto el form
        }
        else {
            //CLIC EN BOTON MODIFICAR 
            if (confirm("Confirma modificar a " + $("#txtNombre").val() + " " + $("#txtApellido").val() + "?")) {
                modificacionPersona();
                $("#divFrm").animate({height: 'toggle'});//oculto el form
                $("#divId").hide();
            }
        }
    });

    //CLIC EN BOTON ELIMINAR
    $("#btnEliminar").click(function () {
        var nombre=$("#txtNombre").val();
        if (confirm("Confirma eliminar a " + $("#txtNombre").val() + "?")) {
            eliminacionPersona();
            $("#divFrm").fadeOut(1000, "swing" , function(){alert("el usuario " +nombre+ " ha sido eliminado");
});//oculto el form
            $("#divId").hide("slow");
        }
    });

    //CLIC EN BOTON LIMPIARLOCALSTORAGE
    $("#btnLimpiarLocalStorage").click(function () {
        limpiarLocalStorage();
    });

    //################################################################

    setSpinner();

    //traer las personas y mostrar en la tabla
    traerPersonas();

}

function darAlta(e) {

    var data = e.target.parentElement.firstChild;
    var nombre = data.textContent;
    data = data.nextElementSibling;
    var apellido = data.textContent;
    data = data.nextElementSibling;
    var edad = data.textContent;
    data = data.nextElementSibling;
    var email = data.textContent;
    data = data.nextElementSibling;
    var sexo = data.textContent;
    data = data.nextElementSibling;
    var id = data.textContent;
    data = data.nextElementSibling;
    var cargo = data.textContent;

    var persona = new Clases.Legislador(nombre, apellido, edad, email, sexo, id, cargo);

    mostrarFormulario(persona);

    return persona;
}

function mostrarFormulario(persona) {
    $("#divFrm").show("slow");

    if (persona != undefined) {
        document.getElementById('txtId').value = persona.id;
        document.getElementById('txtNombre').value = persona.nombre;
        document.getElementById('txtApellido').value = persona.apellido;
        document.getElementById('txtEdad').value = persona.edad;
        document.getElementById('txtEmail').value = persona.email;

        if (document.getElementsByName("sexo")[0].value == persona.sexo) {
            document.getElementsByName("sexo")[0].checked = true;
        }
        else {
            document.getElementsByName("sexo")[1].checked = true;
        }

        if (document.getElementsByName("cargo")[0].value == persona.cargo) {
            document.getElementsByName("cargo")[0].checked = true;
        }
        else {
            document.getElementsByName("cargo")[1].checked = true;
        }

        $("#divId").show();
        $("#btnEliminar").show();
        $("#btnModificar").show();
        $("#btnDarDeAlta").hide();
    } else {
        document.getElementById('txtNombre').value = "";
        document.getElementById('txtApellido').value = "";
        document.getElementById('txtEmail').value = "";
        document.getElementById('txtEdad').value = "";

        $("#btnEliminar").hide();
        $("#btnModificar").hide();
        $("#btnDarDeAlta").show();

    }
}

function setSpinner() {
    $("#bodyTabla").empty();

    var div = document.getElementById('divSpinner');

    var imagen = document.createElement('img');

    imagen.setAttribute('src', './images/loading.gif');
    imagen.setAttribute('style', 'align:middle');

    // div.appendChild(imagen);
}
function actualizarTabla(lista) {

    $("#bodyTabla").empty();
    $("#divSpinner").empty();
    

    for (var i in lista) {
        var fila = document.createElement('tr');
        for (var j in lista[i]) {
            var celda = document.createElement('td');


            celda.addEventListener('click', darAlta);

            var dato = document.createTextNode(lista[i][j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        document.getElementById('bodyTabla').appendChild(fila);
    }
    

    personaMasVieja();
    calcularGenderMix();
    calcularPromedio();
}

function altaPersona() {
    var persona;
    persona = crearPersona();
    guardarPersona(persona);
}


function eliminacionPersona() {
    var persona;
    persona = crearPersona();
    eliminarPersona(persona);
}

function modificacionPersona() {
    var sexo;
    if (document.getElementById('rdoMasculino').checked) {
        sexo = document.getElementById('rdoMasculino').value;
    }
    else if (document.getElementById('rdoFemenino').checked){
        sexo = document.getElementById('rdoFemenino').value;
    }
    var persona;    
    persona = crearPersona();
    persona.sexo = sexo;
    modificarPersona(persona);
}

function crearPersona() {
    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var email = document.getElementById('txtEmail').value;
    var edad = document.getElementById('txtEdad').value;
    var sexo = document.getElementsByName("sexo");
    var id = 0;
    var cargo = document.getElementsByName("cargo");

    if (document.getElementById("txtId").value != "") {
        id = parseInt(document.getElementById('txtId').value);
    }

    for (i = 0; i < sexo.length; i++)
        if (sexo[i].checked) {
            sexo = sexo[i].value;
            break;
        }

    for (i = 0; i < cargo.length; i++)
        if (cargo[i].checked) {
            cargo = cargo[i].value;
            break;
        }
    
    var persona = new Clases.Legislador(nombre, apellido, edad, email, sexo, id, cargo);
    return persona;
}

function limpiarLocalStorage() {
    localStorage.clear();
    lista = undefined;
    actualizarTabla(lista);
}




