import '../src/styles/styles.css';
import { createHome } from './pages/home';
import { createMenu } from './pages/menu';
import { createAbout } from './pages/about';
import { clearDOM } from './functions/clearDom';

function loadPage(createPageFunction) {
	clearDOM();
	createPageFunction();
}
createHome();

const buttonHome = document.querySelector('#homeB');
const buttonMenu = document.querySelector('#menuB');
const buttonAbout = document.querySelector('#aboutB');

buttonHome.addEventListener('click', () => loadPage(createHome));
buttonMenu.addEventListener('click', () => loadPage(createMenu));
buttonAbout.addEventListener('click', () => loadPage(createAbout));
