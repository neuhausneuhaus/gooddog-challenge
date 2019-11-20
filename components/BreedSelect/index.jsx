import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isEmpty, get } from '../../util/object';
import BreedList from '../BreedList';


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

    let visibleBreeds;
    if (name === '') {
      visibleBreeds = nextProps.availableBreeds;
    } else {
      visibleBreeds = nextProps.availableBreeds.filter(
        b => b.name.toLowerCase().includes(name)
      );
    }

    // TODO: potentially remove once replaced in tests
    derivedState.visibleBreeds = visibleBreeds;

    // Filter breeds remaining in nextProps.available breeds into Mixed, Pure, and NonLive
    // Note: All non-live breeds should be in the non-live group exclusively, regardless of other values
    derivedState.visibleMixedBreeds = visibleBreeds.filter(
      b => b.live && b.mixed
    );
    derivedState.visiblePureBreeds = visibleBreeds.filter(
      b => b.live && !b.mixed
    );
    derivedState.visibleNonLiveBreeds = visibleBreeds.filter(
      b => !b.live
    );

    return isEmpty(derivedState) ? null : derivedState;
  }

  state = {
    textInput: '',
    visibleBreeds: [],
    visibleMixedBreeds: [],
    visiblePureBreeds: [],
    visibleNonLiveBreeds: []
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
    const { textInput, visibleMixedBreeds, visiblePureBreeds, visibleNonLiveBreeds } = this.state;

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
        <BreedList
          listType='breed--pure'
          visibleBreeds={visiblePureBreeds}
        />
        <BreedList
          listType='breed--mixed'
          visibleBreeds={visibleMixedBreeds}
        />
        <BreedList
          listType='breed--non-live'
          visibleBreeds={visibleNonLiveBreeds}
        />
      </div>
    );
  }
}
