import React from 'react'

class TypingTitle extends React.Component {
    state = {
        speed: 150,
        typerString: "",
        stringNumber: 0,
        className: "hability"
    }

    componentDidMount(){
        this.typeWriter();
    }

    typeWriter = () => {
        const txt = this.props.texts[this.state.stringNumber]
        if (this.state.typerString.length < txt.length) {
          this.setState((prevState, props) => {
            return {
                typerString: prevState.typerString + txt.charAt(prevState.typerString.length),
                className: "hability hability--" + this.props.texts[this.state.stringNumber].toLowerCase()
            };
          });
          setTimeout(this.typeWriter, this.state.speed);
        }else{
            setTimeout(this.typeEraser, 1000);
        }
    }

    typeEraser = () => {
        if(this.state.typerString.length > 0){
            this.setState((prevState, props) => {
                return {typerString: prevState.typerString.slice(0,-1)}
            })
            setTimeout(this.typeEraser, this.state.speed)
        }else{
            this.setState((prevState, props) => {
                return {stringNumber: (prevState.stringNumber + 1) % this.props.texts.length}
            })
            setTimeout(this.typeWriter, this.state.speed)
        }
    }

    render(){
        return (
            <div>
                <p><span className={this.state.className}>{this.state.typerString}</span><span className="blinking-underline">_</span></p>
            </div>
        )
    }
}

export default TypingTitle;