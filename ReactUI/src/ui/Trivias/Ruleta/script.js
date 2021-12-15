// referencias a el DOM
const ruleta = document.querySelector('#ruleta');
var formulario = document.querySelector("#repuestas");

// eventos
ruleta.addEventListener('click', girar);
formulario.addEventListener('change', cargarEventoRespuestas)

// variables globales
var giros = 0;

// alertas del juego
function alertaRespuestaCorrecta(){
  Swal.fire({
    icon: 'success',
    title: 'RESPUESTA CORRECTA!!',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false
  }).then((result)=>{
    document.querySelector("#contenedorRespuestas").style = "display:none;";
  })
}

function alertaRespuestaIncorrecta(){
  Swal.fire({
    icon: 'error',
    title: 'RESPUESTA INCORRECTA!!',
    confirmButtonColor: '#red',
    confirmButtonText: 'Continuar',
    allowOutsideClick: false
  }).then((result)=>{
    document.querySelector("#contenedorRespuestas").style = "display:none;";
    
  })
}

function alertaTerminoTurnos(){
  Swal.fire({
    icon: 'success',
    title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Aceptar',
    allowOutsideClick: false
  }).then((result)=>{
    if (result.value == true) {
      giros = 0;
       document.querySelector('.elije').innerHTML = 'MATERIA ALEATORIA: ';
       document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
    }
  })
}

// funcion girar ruleta
function girar(){
  if (giros < 5) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    alertaTerminoTurnos();
  }
}

// funcion que carga evento radio para la seleccion de respuestas
function cargarEventoRespuestas() {
  var preguntaTurno = JSON.parse(localStorage.getItem('pregunta'));
  var radios = formulario.querySelectorAll("input")
  for(var i=0; i<3; i++){
    if(radios[i].checked){
      if(preguntaTurno.pregunta.respuestaCorrecta === i){
        alertaRespuestaCorrecta();
      } else {
        alertaRespuestaIncorrecta();
      }
      radios[i].checked = false;
    } 
  }
}

// funcion que actualiza el estado y las preguntas y repuestas del programa
function cambiarEstadoRuleta(){
  var preguntaTurno = JSON.parse(localStorage.getItem('pregunta'));
  document.querySelector('.elije').innerHTML = 'MATERIA ALEATORIA: ' + preguntaTurno.materia;
  document.querySelector('#pregunta').innerHTML = preguntaTurno.pregunta.pregunta;

  var labels = formulario.querySelectorAll('label');
  console.log(labels)
  for(var i=0; i<3; i++){
    labels[i].innerHTML = `${preguntaTurno.pregunta.respuestas[i]}
    <input type="radio" id="resp1" name="radio">
    <span class="checkmark"></span>`
    //;
  }
}

// funcion que calcula los grados
 function calcular(rand) {
  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  setTimeout(() => {
    let eleccion = parseInt(Math.random() * 5);
    document.querySelector("#contenedorRespuestas").style = "display:inline;";
    var preguntaTurno = {
      materia: null,
      pregunta: null
    }
    switch (true) {
      case valor > 0 && valor <= 30:
        preguntaTurno.materia = "Geografia";
        preguntaTurno.pregunta = datos.geografia[eleccion];
        break;
      case valor > 30 && valor <= 90:
        preguntaTurno.materia = "Historia";
        preguntaTurno.pregunta = datos.historia[eleccion];
        break;
      case valor > 90 && valor <= 150:
        preguntaTurno.materia = "Tecnologia";
        preguntaTurno.pregunta = datos.tecnologia[eleccion];
        break; 
      case valor > 150 && valor <= 210:
        preguntaTurno.materia = "Geografia";
        preguntaTurno.pregunta = datos.geografia[eleccion];
        break;
      case valor > 210 && valor <= 270:
        preguntaTurno.materia = "Historia";
        preguntaTurno.pregunta = datos.historia[eleccion];
        break; 
      case valor > 270 && valor <= 330:
        preguntaTurno.materia = "Tecnologia";
        preguntaTurno.pregunta = datos.tecnologia[eleccion];
        break;
      case valor > 330 && valor <= 370:
        preguntaTurno.materia = "Geografia";
        preguntaTurno.pregunta = datos.geografia[eleccion];
        break;
    }
    localStorage.setItem('pregunta', JSON.stringify(preguntaTurno)); 
    cambiarEstadoRuleta();
    console.log(preguntaTurno);
  }, 5000);
}
