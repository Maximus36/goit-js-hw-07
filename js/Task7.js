//Напиши скрипт, который реагирует на изменение значения input#font-size-control
//(событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
//В результате при перетаскивании ползунка будет меняться размер текста.

const inputRange = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');
const fontSizeControl = () => {
	text.style.fontSize = `${inputRange.value}px`;
	text.style.lineHeight = `${Number(inputRange.value) + 10}px`;
};
inputRange.addEventListener('input', fontSizeControl);
