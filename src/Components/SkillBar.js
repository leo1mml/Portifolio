import React from 'react'

class SkillBar extends React.Component {

    state = {
        basis : 0
    }


    growFillBar = () => {
        const fillBar = document.getElementById(this.props.skillName)
        if(this.state.basis >= this.props.badassPercentage){
            clearInterval(this.fillBar)
        }else {
            this.setState((prevState) => {
                fillBar.style.flexBasis = this.state.basis + "%"
                return {basis: prevState.basis + 1}
            });
        }
    }


    fillBar = setInterval(this.growFillBar, 15)
    

    render(){
        return (
            <div className="skill__container">
                <div className="skill__bar">
                    <div className="skill__fill-bar" id={this.props.skillName}></div>
                </div>
                <div className="skill__data">
                    <div className="skill__data__name">{this.props.skillName}</div>
                    <div className="skill__data__badassPercentage">{this.state.basis}%</div>
                </div>
            </div>
        )
    }
}

export default SkillBar;