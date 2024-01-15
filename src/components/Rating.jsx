import etoileActive from "../assets/star-active.png";

function Rating({ rating }) {
  const etoiles = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      etoiles.push(<img className="star" src={etoileActive} key={i} alt="etoile active"></img>);
    } else {
      etoiles.push(<img className="star star-inactive" src={etoileActive} key={i} alt="etoile inactive"></img>);
    }    
  }

  return <div className="rating"> {etoiles} </div>
}

export default Rating
