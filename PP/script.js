document.addEventListener("DOMContentLoaded", function() {

  const questions = document.querySelectorAll(".question-card");

  questions.forEach(card => {
    const correctAnswer = card.dataset.correct;
    const explanation = card.dataset.explanation;
    const hint = card.dataset.hint;
    const buttons = card.querySelectorAll(".option-btn");
    const hintBox = card.querySelector(".hint");

    buttons.forEach(btn => {
      btn.addEventListener("click", function() {

        const selected = btn.dataset.option;

        // Prevent multiple clicks
        if (card.classList.contains("answered")) return;

        card.classList.add("answered");

        if (selected === correctAnswer) {
          btn.classList.add("correct");
          showPopup(explanation);
        } else {
          btn.classList.add("wrong");
          hintBox.textContent = "Hint: " + hint;
        }

        // Highlight correct one if wrong selected
        buttons.forEach(b => {
          if (b.dataset.option === correctAnswer) {
            b.classList.add("correct");
          }
        });

      });
    });
  });

});

function showPopup(text) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  popupText.textContent = text;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
