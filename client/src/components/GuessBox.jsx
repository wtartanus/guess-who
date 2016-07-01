var React = require('react');
var CharacterHolders = require('./CharactersHolder.jsx');
var HelpingQuestions = require('./HelpingQuestions.jsx');
var GuessWho = require('./GuessWho.jsx');

var GuessBox = React.createClass({
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