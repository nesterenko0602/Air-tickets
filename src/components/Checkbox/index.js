import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {
  toggleCheckboxChange = (args) => {
    const { onCheckboxChange, term, checked } = this.props;
    
    onCheckboxChange({
      checked: !checked,
      term,
      only: args.only
    });
  }

  setCheckbox = () => {
    this.toggleCheckboxChange({ only: true });
  }

  render () {
    const { label, checked, withOnly } = this.props;
    return (
      <div className="checkbox__wrapper">
        <label className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            value={label}
            checked={checked}
            onChange={this.toggleCheckboxChange}
          />
          <span className="checkbox__face"></span>
          <span className="checkbox__label">{label}</span>
        </label>
        { withOnly
          ? <div
              onClick={this.setCheckbox}
              className="checkbox__onlyButton"
              >Только</div>
          : ''
        }
      </div>
    );
  }
}

export default Checkbox;