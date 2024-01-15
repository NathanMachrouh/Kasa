import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Json from "../datas/logements.json";
import Error from "../pages/Error";
import Rating from "../components/Rating";
import Collapse from "./Collapse";

function LogementID() {
  const [logement, setLogement] = useState(null);
  const location = useLocation();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const logement = Json.find((logement) => "/" + logement.id === location.pathname);
    setLogement(logement);
  },[location.pathname]);

  useEffect(() => {
    if (logement) {
      const note = Number(logement.rating);
      setRating(note);
    }
  }, [logement]);

  return (
    <div>
      {logement ? (
        <div className="Logement">
          <img className="LogementImg" src={logement.pictures[0]} alt="" />
          <div className="BlocContainer">
            <div className="Bloc1">
             <h1>{logement.title}</h1>
              <p className="LogementLocation">{logement.location}</p>
              <ul>
                {logement.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
             </ul>
            </div>
            <div className="Bloc2container"> 
              <div className="Bloc2">
                <p className="HostName">{logement.host.name}</p>
                <img className="HostPicture" src={logement.host.picture} alt="" />
              </div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className='collapse-container'>
          <Collapse 
            titre="Description"
            content={logement.description}/>
          <Collapse
            titre="Equipements"
            content={logement.equipments.map((e) => 
              (<li className="equipements">{e}</li>)
            )}
          /></div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default LogementID;