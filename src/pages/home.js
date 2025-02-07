function createHome() {
	const divContent = document.querySelector('#content');
	divContent.classList.add('home-page');

	const message = ['enjoy', 'the moment', 'the food', 'the people'];
	const title = document.createElement('h1');
	const messageContainer = document.createElement('div');
	title.textContent = 'SIT AND EAT';
	messageContainer.classList.add('message-box');
	messageContainer.appendChild(title);
	divContent.appendChild(messageContainer);

	// generate each paragraph with the text from the array
	message.forEach((item, index) => {
		const messageP = document.createElement('p');
		messageP.classList.add(`p${index}`);
		messageP.textContent = item;
		messageContainer.appendChild(messageP);
	});
}

export { createHome };
