//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name-output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('[id="name-input"]');
const nameOutput = document.querySelector('[id="name-output"]');
const greeting = () => {
	nameOutput.innerHTML = nameInput.value;
	if (nameInput.value === '') {
		nameOutput.innerHTML = 'незнакомец';
	}
};
nameInput.addEventListener('input', greeting);
