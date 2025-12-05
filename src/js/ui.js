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
    emptyItem.classList.add("favorites-empty");
    listElement.appendChild(emptyItem);
    return;
  }

  favoritesArray.forEach((factText, index) => {
    const li = document.createElement("li");
    li.classList.add("favorite-card");

    const textSpan = document.createElement("span");
    textSpan.textContent = factText;
    textSpan.classList.add("favorite-card-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("favorite-card-delete");
    deleteBtn.dataset.index = index;

    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    listElement.appendChild(li);
  });
};

window.renderFavorites = renderFavorites;

export const showFeedback = (message, type = "success") => {
  const el = document.getElementById("feedback-message");

  el.className = "";

  el.classList.add("feedback-message");

  if (type === "success") el.classList.add("is-success");
  if (type === "error") el.classList.add("is-error");

  el.textContent = message;

  setTimeout(() => {
    el.textContent = "";
    el.className = "";
  }, 2500);
};

const favoritesList = document.getElementById("favorites-list");

favoritesList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("favorite-card-delete")) return;

  const indexToDelete = event.target.dataset.index;
  console.log("Delete clicked at index:", indexToDelete);

  const removed = removeFavorite(indexToDelete);
  if (!removed) return;

  const updateFavorites = getFavorites();

  renderFavorites(updateFavorites);
});
