import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 'all'
    }
  }

  onChangeType = event => {
    this.setState({ value: event.target.value})
  }

  onFindPetsClick = event => {
    // call a callback prop passed from a parent
    this.props.onChangeFilter(this.state.value)
    // invoke that with this.state.value
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange= {this.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick= {this.onFindPetsClick} >Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
