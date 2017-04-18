import React, { Component } from 'react';
import Checkbox from '../Checkbox';

import './filter.css';

export default class Filter extends Component {
  createCheckboxes () {
    return Object.keys(this.props.stops).map( (term) => {
      return this.createCheckbox({
        term,
        ...this.props.stops[term]
      });
    });
  }

  createCheckbox = (item) => {
    return (
      <Checkbox
        label={item.label}
        term={item.term}
        key={item.term}
        checked={item.checked}
        withOnly={item.term !== 'all'}
        handleCheckboxChange={this.props.handleFilterChange}
      />
    );
  }

  render() {
    return (
      <div className="filter">
        <h3 className="filter__header">Количество пересадок</h3>
        <div className="filter__controls">
          {this.createCheckboxes()}
        </div>
      </div>
    );
  }
}
