import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
//   <h4>Counter #{counter.id}</h4>
//   </div></Counter>
export default Counters;
