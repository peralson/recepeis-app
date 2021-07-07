import React from "react";
import styles from "../../styles/layout/Card.module.css";

const Card = ({ children }) => <div className={styles.card}>{children}</div>;

export default Card;
