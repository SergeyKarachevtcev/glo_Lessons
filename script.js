const btn = document.getElementById("btn");
const inputText = document.getElementById("text");
const square = document.getElementById("square");
const eBtn = document.getElementById("e_btn");
const rangeInput = document.getElementById("range");
const circle = document.getElementById("circle");



/* 1) Повесить на кнопку обработчик события click и реализовать такой функционал:*/
btn.addEventListener("click", function(){
    const color = inputText.value;
    square.style.backgroundColor = color;
});

/* В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "  */
eBtn.style.display = "none";;

/* 3 lesson */
rangeInput.addEventListener("input", function () {
	const value = rangeInput.value;
	circle.style.width = value + "%";
	circle.style.height = value + "%";
});

console.log(inputText);
console.log(btn);
console.log(square);
console.log(eBtn);
console.log(rangeInput);
console.log(circle);




