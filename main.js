import { generateExAPIChart } from './grafico';
import { generateExAPIChart2 } from './grafico2';
import { loadMovie } from './Peliculas';


// API 'https://api.themoviedb.org/3/movie/11?api_key=a8363138fc36bbcadc4ed748ae7ccc8f'


loadMovie();

generateExAPIChart();

generateExAPIChart2();