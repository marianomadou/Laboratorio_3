var xhr;
function traerPersonas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                lista = JSON.parse(xhr.responseText).data;
                actualizarTabla(lista);
            }
        }
    };
    xhr.open("GET", "/traer?collection=personas", true)
    xhr.send();

    return lista;

}

function guardarPersona(persona) {
  
    var data = {"collection":"personas",
                "objeto":persona};
  
    xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            traerPersonas(lista)
        }
    }};
  
    xhr.open("POST", "/agregar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));   
  }

function eliminarPersona(id) {
    var id = parseInt(document.getElementById('txtId').value);

    xhr = new XMLHttpRequest();
    var data = {
        "collection":"personas",
        "id":id
    }
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                traerPersonas(lista);
            }
        }
    };
    xhr.open("POST", "/eliminar", true)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function modificarPersona(persona) {
    var data = {
        "collection":"personas",
        "objeto": persona
    }

    $.ajax({
        type: 'POST',
        async: true,
        url: "/modificar",
        dataType : "json",
        contentType: "application/json",
        data: JSON.stringify(data),   
        beforeSend: function(){
            setSpinner();
        },
        success: function(result) {
            $("#divFrm").hide("slow");
            traerPersonas(lista);
            alert(result.message);
        },
        error: function (xhr, status) {
            alert("Error " + xhr.status + " " + xhr.statusText);
        }
    });
}
