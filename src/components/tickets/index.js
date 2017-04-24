import React, { Component } from 'react';

import Ticket from '../ticket';

export default class Tickets extends Component {
  render() {
    return (
      <div>
        {this.props.tickets.map( (ticket, index) => {
          const renderTicket = !!~this.props.stops.indexOf(ticket.stops);
          
          return renderTicket ? <Ticket key={index} ticket={ticket} /> : '';
        })}
      </div>
    );
  }
}
