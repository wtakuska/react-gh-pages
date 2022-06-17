import React from 'react';
import aboutImage from "../img/wt-aboutimg.png";

class AboutMe extends React.Component {
    render(){
        return (
            <div className="App">
                <div className="content">
                    <img src={aboutImage} alt="about me" className="photo" />
                    <h1>About Me:</h1>
                    <p>Blahblahblah</p>
                </div>
            </div>
        );
    }
}

export default AboutMe;