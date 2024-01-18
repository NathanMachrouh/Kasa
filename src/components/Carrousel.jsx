import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fleche from "../assets/Vector.png"; 

function Carousel({ logement }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const location = useLocation();
  const picturesLength = logement.pictures.length;

  useEffect(() => {
    const index = logement.pictures.findIndex((picture) => picture === location.pathname);
    setCurrentPictureIndex(index >= 0 ? index : 0);
  }, [location.pathname, logement.pictures]);

  function calculateIndex(offset) {
    return (currentPictureIndex + offset + picturesLength) % picturesLength;
  }

  function previous() {
    setCurrentPictureIndex(calculateIndex(-1));
  }

  function next() {
    setCurrentPictureIndex(calculateIndex(1));
  }

  return (
    <div className="carousel">
      {picturesLength > 1 && <img onClick={previous} className='fleche fleche-gauche' src={fleche} alt="Flèche gauche" />}
      {picturesLength > 1 && <img onClick={next} className='fleche fleche-droite' src={fleche} alt="Flèche droite" />}
      <img className="LogementImg" src={logement.pictures[currentPictureIndex]} alt={logement.title} />
      {picturesLength > 1 && <p className='compteur'>{currentPictureIndex + 1}/{picturesLength}</p>}
    </div>
  );
}

export default Carousel;
