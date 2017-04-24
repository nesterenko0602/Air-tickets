import React, { Component } from 'react';

import Ticket from '../ticket';

export default class Tickets extends Component {
  render() {
    return (
      <div>
        {this.props.tickets.map( (ticket, index) => {
          return <Ticket key={index} ticket={ticket} />;
        })}
      </div>
    );
  }
}
