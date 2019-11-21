import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const listTitle = {
      'breed--pure' : 'Pure Breeds',
      'breed--mixed' : 'Mixed Breeds',
      'breed--non-live' : 'Non-Live Breeds',
    }[this.props.listType]
    return (
      <div className="BreedList">
        <div className="BreedList-title">
          {listTitle}:
        </div>
        <div
          role="presentation"
          onMouseDown={ e => e.preventDefault() }
          className="BreedList-body"
        >
          {
            this.props.visibleBreeds.map(breed => (
              <div className={`breed`} key={ breed.id }>
                <div className={this.props.listType}>
                  {breed.name}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
