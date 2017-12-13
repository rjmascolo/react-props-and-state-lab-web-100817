import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    console.log(this.props.adoptedPets)
    return (
      <div className="ui cards">
        {this.props.pets.map( pet => {
        return (<li key={pet.id}>
            <Pet pet = {pet}
            adoptedPets={this.props.adoptedPets}
            addAdoptedPets={this.props.addAdoptedPets}
            isAdopted={this.props.adoptedPets.includes(pet)}
            />
          </li>)
        } )}
      </div>
    );
  }
}

export default PetBrowser;
