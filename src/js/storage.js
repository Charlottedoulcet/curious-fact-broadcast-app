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
