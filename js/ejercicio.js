var array;

function arraymulti(){
    array = [
        {username:"wilmer", cod:"192067", doc:"12345", tipouser:"estudiante"},
        {username:"wilmer", cod:"192067", doc:"12345", tipouser:"estudiante"},
        {username:"wilmer", cod:"192067", doc:"12345", tipouser:"estudiante"},
    ]
    let fecha =new Date();
    var minutos = fecha.getMinutes();
    console.log(minutos);
    
}

function compara (){
    var nombre = $("#nombre").val();
    
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("el nombre SI existe")
        }
        else{
            console.log("el nombre No Existe")
        }

    }
}