import React from 'react';

class Pet extends React.Component {

  handleClick = () => {
    this.props.addAdoptedPets(this.props.pet)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {this.props.pet.name} (gender: {this.props.pet.gender === "female "? "♀" : "♂"})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        { !this.props.isAdopted ?
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
