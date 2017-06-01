var React = require('react');
var Router = require('react-router');
var Cards = require('../components/Cards');

var CardsHolder = React.createClass({
    getInitialState:function(){
        return {
            cardCount:[0,1,2,3]
        }
    },
    render:function(){
        var cards = this.state.cardCount.map(function(val,index){
            return <Cards key={index} index={val}/>
        });
        return (
            <div>
                <div className="modal fade-scale card-desc-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <i className="fa fa-arrow-left ex" data-dismiss="modal" aria-label="Close" aria-hidden="true"></i>
                            </div>
                            <div className="modal-body">
                                <div className="card">
                                    <div className="card-img-top">
                                        <div className="modal-card-overlay">
                                            <div className="model-overlay-text">
                                                <span>Fashion</span>
                                                <h4 className="card-title">Dark Horse</h4>
                                                <div className="card-timedetail">
                                                    <span>19,Sept</span>&nbsp;
                                                    <span>|</span>&nbsp;
                                                    <span>6 min read</span>&nbsp;
                                                    <span>|</span>&nbsp;
                                                    <span>20 readers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-block">
                                        <p className="card-text">
                                            While I know Dark Horse is supposed to invoke a sense of poetry or romance, Ive been feeling quite like a horse lately – with the amount of work that I can sense is going to be piling up in the coming month. I recently got back from a day in Agra to be a part of the launch of a new watch by Ferragamo and am already feeling a bit under the weather. I think its because I know that for the next month or so my body wont have the time to fall sick so it thought it might as well get a little rest now. The season is going to be changing soon which is why I thought of going for a slightly more Autumn look for this post. My favorite – plaid and black and dark lips. The heat is still on so ofcourse I went for a playful skirt, paired it with a buttoned-up plaid shirt, both from 
                                        </p>
                                        <div className="card-img-top list-image"></div>
                                        <div className="card-img-top list-image"></div>
                                        <div className="card-img-top list-image"></div>
                                        <div className="card-img-top list-image"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-header">Modus</div>
                <div className="slider-container">
                    <div className="slider">
                        {cards}
                    </div>
                </div>
            </div>
        );
    }
}); 

module.exports = CardsHolder;