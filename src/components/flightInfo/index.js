import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/ru';

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

  render() {
    return (
      <div className="flightInfo">
        <div className="flightInfo__departure">
          <div className="flightInfo__time">{this.props.data.departure_time}</div>
          <div className="flightInfo__airport">{this.props.data.origin}, {this.props.data.origin_name}</div>
          <div className="flightInfo__date">{moment(this.props.data.departure_date, 'DD.MM.YYYY').format('D MMM YYYY, ddd')}</div>
        </div>
        <div className="flightInfo__path">
          {this.countOfStops(this.props.data.stops)}
        </div>
        <div className="flightInfo__arrival">
          <div className="flightInfo__time">{this.props.data.arrival_time}</div>
          <div className="flightInfo__airport">{this.props.data.destination}, {this.props.data.destination_name}</div>
          <div className="flightInfo__date">{moment(this.props.data.arrival_date, 'DD.MM.YYYY').format('D MMM YYYY, ddd')}</div>
        </div>
      </div>
    );
  }
}
