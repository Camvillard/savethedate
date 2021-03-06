// external libs
import React from "react"

// internal stuff
import BtnDeco from "../images/btn-decos.svg"

class AnimatedButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      randomValues: [],
      svgElements: []
    }
  }

  componentDidMount() {
  }


  animateButton = () => {
    // select svg element depending on the one whose hovered
    // (will need to replace that)
    const svgForBtn = document.querySelector(`#${this.props.id}`)
    // select all the path in this svg
    const paths = Array.from(svgForBtn.querySelectorAll('path'))
    this.setState({svgElements: paths})
    // select only the first one (the big blob in the middle)
    const firstPath = paths.shift()
    // apply some style to this one, we want it
    // to scale down a bit before applying the rotation
    firstPath.style.transition = "all .8s"
    firstPath.style.transform = "scale(0.9)"
    firstPath.style.transformOrigin = "center"
    // for all the paths, apply some style
    const allRandom = []
    paths.forEach( path => {
      const random = Math.floor(Math.random() * 80)
      allRandom.push(random)
      console.log(path)
      path.style.transition = 'all .8s'
      path.style.transform = `rotate(${random}deg)`
      path.style.transformOrigin = "center"
    })
    this.setState({randomValues: allRandom})
  };

  handleMouseEnter = (e) => {
    console.log('hello');
    this.animateButton()
  };

  clearAnimations = (e) => {
    const paths = this.state.svgElements
    const allRandom = this.state.randomValues
    paths.forEach( (path, index) => {
      path.style.transition = 'all .8s'
      path.style.transform = `rotate(-${allRandom[index]}deg)`
      path.style.transformOrigin = "center"
    })

  }

  render() {
    return(
    <React.Fragment >

      <div className="btn-animated" id={this.props.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.clearAnimations}>
        <BtnDeco className="svg-btn-animated" />
        <a href={this.props.link} target={this.props.target || "self"}>{this.props.value}</a>
      </div>

    </React.Fragment>

    )
  }
}

export default AnimatedButton;
