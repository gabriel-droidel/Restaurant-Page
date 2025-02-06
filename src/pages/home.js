function createHome() {
	const divContent = document.querySelector('#content');
    divContent.textContent = '';
	divContent.classList.add('home-page');
	const title = document.createElement('h1');
	title.textContent = 'SIT AND EAT';

	const messageContainer = document.createElement('div');
	messageContainer.classList.add('message-box');
	messageContainer.appendChild(title);
	divContent.appendChild(messageContainer);
	const message = ['enjoy', 'the moment', 'the food', 'the people'];

	message.forEach((item, index) => {
		const messageP = document.createElement('p');
		messageP.classList.add(`p${index}`);
		messageP.textContent = item;
		messageContainer.appendChild(messageP);
	});
}

export { createHome };
