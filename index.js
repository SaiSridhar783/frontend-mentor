const arr = ["3-column-preview-card-component-main","article-preview-component-master","faq-accordion-card-main","interactive-rating-component-main","nft-preview-card-component-main","order-summary-component-main","product-preview-card-component-main","profile-card-component-main","qr-code-component-main","results-summary-component-main","social-proof-section-master","stats-preview-card-component-main"]
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
