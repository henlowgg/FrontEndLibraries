const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex]; // Change this line
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
            {/* Change code below this line */}
            {answer}
            {/* Change code above this line */}
          </p>
        </div>
      );
    }
  }


  /* 
  const answer = possibleAnswers[this.state.randomIndex];
  While you are inside the render method and not inside the return method, you can write JavaScript without wrapping it inside curly braces.

First, you will have to set the constant ‘answer’ to a value. Access the ‘possibleAnswers’ array using the value of ‘randomIndex’, which is located within the state of your component. Remember, you access state using this.state.
  */