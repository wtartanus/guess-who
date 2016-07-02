var React = require('react');

var Character = React.createClass({

  render: function() {
    return (
    <h3 id={this.props.name} className="character">
      <img src={this.props.img}/>{this.props.name}
    </h3>
    )
  }
});

module.exports = Character;