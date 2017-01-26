(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "block footer" },
        React.createElement(
          "a",
          { href: "https://www.patreon.com/quxios" },
          "Patreon"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://twitter.com/Quxios" },
          "Twitter"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://www.youtube.com/c/QuxiosDev" },
          "Youtube"
        ),
        " |\xA0",
        React.createElement(
          "a",
          { href: "https://github.com/quxios" },
          "Github"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

exports.default = Footer;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocsPage = function (_React$Component) {
  _inherits(DocsPage, _React$Component);

  function DocsPage(props) {
    _classCallCheck(this, DocsPage);

    var _this = _possibleConstructorReturn(this, (DocsPage.__proto__ || Object.getPrototypeOf(DocsPage)).call(this, props));

    _this.state = {
      docs: []
    };
    return _this;
  }

  _createClass(DocsPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container docs' },
          React.createElement(
            'div',
            { className: 'title' },
            'Documentation Page'
          ),
          React.createElement(_sidebar2.default, null),
          React.createElement(
            'div',
            { className: 'content' },
            React.createElement(_page2.default, null)
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return DocsPage;
}(React.Component);

exports.default = DocsPage;

},{"./../components/footer":1,"./page":3,"./sidebar":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginBlock = function (_React$Component) {
  _inherits(PluginBlock, _React$Component);

  function PluginBlock() {
    _classCallCheck(this, PluginBlock);

    return _possibleConstructorReturn(this, (PluginBlock.__proto__ || Object.getPrototypeOf(PluginBlock)).apply(this, arguments));
  }

  _createClass(PluginBlock, [{
    key: 'makeBody',
    value: function makeBody() {
      var body = 'testing\n# TEST\n\n- list\n- list\n- list\n\n~~~\n code\n~~~\n';
      return marked(body);
    }
  }, {
    key: 'render',
    value: function render() {
      var body = this.makeBody();
      return React.createElement(
        'div',
        { className: 'block' },
        React.createElement(
          'div',
          { className: 'header' },
          'header'
        ),
        React.createElement('div', { className: 'help', dangerouslySetInnerHTML: { __html: body } })
      );
    }
  }]);

  return PluginBlock;
}(React.Component);

exports.default = PluginBlock;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var _distFromTop = 150;

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var top = 0;
      if (window.scrollY > _distFromTop) {
        top = window.scrollY - _distFromTop;
      }
      this.setState({ top: top });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        marginTop: this.state.top
      };
      return React.createElement(
        'div',
        { className: 'sidebar', style: style },
        React.createElement(
          'div',
          { className: 'block' },
          'list of sections / subsections'
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

exports.default = Sidebar;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var HomePage = function (_React$Component) {
  _inherits(HomePage, _React$Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'home container' },
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement(
              Link,
              { to: '/plugins' },
              React.createElement('img', { src: '/imgs/plugins.png' })
            )
          ),
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement(
              Link,
              { to: '/projects' },
              React.createElement('img', { src: '/imgs/projects.png' })
            )
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return HomePage;
}(React.Component);

exports.default = HomePage;

},{"./../components/footer":1}],6:[function(require,module,exports){
'use strict';

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _list = require('./plugins/list');

var _list2 = _interopRequireDefault(_list);

var _page = require('./plugins/page');

var _page2 = _interopRequireDefault(_page);

var _projects = require('./projects');

var _projects2 = _interopRequireDefault(_projects);

var _docs = require('./docs');

var _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ReactRouter = ReactRouter,
    Router = _ReactRouter.Router,
    Route = _ReactRouter.Route,
    IndexRoute = _ReactRouter.IndexRoute,
    hashHistory = _ReactRouter.hashHistory;

//import DocsList from './docs/list'
//import DocsPage from './docs/page'

ReactDOM.render(React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(Route, { path: '/', component: _home2.default }),
  React.createElement(
    Route,
    { path: '/plugins', component: _plugins2.default },
    React.createElement(IndexRoute, { component: _list2.default }),
    React.createElement(Route, { path: '/plugins/:pluginName', component: _page2.default })
  ),
  React.createElement(Route, { path: '/projects', component: _projects2.default })
), document.getElementById('site'));

},{"./docs":2,"./home":5,"./plugins":8,"./plugins/list":9,"./plugins/page":10,"./projects":14}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);
  }

  _createClass(PluginManager, null, [{
    key: 'load',
    value: function load(type, callback) {
      var file = void 0;
      if (type === 'plugins') {
        file = this.pluginsPath;
      } else if (type === 'tags') {
        file = this.tagsPath;
      } else {
        return;
      }
      var xhr = new XMLHttpRequest();
      xhr.overrideMimeType("application/json");
      xhr.open('GET', file, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == '200') {
          if (callback) {
            var obj = JSON.parse(xhr.responseText);
            callback(obj);
          }
        }
      };
      xhr.send(null);
    }
  }]);

  return PluginManager;
}();

PluginManager.pluginsPath = '/data/plugins.json';
PluginManager.tagsPath = '/data/tags.json';
exports.default = PluginManager;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginManager = require('./../pluginManager');

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginsPage = function (_React$Component) {
  _inherits(PluginsPage, _React$Component);

  function PluginsPage(props) {
    _classCallCheck(this, PluginsPage);

    var _this = _possibleConstructorReturn(this, (PluginsPage.__proto__ || Object.getPrototypeOf(PluginsPage)).call(this, props));

    _this.state = {
      plugins: [],
      tag: '',
      tags: []
    };
    return _this;
  }

  _createClass(PluginsPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _pluginManager2.default.load('plugins', this.setPlugins.bind(this));
      _pluginManager2.default.load('tags', this.setTags.bind(this));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (/\/plugins\/(.*)/i.test(nextProps.location.pathname)) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'setPlugins',
    value: function setPlugins(plugins) {
      this.setState({ plugins: plugins });
    }
  }, {
    key: 'getPlugin',
    value: function getPlugin(name) {
      var plugin = null;
      for (var i = 0; i < this.state.plugins.length; i++) {
        if (this.state.plugins[i].name === name) {
          plugin = this.state.plugins[i];
          break;
        }
      }
      return plugin;
    }
  }, {
    key: 'setTags',
    value: function setTags(newTags) {
      var names = Object.keys(newTags);
      var tags = [];
      names.forEach(function (name) {
        tags.push({
          name: name,
          val: newTags[name]
        });
      });
      this.setState({ tags: tags });
    }
  }, {
    key: 'setTag',
    value: function setTag(tag) {
      if (this.state.tag === tag) {
        tag = '';
      }
      this.setState({ tag: tag });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'RPG Maker MV Plugins';
      var pluginName = this.props.params.pluginName;
      var plugin = this.getPlugin(pluginName);
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container' },
          React.createElement(
            'div',
            { className: 'title' },
            pluginName || title
          ),
          React.createElement(
            'div',
            { className: 'content' },
            this.props.children && React.cloneElement(this.props.children, {
              tag: this.state.tag,
              setTag: this.setTag.bind(this),
              plugins: this.state.plugins,
              plugin: plugin
            })
          ),
          React.createElement(_sidebar2.default, {
            pluginName: pluginName,
            tag: this.state.tag,
            tags: this.state.tags,
            setTag: this.setTag.bind(this)
          }),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return PluginsPage;
}(React.Component);

exports.default = PluginsPage;

},{"./../components/footer":1,"./../pluginManager":7,"./sidebar":12}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginBlock = require('./pluginBlock');

var _pluginBlock2 = _interopRequireDefault(_pluginBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginList = function (_React$Component) {
  _inherits(PluginList, _React$Component);

  function PluginList() {
    _classCallCheck(this, PluginList);

    return _possibleConstructorReturn(this, (PluginList.__proto__ || Object.getPrototypeOf(PluginList)).apply(this, arguments));
  }

  _createClass(PluginList, [{
    key: 'filter',
    value: function filter(plugin) {
      var tag = this.props.tag;
      if (tag === '') return true;
      var tags = plugin.tags.split(',');
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].trim() === tag) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var plugins = this.props.plugins || [];
      return React.createElement(
        'div',
        { className: 'list' },
        plugins.filter(this.filter.bind(this)).map(function (plugin, i) {
          return React.createElement(_pluginBlock2.default, { key: i, plugin: plugin, setTag: _this2.props.setTag });
        })
      );
    }
  }]);

  return PluginList;
}(React.Component);

exports.default = PluginList;

},{"./pluginBlock":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginBlock = require('./pluginBlock');

var _pluginBlock2 = _interopRequireDefault(_pluginBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PluginPage = function (_React$Component) {
  _inherits(PluginPage, _React$Component);

  function PluginPage() {
    _classCallCheck(this, PluginPage);

    return _possibleConstructorReturn(this, (PluginPage.__proto__ || Object.getPrototypeOf(PluginPage)).apply(this, arguments));
  }

  _createClass(PluginPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(_pluginBlock2.default, { plugin: this.props.plugin, max: true, setTag: this.props.setTag })
      );
    }
  }]);

  return PluginPage;
}(React.Component);

exports.default = PluginPage;

},{"./pluginBlock":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginBlock = function (_React$Component) {
  _inherits(PluginBlock, _React$Component);

  function PluginBlock() {
    _classCallCheck(this, PluginBlock);

    return _possibleConstructorReturn(this, (PluginBlock.__proto__ || Object.getPrototypeOf(PluginBlock)).apply(this, arguments));
  }

  _createClass(PluginBlock, [{
    key: 'makeRequires',
    value: function makeRequires() {
      var _ref = this.props.plugin || {},
          requires = _ref.requires,
          download = _ref.download;

      if (requires) {
        requires = requires.trim();
        return React.createElement(
          'span',
          { className: 'sub' },
          '| Requires: ',
          React.createElement(
            Link,
            { to: '/plugins/' + requires },
            requires
          ),
          ' | ',
          React.createElement(
            'a',
            { href: download },
            'Download'
          )
        );
      } else {
        return React.createElement(
          'span',
          { className: 'sub' },
          '| ',
          React.createElement(
            'a',
            { href: download },
            'Download'
          )
        );
      }
    }
  }, {
    key: 'makeBody',
    value: function makeBody() {
      var _ref2 = this.props.plugin || {},
          video = _ref2.video,
          about = _ref2.about,
          help = _ref2.help;

      var body = '';
      if (video) {
        var code = /\?v=(.*)/.exec(video);
        if (code) {
          body += '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/' + code[1] + '" frameborder="0" allowfullscreen></iframe></center>';
        }
      }
      if (this.props.max) {
        body += about + '\n' + help;
      } else {
        body += '' + about;
      }
      return marked(body);
    }
  }, {
    key: 'makeTags',
    value: function makeTags() {
      var _this2 = this;

      var _ref3 = this.props.plugin || {},
          tags = _ref3.tags;

      if (!tags) return null;
      return tags.split(',').map(function (tag, i) {
        tag = tag.trim();
        return React.createElement(
          Link,
          {
            to: '/plugins',
            key: i,
            className: 'tag',
            onClick: _this2.onTag.bind(_this2, tag) },
          tag
        );
      });
    }
  }, {
    key: 'onTag',
    value: function onTag(tag) {
      this.props.setTag(tag);
    }
  }, {
    key: 'render',
    value: function render() {
      var _ref4 = this.props.plugin || {},
          name = _ref4.name,
          version = _ref4.version;

      var requires = this.makeRequires();
      var body = this.makeBody();
      var tags = this.makeTags();
      return React.createElement(
        'div',
        { className: 'block' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            Link,
            { to: '/plugins/' + name },
            name
          ),
          ' | ',
          React.createElement(
            'span',
            { className: 'sub' },
            'Version: ',
            version,
            ' ',
            this.makeRequires()
          )
        ),
        React.createElement('div', { className: 'help', dangerouslySetInnerHTML: { __html: body } }),
        React.createElement(
          'div',
          { className: 'footer' },
          'Tags: ',
          tags
        )
      );
    }
  }]);

  return PluginBlock;
}(React.Component);

exports.default = PluginBlock;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tags = require('./tags');

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var _distFromTop = 150;

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var top = 0;
      if (window.scrollY > _distFromTop) {
        top = window.scrollY - _distFromTop;
      }
      this.setState({ top: top });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = {
        marginTop: this.state.top
      };
      return React.createElement(
        'div',
        { className: 'sidebar', style: style },
        this.props.pluginName ? React.createElement(
          Link,
          { to: '/plugins', className: 'header' },
          'Back to Plugins'
        ) : null,
        React.createElement(_tags2.default, { tag: this.props.tag, tags: this.props.tags, setTag: this.props.setTag })
      );
    }
  }]);

  return Sidebar;
}(React.Component);

exports.default = Sidebar;

},{"./tags":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Link = _ReactRouter.Link;

var PluginTags = function (_React$Component) {
  _inherits(PluginTags, _React$Component);

  function PluginTags() {
    _classCallCheck(this, PluginTags);

    return _possibleConstructorReturn(this, (PluginTags.__proto__ || Object.getPrototypeOf(PluginTags)).apply(this, arguments));
  }

  _createClass(PluginTags, [{
    key: 'onClick',
    value: function onClick(tag) {
      this.props.setTag(tag);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'block' },
        this.props.tags.map(function (tag, i) {
          var name = tag.name,
              val = tag.val;

          var size = (Math.floor((val - 1) / 2) + 0.5) * 0.20 + 0.8;
          var style = { fontSize: size + 'em' };
          var className = 'tag';
          className += _this2.props.tag === name ? ' selected' : '';
          return React.createElement(
            Link,
            {
              to: '/plugins',
              key: i,
              className: className,
              style: style,
              onClick: _this2.onClick.bind(_this2, name) },
            name
          );
        })
      );
    }
  }]);

  return PluginTags;
}(React.Component);

exports.default = PluginTags;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _footer = require('./../components/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import Sidebar from './sidebar'


var ProjectsPage = function (_React$Component) {
  _inherits(ProjectsPage, _React$Component);

  function ProjectsPage(props) {
    _classCallCheck(this, ProjectsPage);

    var _this = _possibleConstructorReturn(this, (ProjectsPage.__proto__ || Object.getPrototypeOf(ProjectsPage)).call(this, props));

    _this.state = {
      docs: []
    };
    return _this;
  }

  _createClass(ProjectsPage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'page container projects' },
          React.createElement(
            'div',
            { className: 'title' },
            'Projects'
          ),
          React.createElement(
            'div',
            { className: 'block showcase' },
            React.createElement('img', { src: '/imgs/comingSoon.png' })
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return ProjectsPage;
}(React.Component);

exports.default = ProjectsPage;

},{"./../components/footer":1}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGRvY3NcXGluZGV4LmpzeCIsImVzNlxcZG9jc1xccGFnZS5qc3giLCJlczZcXGRvY3NcXHNpZGViYXIuanN4IiwiZXM2XFxob21lXFxpbmRleC5qc3giLCJlczZcXG1haW4uanN4IiwiZXM2XFxwbHVnaW5NYW5hZ2VyLmpzIiwiZXM2XFxwbHVnaW5zXFxpbmRleC5qc3giLCJlczZcXHBsdWdpbnNcXGxpc3QuanN4IiwiZXM2XFxwbHVnaW5zXFxwYWdlLmpzeCIsImVzNlxccGx1Z2luc1xccGx1Z2luQmxvY2suanN4IiwiZXM2XFxwbHVnaW5zXFxzaWRlYmFyLmpzeCIsImVzNlxccGx1Z2luc1xcdGFncy5qc3giLCJlczZcXHByb2plY3RzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztJQ0FxQixNOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxnQ0FBUjtBQUFBO0FBQUEsU0FERjtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUcsTUFBSyw0QkFBUjtBQUFBO0FBQUEsU0FGRjtBQUFBO0FBR0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQ0FBUjtBQUFBO0FBQUEsU0FIRjtBQUFBO0FBSUU7QUFBQTtBQUFBLFlBQUcsTUFBSywyQkFBUjtBQUFBO0FBQUE7QUFKRixPQURGO0FBUUQ7Ozs7RUFWaUMsTUFBTSxTOztrQkFBckIsTTs7Ozs7Ozs7Ozs7QUNBckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsUTs7O0FBQ25CLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU07QUFESyxLQUFiO0FBRmlCO0FB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QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsT0FBZjtBQUFBO0FBQUEsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFDRSx5Q0FBSyxLQUFJLHNCQUFUO0FBREYsV0FKRjtBQWFFO0FBYkY7QUFGRixPQURGO0FBb0JEOzs7O0VBL0J1QyxNQUFNLFM7O2tCQUEzQixZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIGZvb3Rlcic+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhdHJlb24uY29tL3F1eGlvc1wiPlBhdHJlb248L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9RdXhpb3NcIj5Ud2l0dGVyPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvUXV4aW9zRGV2XCI+WW91dHViZTwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcXV4aW9zXCI+R2l0aHViPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2UnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZG9jczogW11cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb25zdCB0aXRsZSA9ICdSUEcgTWFrZXIgTVYgUGx1Z2lucyc7XHJcbiAgICAvL2NvbnN0IHBsdWdpbk5hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5wbHVnaW5OYW1lO1xyXG4gICAgLy9jb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBjb250YWluZXIgZG9jcyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICBEb2N1bWVudGF0aW9uIFBhZ2VcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPFBhZ2UgLz5cclxuICAgICAgICAgICAgey8qIHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICB0YWc6IHRoaXMuc3RhdGUudGFnLFxyXG4gICAgICAgICAgICAgIHNldFRhZzogOjp0aGlzLnNldFRhZyxcclxuICAgICAgICAgICAgICBwbHVnaW5zOiB0aGlzLnN0YXRlLnBsdWdpbnMsXHJcbiAgICAgICAgICAgICAgcGx1Z2luXHJcbiAgICAgICAgICAgIH0pKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgbWFrZUJvZHkoKSB7XHJcbiAgICBsZXQgYm9keSA9XHJcbmB0ZXN0aW5nXHJcbiMgVEVTVFxyXG5cclxuLSBsaXN0XHJcbi0gbGlzdFxyXG4tIGxpc3RcclxuXHJcbn5+flxyXG4gY29kZVxyXG5+fn5cclxuYDtcclxuICAgIHJldHVybiBtYXJrZWQoYm9keSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLm1ha2VCb2R5KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgaGVhZGVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlbHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm9keX19PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuY29uc3QgX2Rpc3RGcm9tVG9wID0gMTUwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvcDogMFxyXG4gICAgfVxyXG4gICAgdGhpcy5vblNjcm9sbCA9IDo6dGhpcy5vblNjcm9sbDtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgb25TY3JvbGwoKSB7XHJcbiAgICBsZXQgdG9wID0gMDtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IF9kaXN0RnJvbVRvcCkge1xyXG4gICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWSAtIF9kaXN0RnJvbVRvcDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3AgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUudG9wXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcicgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgICAgbGlzdCBvZiBzZWN0aW9ucyAvIHN1YnNlY3Rpb25zXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSBjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHNob3djYXNlJz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvcGx1Z2luc1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1ncy9wbHVnaW5zLnBuZycgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgc2hvd2Nhc2UnPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1ncy9wcm9qZWN0cy5wbmcnIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgc2hvd2Nhc2UnPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9kb2NzXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL2RvY3MucG5nJyAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICovfVxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9ob21lJ1xyXG5cclxuaW1wb3J0IFBsdWdpbnNMYXlvdXQgZnJvbSAnLi9wbHVnaW5zJ1xyXG5pbXBvcnQgUGx1Z2luTGlzdCBmcm9tICcuL3BsdWdpbnMvbGlzdCdcclxuaW1wb3J0IFBsdWdpblBhZ2UgZnJvbSAnLi9wbHVnaW5zL3BhZ2UnXHJcblxyXG5pbXBvcnQgUHJvamVjdHNMYXlvdXQgZnJvbSAnLi9wcm9qZWN0cydcclxuXHJcbmltcG9ydCBEb2NzTGF5b3V0IGZyb20gJy4vZG9jcydcclxuLy9pbXBvcnQgRG9jc0xpc3QgZnJvbSAnLi9kb2NzL2xpc3QnXHJcbi8vaW1wb3J0IERvY3NQYWdlIGZyb20gJy4vZG9jcy9wYWdlJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0vPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvcGx1Z2luc1wiIGNvbXBvbmVudD17UGx1Z2luc0xheW91dH0+XHJcbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UGx1Z2luTGlzdH0vPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zLzpwbHVnaW5OYW1lXCIgY29tcG9uZW50PXtQbHVnaW5QYWdlfS8+XHJcbiAgICA8L1JvdXRlPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvcHJvamVjdHNcIiBjb21wb25lbnQ9e1Byb2plY3RzTGF5b3V0fS8+XHJcbiAgICB7Lyo8Um91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzTGF5b3V0fSAvPiovfVxyXG4gIDwvUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZScpXHJcbik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbk1hbmFnZXIge1xyXG4gIHN0YXRpYyBwbHVnaW5zUGF0aCA9ICcvZGF0YS9wbHVnaW5zLmpzb24nO1xyXG4gIHN0YXRpYyB0YWdzUGF0aCA9ICcvZGF0YS90YWdzLmpzb24nO1xyXG5cclxuICBzdGF0aWMgbG9hZCh0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGZpbGU7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3BsdWdpbnMnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnBsdWdpbnNQYXRoO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGFncycpIHtcclxuICAgICAgZmlsZSA9IHRoaXMudGFnc1BhdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbignR0VUJywgZmlsZSwgdHJ1ZSk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09ICcyMDAnKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAnLi8uLi9wbHVnaW5NYW5hZ2VyJ1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgICB0YWc6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3BsdWdpbnMnLCA6OnRoaXMuc2V0UGx1Z2lucyk7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3RhZ3MnLCA6OnRoaXMuc2V0VGFncyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAoL1xcL3BsdWdpbnNcXC8oLiopL2kudGVzdChuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UGx1Z2lucyhwbHVnaW5zKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGx1Z2lucyB9KTtcclxuICB9XHJcbiAgZ2V0UGx1Z2luKG5hbWUpIHtcclxuICAgIGxldCBwbHVnaW4gPSBudWxsO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucGx1Z2luc1tpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcGx1Z2luID0gdGhpcy5zdGF0ZS5wbHVnaW5zW2ldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGx1Z2luO1xyXG4gIH1cclxuICBzZXRUYWdzKG5ld1RhZ3MpIHtcclxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMobmV3VGFncyk7XHJcbiAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0YWdzLnB1c2goe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsOiBuZXdUYWdzW25hbWVdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcbiAgfVxyXG4gIHNldFRhZyh0YWcpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRhZyA9PT0gdGFnKSB7XHJcbiAgICAgIHRhZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZyB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSAnUlBHIE1ha2VyIE1WIFBsdWdpbnMnO1xyXG4gICAgY29uc3QgcGx1Z2luTmFtZSA9IHRoaXMucHJvcHMucGFyYW1zLnBsdWdpbk5hbWU7XHJcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgeyBwbHVnaW5OYW1lIHx8IHRpdGxlIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICB0YWc6IHRoaXMuc3RhdGUudGFnLFxyXG4gICAgICAgICAgICAgIHNldFRhZzogOjp0aGlzLnNldFRhZyxcclxuICAgICAgICAgICAgICBwbHVnaW5zOiB0aGlzLnN0YXRlLnBsdWdpbnMsXHJcbiAgICAgICAgICAgICAgcGx1Z2luXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBwbHVnaW5OYW1lPXtwbHVnaW5OYW1lfVxyXG4gICAgICAgICAgICB0YWc9e3RoaXMuc3RhdGUudGFnfVxyXG4gICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgIHNldFRhZz17Ojp0aGlzLnNldFRhZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGx1Z2luQmxvY2sgZnJvbSAnLi9wbHVnaW5CbG9jaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGZpbHRlcihwbHVnaW4pIHtcclxuICAgIGNvbnN0IHRhZyA9IHRoaXMucHJvcHMudGFnO1xyXG4gICAgaWYgKHRhZyA9PT0gJycpIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgdGFncyA9IHBsdWdpbi50YWdzLnNwbGl0KCcsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhZ3NbaV0udHJpbSgpID09PSB0YWcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwbHVnaW5zID0gdGhpcy5wcm9wcy5wbHVnaW5zIHx8IFtdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIHtwbHVnaW5zLmZpbHRlcig6OnRoaXMuZmlsdGVyKS5tYXAoKHBsdWdpbiwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5CbG9jayBrZXk9e2l9IHBsdWdpbj17cGx1Z2lufSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XHJcbiAgICAgICAgPFBsdWdpbkJsb2NrIHBsdWdpbj17dGhpcy5wcm9wcy5wbHVnaW59IG1heD17dHJ1ZX0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgbWFrZVJlcXVpcmVzKCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgcmVxdWlyZXMsXHJcbiAgICAgIGRvd25sb2FkXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBpZiAocmVxdWlyZXMpIHtcclxuICAgICAgcmVxdWlyZXMgPSByZXF1aXJlcy50cmltKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdWInPlxyXG4gICAgICAgICAgfCBSZXF1aXJlczogPExpbmsgdG89e2AvcGx1Z2lucy8ke3JlcXVpcmVzfWB9PlxyXG4gICAgICAgICAgICB7cmVxdWlyZXN9XHJcbiAgICAgICAgICA8L0xpbms+IHwgPGEgaHJlZj17ZG93bmxvYWR9PlxyXG4gICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICB8IDxhIGhyZWY9e2Rvd25sb2FkfT5cclxuICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgbWFrZUJvZHkoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHZpZGVvLFxyXG4gICAgICBhYm91dCxcclxuICAgICAgaGVscFxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgbGV0IGJvZHkgPSAnJztcclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICB2YXIgY29kZSA9IC9cXD92PSguKikvLmV4ZWModmlkZW8pO1xyXG4gICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgIGJvZHkgKz0gYDxjZW50ZXI+PGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7Y29kZVsxXX1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9jZW50ZXI+YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXgpIHtcclxuICAgICAgYm9keSArPSBgJHthYm91dH1cXG4ke2hlbHB9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keSArPSBgJHthYm91dH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcmtlZChib2R5KTtcclxuICB9XHJcbiAgbWFrZVRhZ3MoKSB7XHJcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgaWYgKCF0YWdzKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiB0YWdzLnNwbGl0KCcsJykubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgdGFnID0gdGFnLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgdG89Jy9wbHVnaW5zJ1xyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd0YWcnXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVGFnLmJpbmQodGhpcywgdGFnKX0+XHJcbiAgICAgICAgICB7dGFnfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25UYWcodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldFRhZyh0YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHZlcnNpb25cclxuICAgIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGNvbnN0IHJlcXVpcmVzID0gdGhpcy5tYWtlUmVxdWlyZXMoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLm1ha2VCb2R5KCk7XHJcbiAgICBjb25zdCB0YWdzID0gdGhpcy5tYWtlVGFncygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgIDxMaW5rIHRvPXtgL3BsdWdpbnMvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvTGluaz4gfCA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICAgIFZlcnNpb246IHt2ZXJzaW9ufSB7dGhpcy5tYWtlUmVxdWlyZXMoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlbHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm9keX19PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxyXG4gICAgICAgICAgVGFnczoge3RhZ3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgVGFncyBmcm9tICcuL3RhZ3MnXHJcblxyXG5jb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5jb25zdCBfZGlzdEZyb21Ub3AgPSAxNTA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9wOiAwXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2Nyb2xsID0gOjp0aGlzLm9uU2Nyb2xsO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBvblNjcm9sbCgpIHtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gX2Rpc3RGcm9tVG9wKSB7XHJcbiAgICAgIHRvcCA9IHdpbmRvdy5zY3JvbGxZIC0gX2Rpc3RGcm9tVG9wO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvcCB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS50b3BcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIHsgdGhpcy5wcm9wcy5wbHVnaW5OYW1lID8gPExpbmsgdG89Jy9wbHVnaW5zJyBjbGFzc05hbWU9J2hlYWRlcic+QmFjayB0byBQbHVnaW5zPC9MaW5rPiA6IG51bGwgfVxyXG4gICAgICAgIDxUYWdzIHRhZz17dGhpcy5wcm9wcy50YWd9IHRhZ3M9e3RoaXMucHJvcHMudGFnc30gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpblRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG9uQ2xpY2sodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldFRhZyh0YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsIH0gPSB0YWc7XHJcbiAgICAgICAgICBjb25zdCBzaXplID0gKChNYXRoLmZsb29yKCh2YWwgLSAxKSAvIDIpICsgMC41KSAqIDAuMjApICsgMC44O1xyXG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGZvbnRTaXplOiBgJHtzaXplfWVtYCB9O1xyXG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICd0YWcnO1xyXG4gICAgICAgICAgY2xhc3NOYW1lICs9IHRoaXMucHJvcHMudGFnID09PSBuYW1lID8gJyBzZWxlY3RlZCcgOiAnJztcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy9wbHVnaW5zJ1xyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcywgbmFtZSl9PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvL2ltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZG9jczogW11cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb25zdCB0aXRsZSA9ICdSUEcgTWFrZXIgTVYgUGx1Z2lucyc7XHJcbiAgICAvL2NvbnN0IHBsdWdpbk5hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5wbHVnaW5OYW1lO1xyXG4gICAgLy9jb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBjb250YWluZXIgcHJvamVjdHMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHNob3djYXNlJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL2NvbWluZ1Nvb24ucG5nJyAvPlxyXG4gICAgICAgICAgICB7LyogdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIHRhZzogdGhpcy5zdGF0ZS50YWcsXHJcbiAgICAgICAgICAgICAgc2V0VGFnOiA6OnRoaXMuc2V0VGFnLFxyXG4gICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuc3RhdGUucGx1Z2lucyxcclxuICAgICAgICAgICAgICBwbHVnaW5cclxuICAgICAgICAgICAgfSkqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19
