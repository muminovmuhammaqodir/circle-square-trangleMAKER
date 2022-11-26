let elInputFirst = document.querySelector(".input1");
let elInputSecond = document.querySelector(".input2");
let elInputThird = document.querySelector(".input3");
const elBtn = document.querySelector("#btn");
const elContent = document.querySelector(".content");

elBtn.addEventListener("click", function (e) {
	e.preventDefault();
	console.log("salomo");
	const firstValue = Number(elInputFirst.value);
	const secondValue = Number(elInputSecond.value);
	const thirdValue = Number(elInputThird.value);

	if (firstValue === 0 && secondValue === 0 && thirdValue === 0) {
		elContent.textContent = "Invalid Number please enter a valid number";
		elContent.style.width = "100%";
		elContent.style.fontSize = "24px";
		elContent.style.borderRadius = `10px`;
		elContent.style.padding = "10px";
		elContent.style.transition = "all 0.5s linear";
		elContent.style.boxShadow = " 8px 6px 14px rgba(0, 0, 0, 0.2)";
	} else if (
		firstValue > 10 &&
		secondValue > 10 &&
		thirdValue > 10 &&
		((firstValue < secondValue + thirdValue &&
			firstValue > Math.abs(secondValue - thirdValue)) ||
			(secondValue > Math.abs(firstValue - thirdValue) &&
				secondValue < firstValue + thirdValue) ||
			(thirdValue < firstValue + secondValue &&
				thirdValue > Math.abs(firstValue - secondValue)))
	) {
		elContent.style.width = "0rem !important";
		elContent.style.height = "0rem !important";
		elContent.style.borderLeft = `${firstValue}rem solid transparent`;
		elContent.style.borderRight = `${secondValue}rem solid transparent`;
		elContent.style.borderBottom = `${thirdValue}rem solid blue`;
		elContent.style.transition = "all 0.5s linear";
	} else {
		elContent.textContent = "You can enter greater than 10";
		elContent.textContent = "Invalid Number please enter a valid number";
		elContent.style.width = "100%";
		elContent.style.fontSize = "24px";
		elContent.style.borderRadius = `10px`;
		elContent.style.padding = "10px";
		elContent.style.transition = "all 0.5s linear";
		elContent.style.boxShadow = " 8px 6px 14px rgba(0, 0, 0, 0.2)";
		elContent.style.backgroundColor = `#0D6EFD`;
		elContent.style.color = "white";
	}
});
