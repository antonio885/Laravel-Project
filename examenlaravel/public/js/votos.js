const candidatos = [];

function readcandidatos() {
    let tabla = "";
    axios.get('administrador')
        .then(function (response) {
            console.log(response);
            response.data.forEach(element => {
                tabla += `
                    <div class="card w-75 mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${element.candidato}</h5>
                            <p class="card-text">${element.partido_politico}</p>
                            <input onclick="getCandidos(${element.id})" type="checkbox" name="" id="">
                        </div>
                    </div>
                `;
            });
            document.getElementById("candidatosvotos").innerHTML = tabla;
        })
        .catch(function (error) {
            console.error(error);
        });
}

function getCandidos(id) {
    
   let url = `administradores/${id}`
    axios.get(url)

        .then(function (response) {
            console.log(response);
           
             
                candidatos.push({
                    candidato: response.data[0].candidato,
                    partido_politico:  response.data[0].partido_politico
                
             
            });
        
        })
        .catch(function (error) {
            console.error(error);
        });
   
       
     
}

function informacion() {
    if(candidatos.length === 1){
    candidatos.forEach(element => {
      
        axios.post('votantes', {
            nombre: element.candidato,
            cedula: txtcedula.value, 
            apoyo_partido: element.partido_politico,
            mesaVotacion: txtmesa.value
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
    
    });
}else{
    alert("error numero de votos seleccionado erroneo")
    
      
        axios.post('votantes', {
            nombre: "anulado",
            cedula: txtcedula.value, 
            apoyo_partido: "anulado",
            mesaVotacion: txtmesa.value
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
 
        
}
}
readcandidatos();






