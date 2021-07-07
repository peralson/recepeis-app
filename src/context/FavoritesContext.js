import React, { useState, createContext } from "react";

// Seting up the context FAKE initial values
// so the IDE gives back better autocompletion
const FavoritesContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (favoriteMeetup) => {},
  removerFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((state) => state.concat(favoriteMeetup));
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((state) =>
      state.filter((meetup) => meetup.id !== meetupId),
    );
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removerFavorite: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
