import React from 'react'

class SkillBar extends React.Component {
    

    render(){
        return (
            <div className="skill__container">
                <div className="skill__bar">
                    <div className="skill__fill-bar"></div>
                </div>
                <div className="skill__data">
                    <div className="skill__data__name">{this.props.skillName}</div>
                    <div className="skill__data__badassPercentage">{this.props.badassPercentage}%</div>
                </div>
            </div>
        )
    }
}

export default SkillBar;