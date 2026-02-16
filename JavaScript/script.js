/**Function that shows/hides the answers to the quiz */

//'Button' is the element that is clicked by the user (passed through onclick="toggleAnswer(this)")
function toggleAnswer(button) {

  //Find the next corresponding HTML element right after the button that connects with the button action (<div class="quiz-answer hidden">)
  //Allows for multiple use, and not just one time use
  const answer = button.nextElementSibling;

  // Toggle the 'hidden' class on and off
  // If it exists -> remove it and show answers
  // If it doesn’t -> add it and hide answers
  answer.classList.toggle("hidden");

  //Checking if the answer is currently hidden
  //If hidden, update the button to "Reveal answer"
  if (answer.classList.contains("hidden")) {
    button.textContent = "Reveal Answer";
  }

  //Else if visible, update the button to "Hide answer"
  else {
    button.textContent = "Hide Answer";
  }
}