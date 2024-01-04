class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name={this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };


/* 
The MyApp component is stateful and renders a Navbar component as a child.

Pass the name property in its state down to the child component,
// <Navbar name={this.state.name}/>

then show the name in the h1 tag that's part of the Navbar render method.
// <h1>Hello, my name is: {this.props.name}</h1>

name is passed into the h1 tag by "this.props.name"

*/