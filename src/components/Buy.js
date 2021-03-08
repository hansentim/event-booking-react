import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ticketinfo from "../assets/ticketinfo.json";
import "../App.css";

function Buy() {
  const { id } = useParams();
  const history = useHistory();
  const [choosenEvent, setChoosenEvent] = useState({});

  useEffect(() => {
    const foundEvent = ticketinfo.filter((eventObj) => {
      return eventObj.id === parseInt(id);
    });

    setChoosenEvent(foundEvent[0]);
  }, []);

  return (
    <div className="buy-wrapper">
      <section className="buy-content">
        <h3>You are about to score some tickets</h3>
        <h1>{choosenEvent.what}</h1>
        <h3>{choosenEvent.fullDate}</h3>
        <p>@ {choosenEvent.where}</p>
        <h2>{choosenEvent.price}</h2>
        <button onClick={() => history.push(`/ticket/${choosenEvent.id}`)}>
          Beställ
        </button>
      </section>
    </div>
  );
}

export default Buy;
