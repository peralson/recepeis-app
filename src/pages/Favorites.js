import React, { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

const Favorites = ({ history }) => {
  const { favorites, total } = useContext(FavoritesContext);

  if (total === 0) {
    history.replace("/");
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList>
        {favorites.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            description={meetup.description}
            image={meetup.image}
          />
        ))}
      </MeetupList>
    </section>
  );
};

export default Favorites;
