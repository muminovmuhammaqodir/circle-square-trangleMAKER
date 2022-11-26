const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elBtn = document.querySelector("#btn");
let elContent = document.querySelector(".content");

elBtn.addEventListener("click", function (e) {
	e.preventDefault();
	const inputValue = Number(elInput.value);

	if (inputValue <= 0 || inputValue > 320) {
		elContent.textContent = "Invalid Number please enter a valid number";
		elContent.style.width = "100%";
		elContent.style.fontSize = "24px";
		elContent.style.borderRadius = `10px`;
		elContent.style.padding = "10px";
		elContent.style.transition = "all 0.5s linear";
		elContent.style.boxShadow = " 8px 6px 14px rgba(0, 0, 0, 0.2)";
	} else {
		elContent.style.width = `${inputValue * 2}px`;
		elContent.style.height = `${inputValue * 2}px`;
		elContent.style.borderRadius = `50%`;
		elContent.style.transition = "all 0.5s linear";
		elContent.textContent = "";
	}
});
