const paras = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");
const qs = document.querySelectorAll(".question");

paras.forEach((para) => {
	para.classList.add("answer-hidden");
});

const questions = document.querySelectorAll(".questionbox");

questions.forEach((question) => {
	question.addEventListener("click", () => {
		paras.forEach((para) => {
			para.classList.add("answer-hidden");
		});
		arrows.forEach((arrow) => {
			arrow.classList.remove("arrow-flip");
		});
		qs.forEach((q) => {
			q.classList.remove("question-active");
		});

		question.children[0].classList.add("question-active");
		question.children[1].classList.add("arrow-flip");
		question.nextElementSibling.classList.remove("answer-hidden");
	});
});
