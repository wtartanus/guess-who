var React = require('react');

var GuessWho = React.createClass({
  render: function() {
    var names = this.props.characters.map(function(character) {
      return <option value={character.name}>{character.name}</option>
    });
    return (
      <select>
        {names}
      </select>
      )
  }
});
module.exports = GuessWho;