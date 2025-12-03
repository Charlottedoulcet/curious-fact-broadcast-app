let favorites = [];

export const addToFavorites = (factText) => {
  if (favorites.includes(factText)) {
    console.log("Already in favorites:", factText);
    return false;
  }
  favorites.push(factText);
  console.log("Favorite added", factText);
  console.log("Current favorites:", favorites);
  return true;
};

export const getFavorites = () => [...favorites];

export const removeFavorite = (index) => {
  const idx = Number(index);

  if (Number.isNaN(idx) || idx < 0 || idx >= favorites.length) {
    console.warn("removeFavorite : invalide index", index);
    return false;
  }
  favorites.splice(idx, 1);
  console.log("Favorite removed at index", idx, "Remaining favorites:", favorites);
  return true;
};
