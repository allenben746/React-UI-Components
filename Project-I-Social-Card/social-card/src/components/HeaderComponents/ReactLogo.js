import React from 'react';
import './Header.css';
import ReactPicture from './reactLogo.jpg';

const ReactLogo = props => {
    return (
        <img className="reactLogo" src={ReactPicture} alt="React Logo"></img>
    )
}
export default ReactLogo