import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ticketinfo from "../assets/ticketinfo.json";
import "../App.css";

function Ticket() {
  const { id } = useParams();

  const [choosenEvent, setChoosenEvent] = useState({});
  console.log(id);

  useEffect(() => {
    const foundEvent = ticketinfo.filter((eventObj) => {
      return eventObj.id === parseInt(id);
    });

    console.log(foundEvent);
    setChoosenEvent(foundEvent[0]);
  }, []);

  return (
    <div className="ticket-wrapper">
      <h1>Tack för din beställning</h1>
      <section className="ticket-content">
        <div className="paper-ticket">
          <p>WHAT</p>
          <h2>{choosenEvent.what}</h2>
          <div className="paper-ticket-where">
            <p className="paper-ticket-where-p">WHERE</p>
            <h3>{choosenEvent.where}</h3>
          </div>
          <div className="cut-ticket">
            <div className="box box-1">
              <p>WHEN</p>
              <h4>{choosenEvent.when}</h4>
            </div>
            <div className="box box-2">
              <p>FROM</p>
              <h4>{choosenEvent.from}</h4>
            </div>
            <div className="box box-3">
              <p>TO</p>
              <h4>{choosenEvent.to}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ticket;
