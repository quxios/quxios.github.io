'use strict';

var _home = require('/js/home/');

var _home2 = _interopRequireDefault(_home);

var _plugins = require('/js/plugins/');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    browserHistory = _ReactRouter.browserHistory;


ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(Route, { path: '/', component: _home2.default }),
  React.createElement(Route, { path: '/plugins', component: _plugins2.default })
), document.getElementById('site'));