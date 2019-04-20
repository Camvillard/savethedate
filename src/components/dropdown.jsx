import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  toggleList = () => {
    console.log('changer de langue')
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    return(
      <div onClick={this.toggleList}>
        {this.state.headerTitle}
        {this.state.listOpen && <ul>
          {this.props.list.map( flag => <li>{flag}</li>)}
        </ul>}
      </div>
    )
  }
}

export default Dropdown;
