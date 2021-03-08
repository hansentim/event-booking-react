import React, { useState, useEffect } from "react";
import ticketinfo from "../assets/ticketinfo.json";
import { useHistory } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setEvents(ticketinfo);
  }, []);

  return (
    <div className="event-wrapper">
      <h1 className="event-title">Events</h1>
      {events.map((ticket, index) => {
        return (
          <section
            className="event-container"
            key={index}
            onClick={() => history.push(`/buy/${ticket.id}`)}
          >
            <div className="date">
              <p>{ticket.day}</p>
              <p>{ticket.month}</p>
            </div>
            <div className="artist-place-time">
              <h2>{ticket.what}</h2>
              <p className="event-location">{ticket.where}</p>
              <p className="event-time">{ticket.fromTo}</p>
              <p id="event-price">{ticket.price}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Events;
