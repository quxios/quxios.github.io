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

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      unavailable: 0
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'showUnavailable',
    value: function showUnavailable() {
      this.setState({ unavailable: 1 });
    }
  }, {
    key: 'hideUnavailable',
    value: function hideUnavailable() {
      this.setState({ unavailable: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      var unavailable = {
        opacity: this.state.unavailable
      };
      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'qBg' }),
        React.createElement(
          'div',
          { className: 'home container' },
          React.createElement(
            'div',
            { className: 'block plugins' },
            React.createElement(
              Link,
              { to: '/plugins' },
              React.createElement('img', { src: '/imgs/plugins.png' })
            )
          ),
          React.createElement(
            'div',
            { className: 'block projects' },
            React.createElement('img', { src: '/imgs/projects.png',
              onMouseEnter: this.showUnavailable.bind(this),
              onMouseLeave: this.hideUnavailable.bind(this)
            }),
            React.createElement(
              'div',
              { className: 'unavailable', style: unavailable,
                onMouseEnter: this.showUnavailable.bind(this),
                onMouseLeave: this.hideUnavailable.bind(this) },
              'Not Available'
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

},{"./../components/footer":1}],3:[function(require,module,exports){
'use strict';

var _home = require('./home');

var _home2 = _interopRequireDefault(_home);

var _plugins = require('./plugins');

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

},{"./home":2,"./plugins":5,"./plugins/list":6,"./plugins/page":7}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
          { className: 'plugins container' },
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

},{"./../components/footer":1,"./../pluginManager":4,"./sidebar":9}],6:[function(require,module,exports){
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

},{"./pluginBlock":8}],7:[function(require,module,exports){
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

},{"./pluginBlock":8}],8:[function(require,module,exports){
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
          requires = _ref.requires;

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
          )
        );
      }
      return null;
    }
  }, {
    key: 'makeBody',
    value: function makeBody() {
      var _ref2 = this.props.plugin || {},
          video = _ref2.video,
          about = _ref2.about,
          help = _ref2.help;

      var body = void 0;
      if (video) {
        // embed video to top of body
      }
      if (this.props.max) {
        body = about + '\n' + help;
      } else {
        body = '' + about;
      }
      return marked(body, {
        sanitize: true
      });
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

},{}],9:[function(require,module,exports){
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

},{"./tags":10}],10:[function(require,module,exports){
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

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGhvbWVcXGluZGV4LmpzeCIsImVzNlxcbWFpbi5qc3giLCJlczZcXHBsdWdpbk1hbmFnZXIuanMiLCJlczZcXHBsdWdpbnNcXGluZGV4LmpzeCIsImVzNlxccGx1Z2luc1xcbGlzdC5qc3giLCJlczZcXHBsdWdpbnNcXHBhZ2UuanN4IiwiZXM2XFxwbHVnaW5zXFxwbHVnaW5CbG9jay5qc3giLCJlczZcXHBsdWdpbnNcXHNpZGViYXIuanN4IiwiZXM2XFxwbHVnaW5zXFx0YWdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDRCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFDQUFSO0FBQUE7QUFBQSxTQUhGO0FBQUE7QUFJRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7OztFQVZpQyxNQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7OztBQ0VyQjs7Ozs7Ozs7Ozs7O21CQUZpQixXO0lBQVQsSSxnQkFBQSxJOztJQUlhLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYTtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7c0NBQ2lCO0FBQ2hCLFdBQUssUUFBTCxDQUFjLEVBQUUsYUFBYSxDQUFmLEVBQWQ7QUFDRDs7O3NDQUNpQjtBQUNoQixXQUFLLFFBQUwsQ0FB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QixHQUEwQixXQUExQixHQUF3QyxFQUFyRDtBQUNBLGlCQUNFO0FBQUMsZ0JBQUQ7QUFBQTtBQUNFLGtCQUFHLFVBREw7QUFFRSxtQkFBSyxDQUZQO0FBR0UseUJBQVcsU0FIYjtBQUlFLHFCQUFPLEtBSlQ7QUFLRSx1QkFBUyxPQUFLLE9BQUwsQ0FBYSxJQUFiLFNBQXdCLElBQXhCLENBTFg7QUFNRztBQU5ILFdBREY7QUFVRCxTQWhCQTtBQURILE9BREY7QUFxQkQ7Ozs7RUExQnFDLE1BQU0sUzs7a0JBQXpCLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgZm9vdGVyJz5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcXV4aW9zXCI+UGF0cmVvbjwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1F1eGlvc1wiPlR3aXR0ZXI8L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9RdXhpb3NEZXZcIj5Zb3V0dWJlPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9xdXhpb3NcIj5HaXRodWI8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1bmF2YWlsYWJsZTogMFxyXG4gICAgfVxyXG4gIH1cclxuICBzaG93VW5hdmFpbGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdW5hdmFpbGFibGU6IDEgfSk7XHJcbiAgfVxyXG4gIGhpZGVVbmF2YWlsYWJsZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1bmF2YWlsYWJsZTogMCB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIHVuYXZhaWxhYmxlID0ge1xyXG4gICAgICBvcGFjaXR5OiB0aGlzLnN0YXRlLnVuYXZhaWxhYmxlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxQmcnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUgY29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBwbHVnaW5zJz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvcGx1Z2luc1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1ncy9wbHVnaW5zLnBuZycgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgcHJvamVjdHMnPlxyXG4gICAgICAgICAgICB7Lyo8TGluayB0bz1cIi9wcm9qZWN0c1wiPiovfVxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1ncy9wcm9qZWN0cy5wbmcnXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9ezo6dGhpcy5zaG93VW5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9ezo6dGhpcy5oaWRlVW5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qPC9MaW5rPiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5hdmFpbGFibGUnIHN0eWxlPXt1bmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9ezo6dGhpcy5zaG93VW5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXs6OnRoaXMuaGlkZVVuYXZhaWxhYmxlfSA+XHJcbiAgICAgICAgICAgICAgTm90IEF2YWlsYWJsZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9ob21lJ1xyXG5pbXBvcnQgUGx1Z2luc0xheW91dCBmcm9tICcuL3BsdWdpbnMnXHJcbmltcG9ydCBQbHVnaW5MaXN0IGZyb20gJy4vcGx1Z2lucy9saXN0J1xyXG5pbXBvcnQgUGx1Z2luUGFnZSBmcm9tICcuL3BsdWdpbnMvcGFnZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZVBhZ2V9Lz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL3BsdWdpbnNcIiBjb21wb25lbnQ9e1BsdWdpbnNMYXlvdXR9PlxyXG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e1BsdWdpbkxpc3R9Lz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvcGx1Z2lucy86cGx1Z2luTmFtZVwiIGNvbXBvbmVudD17UGx1Z2luUGFnZX0vPlxyXG4gICAgPC9Sb3V0ZT5cclxuICAgIHsvKjxSb3V0ZSBwYXRoPVwiL3Byb2plY3RzXCIgY29tcG9uZW50PXtQcm9qZWN0c0xheW91dH0vPiovfVxyXG4gIDwvUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZScpXHJcbik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbk1hbmFnZXIge1xyXG4gIHN0YXRpYyBwbHVnaW5zUGF0aCA9ICcvZGF0YS9wbHVnaW5zLmpzb24nO1xyXG4gIHN0YXRpYyB0YWdzUGF0aCA9ICcvZGF0YS90YWdzLmpzb24nO1xyXG5cclxuICBzdGF0aWMgbG9hZCh0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IGZpbGU7XHJcbiAgICBpZiAodHlwZSA9PT0gJ3BsdWdpbnMnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnBsdWdpbnNQYXRoO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGFncycpIHtcclxuICAgICAgZmlsZSA9IHRoaXMudGFnc1BhdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICB4aHIub3BlbignR0VUJywgZmlsZSwgdHJ1ZSk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09ICcyMDAnKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAnLi8uLi9wbHVnaW5NYW5hZ2VyJ1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgICB0YWc6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3BsdWdpbnMnLCA6OnRoaXMuc2V0UGx1Z2lucyk7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3RhZ3MnLCA6OnRoaXMuc2V0VGFncyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBpZiAoL1xcL3BsdWdpbnNcXC8oLiopL2kudGVzdChuZXh0UHJvcHMubG9jYXRpb24ucGF0aG5hbWUpKSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UGx1Z2lucyhwbHVnaW5zKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGx1Z2lucyB9KTtcclxuICB9XHJcbiAgZ2V0UGx1Z2luKG5hbWUpIHtcclxuICAgIGxldCBwbHVnaW4gPSBudWxsO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucGx1Z2luc1tpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcGx1Z2luID0gdGhpcy5zdGF0ZS5wbHVnaW5zW2ldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGx1Z2luO1xyXG4gIH1cclxuICBzZXRUYWdzKG5ld1RhZ3MpIHtcclxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMobmV3VGFncyk7XHJcbiAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0YWdzLnB1c2goe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsOiBuZXdUYWdzW25hbWVdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcbiAgfVxyXG4gIHNldFRhZyh0YWcpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRhZyA9PT0gdGFnKSB7XHJcbiAgICAgIHRhZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZyB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSAnUlBHIE1ha2VyIE1WIFBsdWdpbnMnO1xyXG4gICAgY29uc3QgcGx1Z2luTmFtZSA9IHRoaXMucHJvcHMucGFyYW1zLnBsdWdpbk5hbWU7XHJcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGx1Z2lucyBjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgeyBwbHVnaW5OYW1lIHx8IHRpdGxlIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICB0YWc6IHRoaXMuc3RhdGUudGFnLFxyXG4gICAgICAgICAgICAgIHNldFRhZzogOjp0aGlzLnNldFRhZyxcclxuICAgICAgICAgICAgICBwbHVnaW5zOiB0aGlzLnN0YXRlLnBsdWdpbnMsXHJcbiAgICAgICAgICAgICAgcGx1Z2luXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBwbHVnaW5OYW1lPXtwbHVnaW5OYW1lfVxyXG4gICAgICAgICAgICB0YWc9e3RoaXMuc3RhdGUudGFnfVxyXG4gICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgIHNldFRhZz17Ojp0aGlzLnNldFRhZ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGx1Z2luQmxvY2sgZnJvbSAnLi9wbHVnaW5CbG9jaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGZpbHRlcihwbHVnaW4pIHtcclxuICAgIGNvbnN0IHRhZyA9IHRoaXMucHJvcHMudGFnO1xyXG4gICAgaWYgKHRhZyA9PT0gJycpIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgdGFncyA9IHBsdWdpbi50YWdzLnNwbGl0KCcsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhZ3NbaV0udHJpbSgpID09PSB0YWcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwbHVnaW5zID0gdGhpcy5wcm9wcy5wbHVnaW5zIHx8IFtdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIHtwbHVnaW5zLmZpbHRlcig6OnRoaXMuZmlsdGVyKS5tYXAoKHBsdWdpbiwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5CbG9jayBrZXk9e2l9IHBsdWdpbj17cGx1Z2lufSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XHJcbiAgICAgICAgPFBsdWdpbkJsb2NrIHBsdWdpbj17dGhpcy5wcm9wcy5wbHVnaW59IG1heD17dHJ1ZX0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgbWFrZVJlcXVpcmVzKCkge1xyXG4gICAgbGV0IHsgcmVxdWlyZXMgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgaWYgKHJlcXVpcmVzKSB7XHJcbiAgICAgIHJlcXVpcmVzID0gcmVxdWlyZXMudHJpbSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgIHwgUmVxdWlyZXM6IDxMaW5rIHRvPXtgL3BsdWdpbnMvJHtyZXF1aXJlc31gfT57cmVxdWlyZXN9PC9MaW5rPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIG1ha2VCb2R5KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB2aWRlbyxcclxuICAgICAgYWJvdXQsXHJcbiAgICAgIGhlbHBcclxuICAgIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGxldCBib2R5O1xyXG4gICAgaWYgKHZpZGVvKSB7XHJcbiAgICAgIC8vIGVtYmVkIHZpZGVvIHRvIHRvcCBvZiBib2R5XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXgpIHtcclxuICAgICAgYm9keSA9IGAke2Fib3V0fVxcbiR7aGVscH1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5ID0gYCR7YWJvdXR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrZWQoYm9keSwge1xyXG4gICAgICBzYW5pdGl6ZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG1ha2VUYWdzKCkge1xyXG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGlmICghdGFncykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gdGFncy5zcGxpdCgnLCcpLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgIHRhZyA9IHRhZy50cmltKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHRvPScvcGx1Z2lucydcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0ndGFnJ1xyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vblRhZy5iaW5kKHRoaXMsIHRhZyl9PlxyXG4gICAgICAgICAge3RhZ31cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uVGFnKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRUYWcodGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB2ZXJzaW9uXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBjb25zdCByZXF1aXJlcyA9IHRoaXMubWFrZVJlcXVpcmVzKCk7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5tYWtlQm9keSgpO1xyXG4gICAgY29uc3QgdGFncyA9IHRoaXMubWFrZVRhZ3MoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9wbHVnaW5zLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L0xpbms+IHwgPHNwYW4gY2xhc3NOYW1lPSdzdWInPlxyXG4gICAgICAgICAgICBWZXJzaW9uOiB7dmVyc2lvbn0ge3RoaXMubWFrZVJlcXVpcmVzKCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWxwJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJvZHl9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICAgIFRhZ3M6IHt0YWdzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRhZ3MgZnJvbSAnLi90YWdzJ1xyXG5cclxuY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuY29uc3QgX2Rpc3RGcm9tVG9wID0gMTUwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvcDogMFxyXG4gICAgfVxyXG4gICAgdGhpcy5vblNjcm9sbCA9IDo6dGhpcy5vblNjcm9sbDtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgb25TY3JvbGwoKSB7XHJcbiAgICBsZXQgdG9wID0gMDtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IF9kaXN0RnJvbVRvcCkge1xyXG4gICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWSAtIF9kaXN0RnJvbVRvcDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3AgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUudG9wXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcicgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7IHRoaXMucHJvcHMucGx1Z2luTmFtZSA/IDxMaW5rIHRvPScvcGx1Z2lucycgY2xhc3NOYW1lPSdoZWFkZXInPkJhY2sgdG8gUGx1Z2luczwvTGluaz4gOiBudWxsIH1cclxuICAgICAgICA8VGFncyB0YWc9e3RoaXMucHJvcHMudGFnfSB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5UYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBvbkNsaWNrKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRUYWcodGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbCB9ID0gdGFnO1xyXG4gICAgICAgICAgY29uc3Qgc2l6ZSA9ICgoTWF0aC5mbG9vcigodmFsIC0gMSkgLyAyKSArIDAuNSkgKiAwLjIwKSArIDAuODtcclxuICAgICAgICAgIGNvbnN0IHN0eWxlID0geyBmb250U2l6ZTogYCR7c2l6ZX1lbWAgfTtcclxuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAndGFnJztcclxuICAgICAgICAgIGNsYXNzTmFtZSArPSB0aGlzLnByb3BzLnRhZyA9PT0gbmFtZSA/ICcgc2VsZWN0ZWQnIDogJyc7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIHRvPScvcGx1Z2lucydcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGljay5iaW5kKHRoaXMsIG5hbWUpfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19
