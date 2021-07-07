import React, { useState, useEffect } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [loading, setloading] = useState(true);
  const [meetups, setmeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://meetups-b386e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
    )
      .then((res) => res.json())
      .then((data) => {
        const mu = [];
        for (const key in data) {
          mu.push({
            id: key,
            ...data[key],
          });
        }
        setmeetups(mu);
      })
      .catch((e) => console.log("error:", e.message))
      .finally(() => setloading(false));
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList>
        {meetups.map((meetup) => (
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

export default AllMeetups;
