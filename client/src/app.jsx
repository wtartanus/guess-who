var React = require('react');
var ReactDOM = require('react-dom');
var GuessBox = require('./components/GuessBox.jsx');

window.onload = function() {
  ReactDOM.render(
    <GuessBox/>,
    document.getElementById("app")
    );
  console.log("App started");
}