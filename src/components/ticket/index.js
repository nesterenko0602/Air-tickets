import React, {Component} from 'react';
import FlightInfo from '../flightInfo';
import Button from '../Button';
import './ticket.css';

export default class Ticket extends Component {
  render() {
    const flightData = (() => {
      const {
        _carrier,
        _price,
        ...flightInfoData
      } = this.props.ticket;

      return flightInfoData;
    })();

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
            data={flightData}
          />
        </div>
      </article>
    );
  }
}
