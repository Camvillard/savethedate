// external libs
import React from "react"
import { Link } from "gatsby"

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
    // select svg element
    const svgForBtn = document.querySelector('.svg-btn-animated')
    // select all the path in this svg
    const paths = Array.from(svgForBtn.querySelectorAll('path'))
    // store that into a state
    this.setState({
      svgElements: paths
    })
  }


  animateButton = () => {
    const paths = this.state.svgElements
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
      const random = Math.floor(Math.random() * 100)
      allRandom.push(random)
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

      <div className="btn-animated" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.clearAnimations}>
        <BtnDeco className="svg-btn-animated" />
        <a href={this.props.link} target={this.props.target}>{this.props.value}</a>
      </div>

    </React.Fragment>

    )
  }
}

export default AnimatedButton;
