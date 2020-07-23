//Напиши скрипт, который выполнит следующие операции.

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Получится 'В списке 3 категории.'.

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента (тега h2) и количество элементов
//в категории (всех вложенных в него элементов li).

//Например для первой категории получится:

//Категория: Животные
//Количество элементов: 4

const items = document.querySelectorAll('.item');
const categories = document.querySelector('#categories');
const heading = document.querySelectorAll('.item h2');
const listInList = document.querySelectorAll('.item ul');
const getCountItems = (array) => array.length;
const getHeading = (head) => head.textContent;
const getCategoriesInfo = (array) =>
	array.forEach((element, index) => {
		console.log(`Категория: ${getHeading(heading[index])}`);
		console.log(`Количество элементов: ${getCountItems(listInList[index].children)}`);
	});
console.log(`В списке ${getCountItems(categories.children)} категории`);
getCategoriesInfo(items);
