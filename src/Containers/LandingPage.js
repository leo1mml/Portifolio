import React from 'react'
// import Typing from 'react-typing-animation';
import TypingTitle from '../Components/TypingTitle'

class LandingPage extends React.Component {
    state = {

    }


    render() {
        return (
            <div className="landing-container">
                <div className="my-name_container">
                    <h1 className="my-name">Leonel</h1>
                    <h1 className="my-name">Lima</h1>
                </div>
                <div className="habilities-container">
                    <TypingTitle texts={["React", "nodeJS","iOS","macOS","watchOS"]}/>
                    <h1 className="hability">Developer</h1>
                </div>
                
            </div>
        )
    }
}

export default LandingPage