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
  favoritesArray.forEach((factText) => {
    const li = document.createElement("li");
    li.textContent = factText;
    listElement.appendChild(li);
  });
};
window.renderFavorites = renderFavorites;
