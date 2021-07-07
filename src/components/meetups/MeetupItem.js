import React, { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import styles from "../../styles/meetups/MeetupItem.module.css";
import Card from "../layout/Card";

const MeetupItem = ({ id, image, title, address, description }) => {
  const { isFavorite, removerFavorite, addFavorite } =
    useContext(FavoritesContext);

  const itemIsFavorite = isFavorite(id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      removerFavorite(id);
    } else {
      addFavorite({ id, image, title, address, description });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
