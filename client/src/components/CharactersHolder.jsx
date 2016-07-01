var React = require('react');
var Character = require('./Character.jsx');

var CharactersHolder = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Characters Holder</h2>
        <Character />
      </div>
      )
  
  }
});

module.exports = CharactersHolder;