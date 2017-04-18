import React, { Component } from 'react';

import Ticket from '../ticket';

const translateCount = {
  0: 'wo',
  1: 'one',
  2: 'two',
  3: 'three'
};

export default class Tickets extends Component {
  render() {
    return (
      <div>
        {this.props.tickets.map( (ticket, index) => {
          const renderTicket = this.props.stops[translateCount[ticket.stops]].checked;
          
          return renderTicket ? <Ticket key={index} ticket={ticket} /> : '';
        })}
      </div>
    );
  }
}
