require('normalize.css')
require('styles/App.scss')

var React = require('react')
var Home= require('./home')
var AppComponent = React.createClass( {
  render: function() {
    return (
          <Home />

    );
  }
});

AppComponent.defaultProps = {
};

module.exports= AppComponent;
