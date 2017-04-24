import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './flightInfo.css';

export default class FlightInfo extends Component {
  countOfStops(number) {
    switch (number) {
      case 0:
        return `Без пересадок`;
      case 1:
        return `1 пересадка`;
      default:
        return `${number} пересадки`;
    }
  }

  formatDate(date) {
    let parsedDate = date.split('.');
    parsedDate = new Date(Number('20' + parsedDate[2]), Number(parsedDate[1]) - 1, Number(parsedDate[0]));
    
    const localeDate = parsedDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short'
    });

    const splittedDate = localeDate.split(', ');

    return splittedDate[1].split(' г.').join('') + ', ' + splittedDate[0]
  }

  render() {
    return (
      <div className="flightInfo">
        <div className="flightInfo__departure">
          <div className="flightInfo__time">{this.props.departure_time}</div>
          <div className="flightInfo__airport">{this.props.origin}, {this.props.origin_name}</div>
          <div className="flightInfo__date">{this.formatDate(this.props.departure_date)}</div>
        </div>
        <div className="flightInfo__path">
          {this.countOfStops(this.props.stops)}
        </div>
        <div className="flightInfo__arrival">
          <div className="flightInfo__time">{this.props.arrival_time}</div>
          <div className="flightInfo__airport">{this.props.destination}, {this.props.destination_name}</div>
          <div className="flightInfo__date">{this.formatDate(this.props.arrival_date)}</div>
        </div>
      </div>
    );
  }
}

FlightInfo.propTypes = {
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  departure_time: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
}
