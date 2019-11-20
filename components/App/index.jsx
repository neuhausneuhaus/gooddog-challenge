import React, { Component } from 'react';
import BreedSelect from '../BreedSelect';

export default class App extends Component {
  state = {
    availableBreeds: []
  };

  componentDidMount() {
    window.fetch('/breeds')
      .then(res => res.json())
      .then((availableBreeds) => {
        this.setState({ availableBreeds });
      });
  }

  render() {
    const { availableBreeds, selectedBreed } = this.state;

    return (
      <div className="App">
        <BreedSelect availableBreeds={ availableBreeds } />
      </div>
    );
  }
}
