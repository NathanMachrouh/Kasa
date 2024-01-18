import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Json from '../datas/logements.json';

function Logements() {
    const [logementsData, setLogementsData] = useState(null);

    useEffect(() => {
        setLogementsData(Json)
    }, []);

    return (
        <div className="container-logements">
            {logementsData !== null ? (logementsData.map((logement) => (
                <NavLink to={`/${logement.id}`} className="logements" key={logement.id}>
                    <img src={logement.cover} alt={logement.title} />
                    <p key={logement.id}> {logement.title} </p>
                </NavLink>
            ))
            ) : (<p>Chargement ...</p>)
            }
        </div>
    );

}

export default Logements;