import React from "react";

import styles from "../../styles/meetups/MeetupList.module.css";

const MeetupList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default MeetupList;
