const shareElement = document.querySelector(".icon");
const tooltipElement = document.querySelector(".tooltip");

shareElement.addEventListener("click", () => {
	shareElement.classList.toggle("share-active");
	shareElement.children[0].classList.toggle("arrow-active");
	tooltipElement.classList.toggle("hidden");
});
