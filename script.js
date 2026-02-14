function toggleAnswer(button) {
  const answer = document.getElementById("quiz-answer");

  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    button.textContent = "Reveal answer";
  } else {
    button.textContent = "Hide answer";
  }
}