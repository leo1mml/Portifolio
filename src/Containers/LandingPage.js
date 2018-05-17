import React from 'react'
import Typing from 'react-typing-animation';

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
                    <Typing loop={true} speed={100}>
                        <span className="hability react">React</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={5} />
                        <span className="hability node">nodeJS</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={7} />
                        <span className="hability ios">iOS</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={3} />
                        <span className="hability watchos">watchOS</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={7} />
                        <span className="hability tvos">tvOS</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={4} />
                    </Typing>
                    <h1 className="hability">Developer</h1>
                </div>
                
            </div>
        )
    }
}

export default LandingPage