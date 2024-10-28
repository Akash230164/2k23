function nextPage() {
  const currentCard = document.getElementById("page1");
  const nextCard = document.getElementById("page2");

  // Apply exit and entry animations
  currentCard.classList.add("exit-left");
  setTimeout(() => {
      currentCard.classList.add("hidden");
      currentCard.classList.remove("exit-left");
      nextCard.classList.remove("hidden");
      nextCard.classList.add("animate-text");
  }, 500);
}

function thankPage() {
  const currentCard = document.getElementById("page2");
  const nextCard = document.getElementById("page3");

  // Apply exit and entry animations
  currentCard.classList.add("exit-left");
  setTimeout(() => {
      currentCard.classList.add("hidden");
      currentCard.classList.remove("exit-left");
      nextCard.classList.remove("hidden");
      nextCard.classList.add("animate-text");
  }, 500);
}






