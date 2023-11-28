function postulacion(){
    axios.post('administrador',{
        "candidato": txtcandidato.value,
        "partido_politico": txtpartido.value
    })
    .then(function(response){
        console.log(response)
    })

    .then(function(error){
console.log(error)
})
}

function readvotos() {
   
    let tabla = "";

      
    axios.get('votantes')
        .then(function (response) {
            const votostotales = response.data.length
       
            document.getElementById("totalVotos").innerHTML = `Numero de votos: ${votostotales}`
            console.log(votostotales);
         
            response.data.forEach(element => {
               
                tabla += `
                    <div class="card w-75 mb-3">
                        <div class="card-body">
                            <h5 class="card-title">nombre del candidato:${element.nombre }</h5>
                            <p class="card-text">c.c del votante:${element.cedula}</p>
                            <p class="card-text">partido:${element.apoyo_partido}</p>
                            <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
                         
                        </div>
                    </div>
                `;
             
            
            });
            document.getElementById("candidatosview").innerHTML = tabla;
          
        })
    
        .catch(function (error) {
            console.error(error);
        });
    
}
const mesa = []
let mesaSeleccionada;
function selectvotos() { 
    
     const valor = document.getElementById("selectvotoscan");
     valor.addEventListener("change", function() {
        mesaSeleccionada = valor.value;
       
        readtable(); 
     
    });
    let option = "";
    const numeromesas = [];

    axios.get('votantes')
    .then(function(response) {
         option += `
                <option value="seleccionar" >seleccionar</option> `
             
        response.data.forEach(element => {
            const mesa = element.mesaVotacion;
           
            if (!numeromesas.includes(mesa)) {
                numeromesas.push(mesa);
              
                option +=` <option value="${mesa}">${mesa}</option>`;
            }
           
        });

        valor.innerHTML = option;
       
    })
       
}

const votosmesa = []
function readtable() {
    switch (mesaSeleccionada) {
        case "seleccionar":
            axios.get('votantes')
                .then(function (response) {
                    const votostotales = response.data.length;
                    document.getElementById("totalVotos").innerHTML = `Numero de votos: ${votostotales}`;
                    document.getElementById("mesatotal").innerHTML = "";
                    console.log(votostotales);
                    response.data.forEach(element => {
                        tabla += `
                            <div class="card w-75 mb-3">
                                <div class="card-body">
                                    <h5 class="card-title">nombre del candidato:${element.nombre}</h5>
                                    <p class="card-text">c.c del votante:${element.cedula}</p>
                                    <p class="card-text">partido:${element.apoyo_partido}</p>
                                    <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
                                </div>
                            </div>
                        `;
                    });
                    document.getElementById("candidatosview").innerHTML = tabla;
                })
                .catch(function (error) {
                    console.error(error);
                });
            break;
            
       
        default:
     
            let mesa = "";
            let mesaVotacion = mesaSeleccionada;
            const url = `votantess/${mesaVotacion}`;
            console.log(url);
            axios.get(url)
                .then(function (response) {
                    const votosmesa = response.data.length;
                    document.getElementById("totalVotos").innerHTML = "";
                    document.getElementById("mesatotal").innerHTML = `Numero de votos por mesa: ${votosmesa}`;
                    console.log(votosmesa);
                    console.log(response);
                    response.data.forEach(element => {
                        mesa += `<div class="card w-75 mb-3">
                            <div class="card-body">
                                <h5 class="card-title">nombre del candidato:${element.nombre }</h5>
                                <p class="card-text">c.c del votante:${element.cedula}</p>
                                <p class="card-text">partido:${element.apoyo_partido}</p>
                                <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
                            </div>
                        </div>`;
                    });
                    document.getElementById("candidatosview").innerHTML = "";
                    document.getElementById("mesaview").innerHTML = mesa;
                })
                .catch(function (error) {
                    console.error(error);
                });
            
}
}

function readvotosnulos(){

        let option = "";
let nombre = txtvotosnulo.value;
let url = `votantesss/${nombre}`;
   axios.get(url)
  
   .then(function (response) {
    
    console.log(response);
   const votosNulos = response.data.length
    document.getElementById("txtnulos").innerHTML = `total de votos nulos: ${votosNulos}`
    response.data.forEach(element => {
 option += `<div class="card w-75 mb-3">
 <div class="card-body">
     <h5 class="card-title">nombre del candidato:${element.nombre }</h5>
     <p class="card-text">c.c del votante:${element.cedula}</p>
     <p class="card-text">partido:${element.apoyo_partido}</p>
     <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
 </div>
</div>`;
})
document.getElementById("totalVotos").innerHTML = "";
document.getElementById("mesaview").innerHTML = "";
document.getElementById("candidatosview").innerHTML = "";
document.getElementById("nulosvotos").innerHTML = option   
})
.catch(function (error) {
    console.error(error);
});

    }

function readvotosblanco(){
    let option = "";
    let nombre = txtblanco.value;
    let url = `votantesss/${nombre}`;
       axios.get(url)
      
       .then(function (response) {
        
        console.log(response);
       const votosNulos = response.data.length
        document.getElementById("txtnulos").innerHTML = `total de votos blanco: ${votosNulos}`
        response.data.forEach(element => {
     option += `<div class="card w-75 mb-3">
     <div class="card-body">
         <h5 class="card-title">nombre del candidato:${element.nombre }</h5>
         <p class="card-text">c.c del votante:${element.cedula}</p>
         <p class="card-text">partido:${element.apoyo_partido}</p>
         <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
     </div>
    </div>`;
    })
    document.getElementById("totalVotos").innerHTML = "";
    document.getElementById("mesaview").innerHTML = "";
    document.getElementById("candidatosview").innerHTML = "";
    document.getElementById("nulosvotos").innerHTML = option   
    })
    .catch(function (error) {
        console.error(error);
    });
}

function votoscandidatos(){
    const valor = document.getElementById("txtcandidatos");
   
     
   let option = "";
   const numeromesas = [];

   axios.get('votantes')
   .then(function(response) {
        option += `
               <option  selected disabled >seleccionar</option> `
            
       response.data.forEach(element => {
           const mesa = element.nombre;
          
           if (!numeromesas.includes(mesa)) {
               numeromesas.push(mesa);
             
               option +=` <option value="${mesa}">${mesa}</option>`;
           }
          
       });

       valor.innerHTML = option;
      
   })
}
function votostotalescan(){
    let nombre = txtcandidatos.value
    axios.get(`votantesss/${nombre}`)

    .then(function(response){
        console.log(response)

        const total = response.data.length
        totalcandidatos.innerHTML = `votos totales de ${response.data[0].nombre}: ${total}`

    

    })
    .catch(function(error){
        console.log(error)
    })
}

function ganadortotal(){
    axios.get('votantes')
    .then(function (response) {
      const conteo = response.data.reduce(function (conteo, elemento) {
        const nombre = elemento.nombre;
        conteo[nombre] = (conteo[nombre] || 0) + 1;
        return conteo;
      }, {});

      const elegido = Object.keys(conteo).reduce(function (votosinicio,votos ) {
        return conteo[votos] > conteo[votosinicio] ? votos : votosinicio;
      });
      votostotales.innerHTML = `el candidato elegido es${elegido} con ${conteo[elegido]}votos`
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
}
ganadortotal()
votoscandidatos()
// option += `
// <option value="1" >anulado</option> `
// option += `
// <option value="0">blanco</option> `

selectvotos();

// else{
//     let nombre = mesaSeleccionada;
// const $urls = `votantesss/${nombre}`;
// axios.get($urls)
// console.table($urls)
//     .then(function (response) {
//         console.log(response);
//         response.data.forEach(element => {
//             table += `
//                 <div class="card w-75 mb-3">
//                     <div class="card-body">
//                         <h5 class="card-title">nombre del candidato:${element.nombre}</h5>
//                         <p class="card-text">c.c del votante:${element.cedula}</p>
//                         <p class="card-text">partido:${element.apoyo_partido}</p>
//                         <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
//                     </div>
//                 </div>
//             `;
//         });
//         document.getElementById("candidatosview").innerHTML = table;
//     })
//     .catch(function (error) {
//         console.error(error);
//     });
// }
// break;
// }
    
// function mesaTotal() {
   
//     let tabla = "";
//     axios.get(`votantes?${mesaVotacion}`)
//         .then(function (response) {
            
//             console.log(response);
         
//             response.data.forEach(element => {
               
//                 tabla += `
            
//                 `;
             

//                     // <div class="card w-75 mb-3">
//                     //     <div class="card-body">
//                     //         <h5 class="card-title">nombre del candidato:${element.nombre }</h5>
//                     //         <p class="card-text">c.c del votante:${element.cedula}</p>
//                     //         <p class="card-text">partido:${element.apoyo_partido}</p>
//                     //         <p class="card-text">mesa de votacion: ${element.mesaVotacion}</p>
                         
//                     //     </div>
//                     // </div>

//             });
//             // document.getElementById("candidatosview").innerHTML = tabla;
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
// }
readvotos()