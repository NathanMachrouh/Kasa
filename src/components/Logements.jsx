import React, { useState, useEffect } from "react";
import Json from '../datas/logements.json';


function Logements() {
    const[logementsData, setLogementsData] = useState(null);

    useEffect(() => {
        setLogementsData(Json)
        //const fetchData = async () => {
            //const response = await fetch("../logements.json");
            //const data = await response.json();
            //setLogementsData(data);
        //};
        //fetchData ();
    }, []);

    return (
        <div className="container-logement">
            {logementsData !== null ? (logementsData.map((logement) => (
                <p key={logement.id}> {logement.title} </p>
            ))
            ) : ( <p>Chargement ...</p> )
        }
        </div>
    );

}

export default Logements;