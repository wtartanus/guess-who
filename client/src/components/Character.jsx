var React = require('react');

var Character = React.createClass({
  componentDidMount: function() {
    var element = document.getElementById(this.props.name);
    element.style.backgroundImage = "url(" + this.props.img + ")";
  },

  handleClick: function() {
    var element = document.getElementById(this.props.name);
    element.classList.add("animate-character");
    setInterval(function() {
      element.style.visibility = "hidden";
    }, 900)
  },

  render: function() {
    return (
    <h3 id={this.props.name} className="character" onClick={this.handleClick}>
  {this.props.name}
    </h3>
    )
  }
});

module.exports = Character;