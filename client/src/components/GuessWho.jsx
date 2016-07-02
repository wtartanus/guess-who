var React = require('react');

var GuessWho = React.createClass({
  handleChange: function(e) {
   e.preventDefault();
   this.props.checkIfCorrect(e.target.value)
  },

  render: function() {
    var names = this.props.characters.map(function(character) {
      return <option value={character.name}>{character.name}</option>
    });
    return (
      <select onChange={this.handleChange}>
        {names}
      </select>
      )
  }
});
module.exports = GuessWho;