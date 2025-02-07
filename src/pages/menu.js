// Import dish images
import pizzaImg from '../../assets/pizza.jpg';

function createMenu() {
	const divContent = document.querySelector('#content');
	divContent.textContent = '';
	const menu = [];
	function createItemMenu(name, price, image, description) {
		return { name, price, image, description };
	}

	const pizza = createItemMenu('Pizza', 8, pizzaImg, 'A very tasty pizza.');
	menu.push(pizza);
	function displayItem(dish) {
		const itemContainer = document.createElement('div');
		const name = document.createElement('h3');
		name.textContent = dish.name;
		const price = document.createElement('p');
		price.textContent = dish.price;
		const image = document.createElement('img');
		image.src = dish.image;
		const details = document.createElement('p');
		details.textContent = dish.description;
		itemContainer.appendChild(name, price, image, details);
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
