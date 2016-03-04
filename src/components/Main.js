require('normalize.css');
require('styles/App.scss');



var React = require('react');
var flame= require('../images/flame.svg');
//var InlineSVG = require('svg-inline-react');
//var Login= require('./login');
//function logo() { return {__html: flame.content} }

var AppComponent = React.createClass( {
  render: function() {
    return (
      <div className="container">
        <header className="header">
          <div id="Logo">
            <img   src="../images/flame.svg" />
          </div>
          <div className="semi-circle">
            <img className="planet"  src="../images/sun.svg" />
            <div className="title">Prometheus</div>
            <div className="sub-title">The Social Currency Network</div>
          </div>
        </header>
        <div id="content">
          <object className="stars" type="image/svg+xml" data="../images/stars.svg" ></object>
        </div>
        <footer className="footer"></footer>
      </div>
    );
  }
});

AppComponent.defaultProps = {
};

module.exports= AppComponent;
