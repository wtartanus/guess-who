var React = require('react');

var HelpingQuestions = React.createClass({
  getInitialState: function() {
   return {answer: "false"}
  },

  handleChange: function(e) {
   e.preventDefault();
   console.log(e.target.value)
   if(this.props.character[e.target.value] === "true") {
    this.setState({answer: "true"});
   }else {
    this.setState({answer: "false"});
   }

  },

  render: function() {
    return (
     <div>
        <select onChange={this.handleChange}>
         <option value="family_in_prison">Someone from family were in azkaban</option>
         <option value="quidditch_player">Quidditch Player?</option>
         <option value="long_hair">Have long hair?</option>
         <option value="glasses">Have glasses?</option>
         <option value="male">Is a men</option>
         <option value="slitherine">House of slitherine?</option>
        </select>
        <p id="helping-answer">{this.state.answer}</p>
    </div>
    )
  }
});

module.exports = HelpingQuestions;