import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../context/FavoritesContext";

import styles from "../../styles/layout/MainNavigation.module.css";

const MainNavigation = () => {
  const { total } = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          {total !== 0 && (
            <li>
              <Link to={"/favorites"}>
                My Favorites <span className={styles.badge}>{total}</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
