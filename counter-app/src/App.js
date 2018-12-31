import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //   Single source of Truth
  //   each components has their own local state, counters is an array of counters with value,
  //   this value is disconnected from the value property of each counter
  //   Solution: remove local state from components and only rely on props - Controlled Component

  constructor() {
    // Called once and only when a component is rendered in the DOM
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // After the component is rendered in the DOM
    // Perfect place to make AJAX calls to get data from the server
    //    AJAX Call
    //    setState
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // console.log(counter);
    // create a new array and copy the counters array in state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // DO NOT modify the state directly
    // clone the counter at the given location
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    // Children are rendered recursively

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
