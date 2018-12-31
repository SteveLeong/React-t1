import React, { Component } from "react";

// Rule of Thumb:
// The component that owns a piece of the state,
// should be the one modifying it

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // After a component is updated
    // Can make AJAX calls here to request new data
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    // called before removing a counter from the DOM
    console.log("Counter - Unmount");
    // Timers and listeners clean up
  }

  //   state = {
  //     value: this.props.counter.value,
  //     imageURL: "https://picsum.photos/200",
  //     tags: []
  //   };

  //   Props vs State
  //   props is read only, used to initialize the state, data given to a component
  //   state is like private local internal data

  //   old approach to binding event handlers
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   arrow functions inherit 'this'
  //   handleIncrement = product => {
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   Passing Event Arguments s1 : messy
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("Counter - Rendered");

    return (
      // react.fragment gets rid of the extra div in inspector
      <div>
        {/* {this.props.children} */}
        {/* <img src={this.state.imageURL} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={this.doHandleIncrement} - s1
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sml m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state;
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
