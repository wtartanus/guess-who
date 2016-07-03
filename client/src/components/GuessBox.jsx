var React = require('react');
var CharacterHolder = require('./CharactersHolder.jsx');
var HelpingQuestions = require('./HelpingQuestions.jsx');
var GuessWho = require('./GuessWho.jsx');

var GuessBox = React.createClass({
  getInitialState: function() {
    return { data: [], choosen: {}, answer: "Wrong"}
  },

  componentDidMount: function() {
   this.fetchData("magic");
  },

  fetchData: function(collection) {
    var url = "http://localhost:3000/api/" + collection;
    var request = new XMLHttpRequest();

    request.open("GET", url);
    request.onload = function() {
      if(request.status === 200 ) {
        var data = JSON.parse(request.responseText);
        this.setState({data: data});
        var len = data.length;
        var num = Math.floor(Math.random() * len );
        console.log(num);
        this.setState({choosen: data[num]});
      }
    }.bind(this);
    request.send(null);
  },

  checkIfCorrect: function(answer) {
   if(this.state.choosen.name === answer ) {
     this.setState({answer: "Correct"})
   } else {
    this.setState({ answer: "Wrong"})
   }
  },

  render: function() {
    return (
      <div className="guess-box">
        <h1 className="logo">Guess Who?</h1>
        <CharacterHolder characters={this.state.data}/>
        <div className="questions-holder">
          <HelpingQuestions character={this.state.choosen}/>
          <GuessWho characters={this.state.data} checkIfCorrect={this.checkIfCorrect}/>
          <p>{this.state.answer}</p>
        </div>
      </div>
      )
    
  }
});

module.exports = GuessBox;