import React from 'react';
import './Header.css';
import Title from './HeaderTitle.js';
import ThumbNail from './ImageThumbnail.js';
import ReactLogo from './ReactLogo.js';

const HeaderContainer = props => {
    return (
    <div className = "rootContainer">
    <div className = "lambdaLogo">
    <ThumbNail />
    </div>
    <div className="reactLogo">
    <ReactLogo />
    </div>
    <Title />
    </div>
    )
}

export default HeaderContainer;
