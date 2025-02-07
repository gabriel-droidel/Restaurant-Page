import '../styles/menu.css';
import { menuData } from '../data/menuData';

function createMenu() {
	const divContent = document.querySelector('#content');
	divContent.classList.add('menu-page');

	function displayItem(dish) {
		const itemContainer = document.createElement('div');
		itemContainer.classList.add('menu-item');
		const name = document.createElement('h3');
		const price = document.createElement('p');
		const image = document.createElement('img');
		const details = document.createElement('p');

		name.textContent = dish.name;
		image.src = dish.image;
		price.textContent = 'Price ' + '$' + dish.price;
		details.textContent = dish.description;

		itemContainer.append(name, image, price, details);
		divContent.appendChild(itemContainer);
	}

	menuData.forEach((item) => displayItem(item));
}

export { createMenu };
// Photo by Cats Coming: https://www.pexels.com/photo/pizza-dish-367915/
// Photo by Eneida Nieves: https://www.pexels.com/photo/cooked-pasta-on-brown-wooden-bowl-803963/
// Photo by Cristian Mihaila: https://www.pexels.com/photo/classic-italian-risotto-14537683/
