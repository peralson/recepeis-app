import React, { useRef } from "react";
import Card from "../layout/Card";
import styles from "../../styles/meetups/NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor={"title"}>Meetup title</label>
          <input type="text" required id={"title"} ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor={"image"}>Meetup image</label>
          <input type="url" required id={"image"} ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor={"address"}>Meetup address</label>
          <input type="text" required id={"address"} ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor={"description"}>Meetup description</label>
          <textarea
            rows="5"
            required
            id={"description"}
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
