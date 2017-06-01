var React = require('react');
var Router = require('react-router');

var Main = React.createClass({
    mixins:[Router.History],
    handleSubmit:function(){
        this.history.pushState(null,'/app/');
        setTimeout(function(){
            window.location.reload();
        });
    },
    render:function(){
        return (
            <div className="container-fluid main-container">
                <div className="landing-page">
                    <div className="land-image"></div>
                    <div className="text-center">
                        <h2 className="welcome-message">Welcome aboard!</h2>
                        <p className="welcome-message sm-message">
                            A one of a kind platform to <br/>discover, create manage blogs
                        </p>
                        <div className="enter">
                            <button 
                                type="button" 
                                className="btn btn-warning"
                                onClick={this.handleSubmit}>
                                    Start Your Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}); 

module.exports = Main;