// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//inicializo la lista de amigos en la variable amigos
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo");
    let amigoIngresado = amigo.value;
    let campo = document.getElementById("amigo");
    
    if(campo.value.trim()=== ""){
        alert("Por favor, inserte un nombre");
    }else{
        //agrego a la lista el amigo ingresado
        amigos.push(amigoIngresado);
        //dejo el campo en balco para el proximo nombre a ingresar
        campo.value = "";
        //lamamos a la funcion agregalista
        agregarAlista(amigos);
    }
    console.log(amigoIngresado)
    console.log(amigos)
}

//funcion que agrega cada amigo introducido a la lista en el html como intem de lista
function agregarAlista(lista){ 
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    //ciclo for que recorre la lista y va a gregando cada nombre como item de lista
    for(let i = 0; i < lista.length;i = i +1){ 
        console.log(lista[i],"en lista");
        let li = document.createElement("li");
        li.textContent = lista[i];
        listaAmigos.appendChild(li);
        
    }
}
// funcion que sorta y elige el amigo de la lista de amigos
function sortearAmigo(){
    if (amigos.length === 0 ){
        alert("no hay amigos en la lista, agrega al menos un amigo")
    }else{
        let indice = Math.floor(Math.random() * amigos.length)
        amigoSorteado = amigos[indice];
        console.log(amigoSorteado);
        let amigoElegido = document.getElementById("resultado");
        amigoElegido.textContent = amigoSorteado;

    } 
    //limpiar lista de amigos y deja el elegido en el sorteo 
    listaAmigos.innerHTML=""
}



