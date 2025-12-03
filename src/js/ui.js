import { getFavorites, removeFavorite } from "./storage.js";

export const displayFact = (factText) => {
  const factTextElement = document.getElementById("fact-text");
  factTextElement.textContent = factText;
  const btnSave = document.getElementById("btn-save");
  btnSave.disabled = false;
};

export const showLoadingState = () => {
  const factTextElement = document.getElementById("fact-text");
  const btnSave = document.getElementById("btn-save");
  factTextElement.textContent = "Tuning signal ... please stand by.";
  btnSave.disabled = true;
};

export const showErrorState = () => {
  const factTextElement = document.getElementById("fact-text");
  factTextElement.textContent = "🚨 Oops! The fact generator fainted. Tap Tune Signal again to revive it.";
  const btnSave = document.getElementById("btn-save");
  btnSave.disabled = true;
};

export const renderFavorites = (favoritesArray) => {
  const listElement = document.getElementById("favorites-list");
  listElement.innerHTML = "";
  if (!favoritesArray || favoritesArray.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.textContent = " No favorites yet. Tune a fact and save it ✨";
    emptyItem.classList.add("favorites-empty-state");
    listElement.appendChild(emptyItem);
    return;
  }
  favoritesArray.forEach((factText, index) => {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.textContent = factText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-fav-btn");
    deleteBtn.dataset.index = index;
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
  });
};
window.renderFavorites = renderFavorites;

export const showFeedback = (message) => {
  const feedbackElement = document.getElementById("feedback-message");
  feedbackElement.textContent = message;
  setTimeout(() => {
    feedbackElement.textContent = "";
  }, 2500);
};

const favoritesList = document.getElementById("favorites-list");

favoritesList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete-fav-btn")) return;

  const indexToDelete = event.target.dataset.index;
  console.log("Delete clicked at index:", indexToDelete);

  const removed = removeFavorite(indexToDelete);
  if (!removed) return;

  const updateFavorites = getFavorites();

  renderFavorites(updateFavorites);
});
