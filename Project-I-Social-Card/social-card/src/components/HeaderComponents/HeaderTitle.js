import React from 'react';
import './Header.css';

const BoldText = props => {
    <h6>Lambda School</h6>
}

const LightText = props => {
    <p>@LambdaSchool * 26 Jan</p>
}

const Text = props => {
    <p>Let's learn React by building simple interfaces with components. Don't try
        to overthink it, just keep it simple and have fun. Once you feel comfortable using
        components you are well on your way to mastering React!
    </p>
}


const Title = props => {
    return (
    <div className="topText">
        <BoldText />
        <LightText />
    </div>
    <div className="bottomText">
        <Text />
    </div>
    )
}

export default Title;