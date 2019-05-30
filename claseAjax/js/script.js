function ejecutar(){

    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (this.readyState==4){

            if(xhr.status==200){
                //console.log(JSON.parse(xhr.responseText));
                document.getElementById('info').innerHTML=xhr.responseText;
            }
        }
    };
    
    xhr.open('GET', 'http://localhost:3000/lista.txt', true);
    xhr.send();

}

