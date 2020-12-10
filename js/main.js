



axios.get('http://localhost:8000/api/users').then(
    response=>{
        this.data = response.data;
        console.log(this.data);
        this.inicio(this.data);

    }
).catch( e =>   {
    console.log(`Problemas con la Impirtancion ${e}`);
});


function inicio( data){
    var aux = data.length;
    console.log(aux);
    for(var i=0; i<=aux; i++){
        var div = document.createElement("div");
        div.textContent = data[i].nombre+" "+ data[i].apellidos ;
        document.body.appendChild(div);
    }
        

     
}




    

