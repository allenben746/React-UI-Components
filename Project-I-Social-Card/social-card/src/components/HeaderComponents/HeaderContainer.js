import React from 'react';
import './Header.css';
import Title from './HeaderTitle.js';
import ThumbNail from './ImageThumbnail.js';
import ReactLogo from './ReactLogo.js';

const HeaderContainer = props => {
    return (
    <div className = "rootContainer">
    <section className="thumbnailTextContainer">
        <div className = "lambdaLogo">
        <ThumbNail />
        </div>
        <div className="title">
        <Title />
        </div>
    </section>
    <div className="reactLogo">
    <ReactLogo />
    </div>
    </div>
    )
}

export default HeaderContainer;
