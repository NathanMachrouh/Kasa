import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Json from "../datas/logements.json";

function LogementID() {
  const [logement, setLogement] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const logement = Json.find((logement) => "/" + logement.id === location.pathname);
    setLogement(logement);
  },[location.pathname]);

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
            <div> 
              <div className="Bloc2">
                <p className="HostName">{logement.host.name}</p>
                <img className="HostPicture" src={logement.host.picture} alt="" />
              </div>
              <p className="rating">RATING</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Logement Introuvable</p>
      )}
    </div>
  );
}

export default LogementID;