var React = require('react');
var Character = require('./Character.jsx');

var CharactersHolder = React.createClass({
  render: function() {
    var characters = this.props.characters.map(function(character) {
      return <Character name={character.name} img={character.img} />;
    });
    return (
      <div className="characters-holder">
        {characters}
      </div>
      )
  
  }
});

module.exports = CharactersHolder;