//Se realiza una funcion que contenga declarada la url
//con fetch se consultan los datos de la url y se colocan en el return


const fetchPokemon = function() {
    let pokeInput = pokeName.value.toLowerCase();
    //solo las comillas invertidas soportan el incluir una variable de esta manera 
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; 
    fetch(url).then((res)=> {
        if (res.status != 200){
            console.log(res.status);
            pokeImage("./pokesad.gif");
        }else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        //obtener un objeto con el . directo de la carpeta de la api en donde se encuentra
        let pokeImg = data.sprites.front_default;
        let tipo = data.types[0].type.name;

        //se esta llamando a la funcion de abajo, con el let declarado arriba.
        pokeImage(pokeImg);
        pokeType(tipo);
    })
}

const imprimir = function() {
    //COMUNICAR CON ELEMENTOS DEL HTML
    const pokeName = document.getElementById("pokeName");

    //COLECTAR LO QUE SE ESCRIBE EN INPUT :D\
    let pokeInput = pokeName.value;


    console.log("Hola jaja XD" + pokeInput);
}

const pokeImage = function(url){
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeType = function(url1){
    const tipo = document.getElementById("txt");
    txt.value = url1;

}