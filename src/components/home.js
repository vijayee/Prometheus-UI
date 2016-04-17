require('normalize.css')
require('styles/components/home.scss')
const sun= require('../images/sun.svg')
const stars= require('../images/stars.svg')
const flame =require('../images/flame.svg')

var React = require('react')

var homeComponent = React.createClass( {
  render: () => {
    return (
      <div className="container">
        <header className="header">
          <div id="Logo">
            <img src={flame}/>
          </div>
          <div className="semi-circle">
            <img className="planet"  src={sun} />
            <div className="title">Prometheus</div>
            <div className="sub-title">The Social Currency Network</div>
          </div>
        </header>
        <div id="content">
          <object className="stars" type="image/svg+xml" data={stars} ></object>
        </div>
        <footer className="footer"></footer>
      </div>
    )
  }
})
module.exports= homeComponent
