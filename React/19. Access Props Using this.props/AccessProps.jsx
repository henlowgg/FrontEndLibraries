class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              {/* can either put a name, or leave it blank with a space */}
              <Welcome name={"name"}/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };