var React = require('react');
var Main = require('../components/Main');
var CardsHolder = require('../components/CardsHolder');
var Router = require('react-router');
var Route = Router.Route;

module.exports = (
    <Route>
        <Route path='/' component={Main}></Route>
        <Route path='app/' component={CardsHolder}></Route>
    </Route>
)