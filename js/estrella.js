function updateRating() {
	let ratingInput = parseFloat(document.getElementById('rating-input').value);
	let stars = document.getElementById('stars');

	if (!isNaN(ratingInput) && ratingInput >= 1 && ratingInput <= 5) {

		stars.querySelectorAll('input:checked').forEach(input => {
			input.checked = false;
		});


		stars.querySelector(`input[value="${ratingInput}"]`).checked = true;
	} else {
		alert('numero del 1 a 5.');
	}
}