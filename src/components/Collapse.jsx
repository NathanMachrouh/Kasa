import React, { useState, useRef } from 'react';
import VectorUp from "../assets/VectorUp.png";

function Collapse ({content, titre}) {
    const [isOpened, setIsOpened] = useState(false);

    const toggleCollapse = () => {
        setIsOpened(!isOpened);
    };
    const contentRef = useRef(null);

    return (
        
        <div className='collapse'>
            <div className='collapse-header' onClick={toggleCollapse}>
                <p className='collapse-title'>
                    {titre}
                </p>
                <img src={VectorUp} alt="fleche" className={isOpened ? "img-rotate" : ""} />
            </div>
                <div className='container-collapse'>
                    <p
                    className= "collapse-content"
                    ref={contentRef}
                    style={isOpened ? {
                      height: contentRef.current ? contentRef.current.scrollHeight + 10 + "px" : "auto",
                      opacity: 1
                      
                    } : {
                      height: "0px",
                      opacity: 0,
                      
                    }}>{content}</p>
                </div>
        </div>
        
    );
}

export default Collapse;