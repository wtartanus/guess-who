var React = require('react');
var CharacterHolders = require('./CharactersHolder.jsx');
var HelpingQuestions = require('./HelpingQuestions.jsx');
var GuessWho = require('./GuessWho.jsx');

var GuessBox = React.createClass({
  getInitialState: function() {
    return { data: [] }
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
      }
    }.bind(this);
    request.send(null);
  },

  render: function() {
    return (
      <div>
        <h1>Guess Box</h1>
        <CharacterHolders />
        <HelpingQuestions />
        <GuessWho />
      </div>
      )
    
  }
});

module.exports = GuessBox;