var React = require('react');
var CharacterHolder = require('./CharactersHolder.jsx');
var HelpingQuestions = require('./HelpingQuestions.jsx');
var GuessWho = require('./GuessWho.jsx');

var GuessBox = React.createClass({
  getInitialState: function() {
    return { data: [], choosen: {}}
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
        var num = Math.floor(Math.random() * len ) + 1;
        this.setState({choosen: data[num]});
      }
    }.bind(this);
    request.send(null);
  },

  render: function() {
    return (
      <div>
        <h1>Guess Box</h1>
        <CharacterHolder characters={this.state.data}/>
        <HelpingQuestions character={this.state.choosen}/>
        <GuessWho characters={this.state.data}/>
      </div>
      )
    
  }
});

module.exports = GuessBox;