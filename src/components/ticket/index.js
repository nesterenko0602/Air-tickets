import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlightInfo from '../flightInfo';
import Button from '../Button';
import './ticket.css';

export default class Ticket extends Component {
  render() {
    const price = `за ${this.props.ticket.price} Р.`;

    return (
      <article className="ticket">
        <div className="ticket__aside">
          <div className="ticket__airlineLogoWrapper">
            <img className="ticket__airlineLogo" src={`${process.env.PUBLIC_URL}/images/airlines/${this.props.ticket.carrier}.png`} alt="Логотип авиакомпании"/>
          </div>
          <Button
            text='Купить'
            subtext={price}
            type='primary,fullwidth'
            />
        </div>
        <div className="ticket__content">
          <FlightInfo
            origin={this.props.ticket.origin}
            origin_name={this.props.ticket.origin_name}
            destination={this.props.ticket.destination}
            destination_name={this.props.ticket.destination_name}
            departure_date={this.props.ticket.departure_date}
            departure_time={this.props.ticket.departure_time}
            arrival_date={this.props.ticket.arrival_date}
            arrival_time={this.props.ticket.arrival_time}
            stops={this.props.ticket.stops}
          />
        </div>
      </article>
    );
  }
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
}