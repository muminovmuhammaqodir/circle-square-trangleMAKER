const elForm = document.querySelector(".form");
const elWidth = document.querySelector(".input1");
const elHeight = document.querySelector(".input2");
const elButton = document.querySelector("#btn");
let elContent = document.querySelector(".content");

elButton.addEventListener("click", function (e) {
	e.preventDefault();

	const firstValue = Number(elWidth.value);
	const secondValue = Number(elHeight.value);

	if (firstValue == 0 && secondValue == 0) {
		elContent.textContent = "Invalid Number please enter a valid number";
		elContent.style.width = "100%";
		elContent.style.fontSize = "24px";
		elContent.style.borderRadius = `10px`;
		elContent.style.padding = "10px";
		elContent.style.transition = "all 0.5s linear";
		elContent.style.boxShadow = " 8px 6px 14px rgba(0, 0, 0, 0.2)";
	} else {
		elContent.style.transition = "all 0.5s linear";
		elContent.style.width = `${firstValue}rem`;
          elContent.style.height = `${secondValue}rem`;
          elContent.style.borderRadius = `10px`;
	}
});
