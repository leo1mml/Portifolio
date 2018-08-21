import React from 'react'

class Jobs extends React.Component {

    render(){
        return(
            <div className="projects-container">
                <a target="_blank" rel="noopener noreferrer" href="http://www.poisonpixstudios.com/" className="project">
                    <img className="project__image poisonpix-img" src={require("./../images/projects/poisonpix.png")} alt=""/>
                    <span className="project__text">PoisonPix</span>
                </a>
                <a className="project">
                    <img className="project__image iterinferis-img" src={require("./../images/projects/iterinferis.png")} alt=""/>
                    <span className="project__text">Iter Inferis</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/kolony/id1379794537?mt=8" className="project">
                    <img className="project__image kolony-img" src={require("./../images/projects/kolony.png")} alt=""/>
                    <span>Kolony</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/br/app/clicks/id1327481170?mt=8" className="project">
                    <img className="project__image clicks-img" src={require("./../images/projects/clicks.png")} alt=""/>
                    <span className="project__text">Clicks</span>
                </a>
            </div>
        )
    }
}

export default Jobs;