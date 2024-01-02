class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
  reset() {
    this.setState({
        count: 0
    });
  }
  increment() {
    this.setState( state => ({
        count: state.count + 1
    }));
  }
  decrement() {
    this.setState( state => ({
        count: state.count - 1
    }));
  }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };



  /* 
  
  couple extra reps just for me, 

  initialize the state

  this.variable = this.variable.bind(this);

  putting variable in place of reset, increment, and decrement, just for additional example

  methods to use state

  reset() {
    this.setState({
        count: 0
    });
  }

  all thats happening here is when the button is clicked, it resets the count back to 0

  increment() {
    this.setState(state => ({
        count: state.count + 1
    }));
  }

  this is just adding 1 to the count each time the button is clicked, key thing here is using the arrow function and using state.count

  decrement() {
    this.setState(state => ({
        count: state.count - 1
    }));
  }
  */