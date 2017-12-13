import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  fetchPets = () => {
    let url = '/api/pets';
    if (this.state.filters.type !== 'all') {
      url += `?type${this.state.filters.type}`;
    }

    fetch(url).then(res => res.json()).then(pets => this.setState({pets}))
  }

  changeFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }
    addAdoptedPets = (pet) => {
      this.setState( prevState => {
        return {adoptedPets: [...prevState.adoptedPets, pet]}
      })
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
              onChangeFilter={this.changeFilter.bind(this)}
              filter={this.state.filters.type}
              onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              adoptedPets={this.state.adoptedPets}
              pets={this.state.pets}
              addAdoptedPets={this.addAdoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
