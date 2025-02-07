function clearDOM() {
	const divContent = document.querySelector('#content');
	divContent.classList.remove('home-page');
	divContent.classList.remove('menu-page');
	divContent.classList.remove('about-page');
	divContent.textContent = '';
}

export { clearDOM };
