//В HTML есть пустой список ul#ingredients.

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().

const ingredients = [ 'Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы' ];
const unorderedList = document.querySelector('#ingredients');
const arrayOfItems = [];
const getList = (array) =>
	array.forEach((item) => {
		const listItem = document.createElement('li');
		listItem.textContent = item;
		arrayOfItems.push(listItem);
	});
getList(ingredients);
unorderedList.append(...arrayOfItems);
