import './styles.css';
import { createHome } from './pages/home';
import { createMenu } from './pages/menu';


createHome();

const buttonHome = document.querySelector('#homeB');
const buttonMenu = document.querySelector('#menuB');
// const buttonAbout = document.querySelector('#aboutB');

buttonHome.addEventListener('click', () => createHome());
buttonMenu.addEventListener('click', () => createMenu());

console.log('Bravo ba!');
