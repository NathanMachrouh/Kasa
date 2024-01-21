import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import Json from "../datas/logements.json";
import Error from "../pages/Error";
import Rating from "../components/Rating";
import Collapse from "./Collapse";
import Carousel from "./Carrousel";
import TagsList from "./Tags";

function LogementID() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findLogement = Json.find(item => item.id === id);
    setLogement(findLogement);
  }, [id]);

  return (
    <div>
      {logement ? (
        <div className="Logement">
          <Carousel logement={logement} />
          <div className="BlocContainer">
            <div className="Bloc1">
              <h1>{logement.title}</h1>
              <p className="LogementLocation">{logement.location}</p>
              <TagsList tags={logement.tags} />
            </div>
            <div className="Bloc2container">
              <div className="Bloc2">
                <p className="HostName">{logement.host.name}</p>
                <img className="HostPicture" src={logement.host.picture} alt="" />
              </div>
              <Rating rating={logement.rating} />
            </div>
          </div>
          <div className='collapse-container'>
            <Collapse
              titre="Description"
              content={logement.description} />
            <Collapse
              titre="Equipements"
              content={logement.equipments.map((e, index) =>
                (<li key={index} className="equipements">{e}</li>)
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