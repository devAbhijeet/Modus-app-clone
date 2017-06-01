var React = require('react');
var Router = require('react-router');

var Cards = React.createClass({
    propTypes:{
        index:React.PropTypes.number.isRequired
    },
    render:function(){
        let index = this.props.index;
        return (
            <div className={"slide slide-"+this.props.index + (this.props.index===0 ? ' active' : '')}>
                <div className="slide__bg">
                    <div className="card">
                        <div className="card-img-top"></div>
                        <div className="card-tag-text">Fashion</div>
                        <div className="card-block">
                            <h4 className="card-title">Dark Horse</h4>
                            <div className="card-timedetail">
                                <span>19,Sept</span>&nbsp;
                                <span>|</span>&nbsp;
                                <span>6 min read</span>&nbsp;
                                <span>|</span>&nbsp;
                                <span>20 readers</span>
                            </div>
                            <p className="card-text">
                                While I know ‘Dark Horse’ is supposed to invoke a sense of poetry or romance, 
                                I’ve been feeling quite like a horse lately – with the amount of work that 
                                I can sense is going to be piling up in the coming month.
                            </p>
                            <div className="card-block util">
                                <a className="card-link read-more"
                                   data-toggle="modal" 
                                   data-target=".card-desc-modal-lg">
                                   Read more...
                                </a>
                                <a href="#" className="card-link sub-count">
                                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                    <span>20 bookmarks</span>
                                </a>
                            </div>
                            <div className="border-one"></div>
                            <div className="card-block util alse">
                                <a href="#" className="card-link">
                                    <img src="https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/s150x150/14052730_1844274775899392_1121993159_a.jpg"  className="rounded-circle"/>
                                    <span className="user-name">User name</span>
                                </a>
                                <a href="#" className="card-link sub-count">
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <span>19 subscribers</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}); 

module.exports = Cards;