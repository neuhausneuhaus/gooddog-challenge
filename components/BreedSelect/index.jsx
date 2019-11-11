import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty, get } from '../../util/object';


export default class BreedSelect extends Component {
  static propTypes = {
    availableBreeds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      live: PropTypes.bool,
      mixed: PropTypes.bool,
      name: PropTypes.string
    })).isRequired
  };

  static defaultProps = {
    availableBreeds: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const derivedState = {};

    let name = derivedState.textInput || prevState.textInput;
    name = name.toLowerCase();

    if (name === '') {
      derivedState.visibleBreeds = nextProps.availableBreeds;
    } else {
      derivedState.visibleBreeds = nextProps.availableBreeds.filter(
        b => b.name.toLowerCase().includes(name)
      );
    }

    return isEmpty(derivedState) ? null : derivedState;
  }

  state = {
    textInput: '',
    visibleBreeds: []
  };

  handleInputChange = (event) =>
    this.setState({ textInput: event.target.value });

  bestMatchBreeds(text) {
    const { availableBreeds } = this.props;
    if (text === '') {
      return availableBreeds;
    }

    const matchText = text.toLowerCase();
    const matches = availableBreeds.filter(b => b.name.toLowerCase().includes(matchText));
    return matches;
  }

  render() {
    const { textInput, visibleBreeds } = this.state;

    return (
      <div className="BreedSelect">
        <div>
          <input
            name="breed_select"
            autoComplete="off"
            type="text"
            value={ textInput }
            placeholder="Select a breed"
            onChange={ this.handleInputChange }
          />
        </div>
        <div
          role="presentation"
          onMouseDown={ e => e.preventDefault() }
        >
          {
            visibleBreeds.map(breed => (
              <p className="breed" key={ breed.id }>
                { breed.name }
              </p>
            ))
          }
        </div>
      </div>
    );
  }
}
