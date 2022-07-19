const arr = [
	"interactive-rating-component-main",
	"product-preview-card-component-main",
	"qr-code-component-main",
];
const contentElement = document.getElementById("content__list");

arr.map((challenge) => {
	const li = document.createElement("li");
	const title = challenge
		.split("-")
		.join(" ")
		.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
		})
		.slice(0, -4);
	li.innerHTML = `<a href="Starters/${challenge}/index.html">${title}</a>`;
	contentElement.appendChild(li);
});
