console.log("Challenge 1");

let range = document.getElementById("range-input");
let number = document.getElementById("number-input");

range.addEventListener("input", (sync) => {
	number.value = sync.target.value;
});

number.addEventListener("input", (sync) => {
	range.value = sync.target.value;
});

