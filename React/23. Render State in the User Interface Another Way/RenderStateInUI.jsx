class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const name = this.state.name;
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
  <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };

/* 
to render the state before returning it, declare the variable name 
const name = this.state.name;
then return the h1 holding name in it within curly brackets

<h1>{name}</h1>

just makes it so that name will now be able to access "this.state.name" because thats now the value of "name"
*/