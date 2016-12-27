'use strict';

var _home = require('./home/');

var _home2 = _interopRequireDefault(_home);

var _plugins = require('./plugins/');

var _plugins2 = _interopRequireDefault(_plugins);

var _list = require('./plugins/list');

var _list2 = _interopRequireDefault(_list);

var _page = require('./plugins/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute,
    hashHistory = _ReactRouter.hashHistory;


ReactDOM.render(React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(Route, { path: '/', component: _home2.default }),
  React.createElement(
    Route,
    { path: '/plugins', component: _plugins2.default },
    React.createElement(IndexRoute, { component: _list2.default }),
    React.createElement(Route, { path: '/plugins/:pluginName', component: _page2.default })
  )
), document.getElementById('site'));