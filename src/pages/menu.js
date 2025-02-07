import "./menu.css";

// Import dish images
import pizzaImg from '../../assets/pizza.jpg';
import risottoImg from '../../assets/risotto.jpg';
import pastaImg from '../../assets/pasta.jpg';

function createMenu() {
	console.log('oof');
	const divContent = document.querySelector('#content');
	divContent.classList.remove('home-page');
	divContent.classList.add('menu-page');
	divContent.textContent = '';
	const menu = [];
	function createItemMenu(name, price, image, description) {
		return { name, price, image, description };
	}

	const pizza = createItemMenu('Pizza', 8, pizzaImg, 'A very cozy pizza.');
	const risotto = createItemMenu('Risotto', 10, risottoImg, 'A very hearty risotto')
	const pasta = createItemMenu('Pasta', 6.5, pastaImg, 'A very delicate pasta.')
	menu.push(pizza);
	menu.push(risotto);
	menu.push(pasta);

	function displayItem(dish) {
		const itemContainer = document.createElement('div');
		itemContainer.classList.add('menu-item');
		const name = document.createElement('h3');
		name.textContent = dish.name;
		const price = document.createElement('p');
		price.textContent = 'Price ' + '$'+dish.price;
		const image = document.createElement('img');
		image.src = dish.image;
		const details = document.createElement('p');
		details.textContent = dish.description;
		itemContainer.append(name, image,price, details);
		divContent.appendChild(itemContainer);
		console.log('nope');
	}
	menu.forEach((item) => displayItem(item));
	console.log('seen');
}

export { createMenu };
// Photo by Cats Coming: https://www.pexels.com/photo/pizza-dish-367915/
// Photo by Eneida Nieves: https://www.pexels.com/photo/cooked-pasta-on-brown-wooden-bowl-803963/
// Photo by Cristian Mihaila: https://www.pexels.com/photo/classic-italian-risotto-14537683/
