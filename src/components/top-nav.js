require('styles/components/top-nav.scss')
var React = require('react')
const flame =require('../images/flame.svg')
const hamburger =require('../images/menu.svg')
const magnifier =require('../images/magnifier.svg')

var topNavComponent= React.createClass({
  render:()=>{
    return (
      <nav>
        <div className="top-navigation">
          <div className="hamburger">
            <img src={hamburger}/>
          </div>
          <div className="branding">
            <div className="logo">
              <img src={flame}/>
            </div>
            <div className="title">
              Prometheus
            </div>
          </div>
          <div className="search">
            <img src={magnifier} />
          </div>
        </div>
      </nav>
    )
  }
})

module.exports= topNavComponent
