//Счетчик состоит из спана и кнопок,
//которые должны увеличивать и уменьшать значение счетчика на 1.

//Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = {
	value: document.querySelector('[id="value"]'),
	incButton: document.querySelector('button[data-action="increment"]'),
	decButton: document.querySelector('button[data-action="decrement"]'),
	counterValue: 0,
	increment: function() {
		this.counterValue += 1;
		value.textContent = this.counterValue;
	},
	decrement: function() {
		this.counterValue -= 1;
		value.textContent = this.counterValue;
	}
};
counter.incButton.addEventListener('click', counter.increment.bind(counter));
counter.decButton.addEventListener('click', counter.decrement.bind(counter));
