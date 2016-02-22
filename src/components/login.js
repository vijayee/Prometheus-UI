/*
    This React component is a login form for Prometheus

*/
require('styles/components/login.scss');
require('styles/hover.scss');
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var login = React.createClass({
    mixins: [LinkedStateMixin],
    render:function(){
        return(
            <div>
                <div className="login button pill hvr-wobble-to-bottom-right">
                    <span className="txt">Login</span>
                </div>
                <svg width="200" height="60"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg">

                    <rect x="0" y="0" rx="15" ry="15" width="200" height="60"/>
                </svg>
                <div className="login form pill ">
                    <h1>Login to Prometheus</h1>
                </div>
            </div>
        );
    }
});

module.exports=login;
