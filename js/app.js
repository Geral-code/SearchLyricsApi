
import Api from './api.js';
import * as UI from './interface.js';


UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(event) {
    event.preventDefault(); //se hace para que no se refresque la pantalla cuando se apreta el boton


//Obtener datos del formulario

const artista = document.querySelector('#artista').value;
const cancion = document.querySelector ('#cancion').value;  

//la validacion de los campos del formulario
  if(artista==='' || cancion === '') {
      UI.divMensaje.textContent = 'Error.. campos requeridos!';
      UI.divMensaje.classList.add('error');

      setTimeout(() => {
        UI.divMensaje.textContent = '';
        UI.divMensaje.classList.remove('error');
      },3000);
      return; //el return termina la ejecucion del "if"
  } 
  
  // Si pasamos la validacion 

  const busqueda = new Api(artista, cancion);
  const resultadoApi = busqueda.consultarApi();
  const informacion = busqueda.mostrarInformacion();
  renderizado(resultadoApi, informacion)
 
}
  const renderizado = async (result, info) => {
    const resultado = await result;
    //comprobacion que exista la cancion
    if(resultado.lyrics) {
      const {lyrics} = resultado;
      // lyrics.slice(lyrics.slice(22, lyrics.length)); podria ser pero no nos sirve ahora
      // console.log(lyrics.split('\r\n').pop()); si funciona

      const cancion = lyrics.split('\r\n').pop();
      UI.divResultado.textContent = cancion;
      UI.headingResultado.textContent = info;
            
    } else  {
      UI.divMensaje.textContent = 'La cancion no existe, prueba con otra'
      UI.divMensaje.classList.add('error');

      setTimeout ( () => {
        UI.divMensaje.divMensaje.textContent = '';
        UI.divMensaje.classList.remove('error');
      }, 3000 ) 
    }
  };





