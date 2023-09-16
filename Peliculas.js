// paginacion
/* se agrega paginacion hasta 3 paginas pero se tiene la opcion de agregagar hasta 1000 paginas
     obteniendo diferentes peliculas en cada API a medica que se ejecuta el evento de presionar el boton 
     sigiente */

import { generateExAPIChart } from './grafico';
import { generateExAPIChart2 } from './grafico2';
generateExAPIChart();
generateExAPIChart2();




const dashBord=document.getElementById('dashBord')




dashBord.addEventListener('click',() =>{
  
    window.location="./dashboard.html"   
     
})

const buttonMovie=document.querySelector('#button-movie')
console.log(buttonMovie)
buttonMovie.addEventListener('click',() =>{
  
    window.location="./index.html" 
     
})




let page=1     
const btnBefore=document.getElementById('btnBefore')
const btnNext=document.getElementById('btnNext')





btnNext.addEventListener('click',() =>{
 
   
    if(page<7){ 
        page ++ ;
        

    }
    console.log(page)
    loadMovie()
})



btnBefore.addEventListener('click',() =>{


    if(page>1){
        page -= 1;
        
    }

    loadMovie()
    
})
// 1.se decontruye la API y se guarde en varibles para interpolar y una mejor lectura del codigo
const baseUrl= "https://api.themoviedb.org/3/movie/popular?"/*  se corta la base de la URL hasta el signo de interrogacion para
poder realiazar modificaciones*/

const accessKey="api_key=a8363138fc36bbcadc4ed748ae7ccc8f"
const additionProperty="&"/* se crea ua varialbe con el sigo & para poder a agregar las modificacines */
const language="language=es-COL"/* se crea una variable con el codigo ISO 639-1 para incluir el lenguaje español-colombia(castellano) */


export const loadMovie= async()=> {

    // se atrapa los errores del servidor en la solicitud de la API
    try { 
    const responseRAW = await fetch(`${baseUrl}${accessKey}${additionProperty}${language}$&page=${page}`)
    console.log("Respuesta Cruda",responseRAW)
    
        // se crean los condiconales de los errores que se pueden presentar al Solictar la API
        if(responseRAW.status==200){

            const response= await  responseRAW.json();
            console.log(response)
       
            let movies = '';
            response.results.forEach(movie=> {
                movies += `
                    <div class="movie">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                        <h3 class="titel">${movie.title}</h3>
                    </div>
                `;
            });

            document.getElementById('container').innerHTML=movies;

        }else if(responseRAW.status===401){
        console.log("hay un error en el codigo")

        }else if(responseRAW.status===404){
            console.log("No se encontro la  pelicula")
        }else {
            console.log("Hubo un error inesperado")
        }
  

    }catch(error) {

        console.log(error);
    }
}
