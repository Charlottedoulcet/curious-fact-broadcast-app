import { displayFact, showLoadingState, showErrorState, renderFavorites, showFeedback } from "./ui.js";
import { addToFavorites, getFavorites } from "./storage.js";
let initFailed = false;

export const fetchRandomFact = async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching ramdom fact:", error);
    throw error;
  }
};

export const fetchTodayFact = async () => {
  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en");
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching today fact:", error);
    throw error;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  console.log("App initialized: DOM fully loaded");
  try {
    const todayFact = await fetchTodayFact();
    displayFact(todayFact.text);
  } catch (error) {
    console.error("Failed to load today's fact on init:", error);
    initFailed = true;
    showErrorState();
  }
  const favorites = getFavorites();
  renderFavorites(favorites);
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const btnTune = document.getElementById("btn-tune");
btnTune.addEventListener("click", async () => {
  try {
    btnTune.disabled = true;
    showLoadingState();
    let fact;
    if (initFailed) {
      fact = await fetchTodayFact();
      initFailed = false;
    } else {
      fact = await fetchRandomFact();
    }
    await delay(800);
    displayFact(fact.text);
    btnTune.disabled = false;
  } catch (error) {
    console.error("Error while loading random fact", error);
    showErrorState();
    btnTune.disabled = false;
  }
});

const btnSave = document.getElementById("btn-save");
btnSave.addEventListener("click", () => {
  const currentFact = document.getElementById("fact-text").textContent;
  const added = addToFavorites(currentFact);
  if (added) {
    const favorites = getFavorites();
    renderFavorites(favorites);
    showFeedback("⭐ Saved to favorites!");
  } else {
    showFeedback("⚠️ Already in favorites!");
  }
});

const btnGoToFavorites = document.getElementById("btn-go-to-favorites");
btnGoToFavorites.addEventListener("click", () => {
  const favoritesPanel = document.getElementById("favorites-panel");
  if (!favoritesPanel) return;
  favoritesPanel.scrollIntoView({ behavior: "smooth" });
});
