export const displayFact = (factText) => {
  const factTextElement = document.getElementById("fact-text");
  factTextElement.textContent = factText;
  const btnSave = document.getElementById("btn-save");
  btnSave.disabled = false;
};
