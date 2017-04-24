import React, { Component } from 'react';
import Checkbox from '../Checkbox';

import './filter.css';

export default class Filter extends Component {
  getLabel(term) {
    switch (term) {
      case 'all':
        return 'Все';
      case 0:
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      default:
        return `${term} пересадки`;
    }
  }

  getCheckedStatus(term) {
    switch (term) {
      case 'all':
        return !!(this.props.stops.length === 4);
      default:
        return !!~this.props.stops.indexOf(Number(term));
    }
  }

  createCheckboxes() {
    return ['all', 0, 1, 2, 3].map( (term) => {
      return this.createCheckbox({
        term,
        label: this.getLabel(term),
        checked: this.getCheckedStatus(term)
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
