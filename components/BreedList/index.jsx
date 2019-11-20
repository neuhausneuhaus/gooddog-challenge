import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { isEmpty } from '../../util/object';

export default class BreedList extends Component {
  static propTypes = {

    visibleBreeds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      live: PropTypes.bool,
      mixed: PropTypes.bool,
      name: PropTypes.string
    })).isRequired,
    listType: PropTypes.string.isRequired
  };

  static defaultProps = {
    visibleBreeds: [],
    listType: ''
  };

  render() {
    return (
      <div className="BreedList"
        style={{float: "left"}}
      >
        <div className="BreedList-Title">
          {this.props.listType}
        </div>
        <div
          role="presentation"
          onMouseDown={ e => e.preventDefault() }
        >
          {
            this.props.visibleBreeds.map(breed => (
              <p className="breed" key={ breed.id }>
                { breed.name }
                live: { breed.live ? " true" : " false" }
                mixed: { breed.mixed ? " true" : " false"}
              </p>
            ))
          }
        </div>
      </div>
    )

  }

}
