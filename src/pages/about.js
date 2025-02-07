import '../styles/about.css';
function createAbout() {
	const divContent = document.querySelector('#content');
	divContent.classList.add('about-page');

    const aboutMessage = document.createElement('p');
    aboutMessage.textContent='We are here to offer you an experience. Enjoy the present moment. Enjoy the people around you. Enjoy the food.'

    divContent.appendChild(aboutMessage);
}

export { createAbout };
