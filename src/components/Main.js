require('normalize.css')
require('styles/App.scss')

var React = require('react')
//var Home= require('./home')
var TopNav= require('./top-nav.js')
var AppComponent = React.createClass( {
  render: function() {
    return (
         <TopNav />

    );
  }
});

AppComponent.defaultProps = {
};

module.exports= AppComponent;
