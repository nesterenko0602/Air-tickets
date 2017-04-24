import React, {Component} from 'react';

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
          <div className="flightInfo__time">{this.props.data.departure_time}</div>
          <div className="flightInfo__airport">{this.props.data.origin}, {this.props.data.origin_name}</div>
          <div className="flightInfo__date">{this.formatDate(this.props.data.departure_date)}</div>
        </div>
        <div className="flightInfo__path">
          {this.countOfStops(this.props.data.stops)}
        </div>
        <div className="flightInfo__arrival">
          <div className="flightInfo__time">{this.props.data.arrival_time}</div>
          <div className="flightInfo__airport">{this.props.data.destination}, {this.props.data.destination_name}</div>
          <div className="flightInfo__date">{this.formatDate(this.props.data.arrival_date)}</div>
        </div>
      </div>
    );
  }
}
