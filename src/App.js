import React, { Component } from 'react';

import Filter from './components/filter';
import Tickets from './components/tickets';
import Loader from './components/Loader';

import ticketsJSON from './tickets.json';
import logo from './assets/images/logo.png';
import './App.css';

class App extends Component {
  state = {
    stops: {
      all: {
        checked: true,
        label:'Все'},
      wo: {
        checked: true,
        label:'Без пересадок'
      },
      one: {
        checked: true,
        label:'1 пересадка'
      },
      two: {
        checked: true,
        label:'2 пересадки'
      },
      three: {
        checked: true,
        label:'3 пересадки'
      }
    },
    tickets: [],
    loading: true
  }

  componentDidMount() {
    // Async load, #task5
    new Promise( (resolve, reject) => {
      setTimeout(()=> {
        resolve(ticketsJSON);
      }, 3000);
    })
    .then(result => {
      this.setState((prevState) => {
        return {
          loading: false,
          tickets: result.tickets.sort( (ticketA, ticketB) => ticketA.price - ticketB.price )
        };
      });

    });
  }

  handleFilterChange = ({term, checked, only}) => {
    this.setState( (prevState) => {
      const newState = Object.assign({}, prevState);
      newState.stops[term].checked = checked;

      if (term === 'all' || only) {
        Object.keys(newState.stops).forEach(key => {
          newState.stops[key].checked = only ? (key === term) : checked;
        });
      } else if (!checked) {
        newState.stops.all.checked = false;
      } else if (!newState.stops.all.checked) {
        newState.stops.all.checked = Object.keys(newState.stops)
          .reduce( (prev, curr) => {
            return curr === 'all'
              ? true
              : prev && newState.stops[curr].checked;
          }, true);
      }
      return newState;
    });
  }

  render() {
    return (
      <div className="app">
        
        <header className="header">
          <img src={logo} className="header__logo" alt="Aviasales logo" />
        </header>

        <main className="main">
          <aside className="filters">
            <Filter
              handleFilterChange={this.handleFilterChange}
              stops={this.state.stops}
              />
          </aside>
          <section className="content">
            { this.state.loading
              ? <Loader />
              : <Tickets
                tickets={this.state.tickets}
                stops={this.state.stops}
                />
            }
          </section>
        </main>
      
      </div>
    );
  }
}

export default App;
