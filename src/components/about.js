import React from 'react';
import aboutImage from "../img/wt-aboutimg.png";

class AboutMe extends React.Component {
    render(){
        return (
            <div className="App">
                <div className="content">
                    <img src={aboutImage} alt="about me" className="photo" />
                    <h1>About Me:</h1>
                    <p>My name is Wioleta (Violet) and I'm currently a student at Saint Xavier University. <br/>
                        My hobbies include hiking, kayaking and other nature related activities. <br />
                        Currently, I'm trying to get the hang of web development and learn more about the inner workings of websites. <br />
                        I hope to one day become a skilled web developer and also utilize my graphic design background.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;