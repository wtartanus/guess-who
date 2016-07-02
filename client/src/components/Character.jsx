var React = require('react');

var Character = React.createClass({
  render: function() {
    return <h3>{this.props.name}</h3>
  }
});

module.exports = Character;