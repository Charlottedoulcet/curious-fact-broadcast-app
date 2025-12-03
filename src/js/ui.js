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
