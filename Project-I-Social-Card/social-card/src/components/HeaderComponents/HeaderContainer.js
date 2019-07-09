import React from 'react';
import './Header.css';
import Title from './HeaderTitle.js';
import ThumbNail from './ImageThumbnail.js';
import ReactLogo from './ReactLogo.js';

const HeaderContainer = props => {
    return (
    <div>
    <ThumbNail />
    <ReactLogo />
    <Title />
    </div>
    )
}

export default HeaderContainer;
