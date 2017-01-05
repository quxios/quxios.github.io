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
      var _this = this;

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
            if (type === 'plugins') {
              callback(_this.filterPlugins(obj));
            } else {
              callback(obj);
            }
          }
        }
      };
      xhr.send(null);
    }
  }, {
    key: 'filterPlugins',
    value: function filterPlugins(plugins) {
      var final = [];
      this.pluginList.forEach(function (plugin) {
        for (var i = 0; i < plugins.length; i++) {
          if (plugins[i].name === plugin) {
            final.push(plugins[i]);
            break;
          }
        }
      });
      return final;
    }
  }]);

  return PluginManager;
}();

PluginManager.pluginList = ['QPlus', 'QSprite', 'QAudio', 'QInput', 'QInputRemap', 'QNameInput', 'QSpeed'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGhvbWVcXGluZGV4LmpzeCIsImVzNlxcbWFpbi5qc3giLCJlczZcXHBsdWdpbk1hbmFnZXIuanMiLCJlczZcXHBsdWdpbnNcXGluZGV4LmpzeCIsImVzNlxccGx1Z2luc1xcbGlzdC5qc3giLCJlczZcXHBsdWdpbnNcXHBhZ2UuanN4IiwiZXM2XFxwbHVnaW5zXFxwbHVnaW5CbG9jay5qc3giLCJlczZcXHBsdWdpbnNcXHNpZGViYXIuanN4IiwiZXM2XFxwbHVnaW5zXFx0YWdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDRCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFDQUFSO0FBQUE7QUFBQSxTQUhGO0FBQUE7QUFJRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7OztFQVZpQyxNQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7OztBQ0VyQjs7Ozs7Ozs7Ozs7O21CQUZpQixXO0lBQVQsSSxnQkFBQSxJOztJQUlhLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYTtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7c0NBQ2lCO0FBQ2hCLFdBQUssUUFBTCxDQUFjLEVBQUUsYUFBYSxDQUFmLEVBQWQ7QUFDRDs7O3NDQUNpQjtBQUNoQixXQUFLLFFBQUwsQ0FB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QWY7QUFDRyxhQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBWTtBQUFBLGNBQ3ZCLElBRHVCLEdBQ1QsR0FEUyxDQUN2QixJQUR1QjtBQUFBLGNBQ2pCLEdBRGlCLEdBQ1QsR0FEUyxDQUNqQixHQURpQjs7QUFFL0IsY0FBTSxPQUFRLENBQUMsS0FBSyxLQUFMLENBQVcsQ0FBQyxNQUFNLENBQVAsSUFBWSxDQUF2QixJQUE0QixHQUE3QixJQUFvQyxJQUFyQyxHQUE2QyxHQUExRDtBQUNBLGNBQU0sUUFBUSxFQUFFLFVBQWEsSUFBYixPQUFGLEVBQWQ7QUFDQSxjQUFJLFlBQVksS0FBaEI7QUFDQSx1QkFBYSxPQUFLLEtBQUwsQ0FBVyxHQUFYLEtBQW1CLElBQW5CLEdBQTBCLFdBQTFCLEdBQXdDLEVBQXJEO0FBQ0EsaUJBQ0U7QUFBQyxnQkFBRDtBQUFBO0FBQ0Usa0JBQUcsVUFETDtBQUVFLG1CQUFLLENBRlA7QUFHRSx5QkFBVyxTQUhiO0FBSUUscUJBQU8sS0FKVDtBQUtFLHVCQUFTLE9BQUssT0FBTCxDQUFhLElBQWIsU0FBd0IsSUFBeEIsQ0FMWDtBQU1HO0FBTkgsV0FERjtBQVVELFNBaEJBO0FBREgsT0FERjtBQXFCRDs7OztFQTFCcUMsTUFBTSxTOztrQkFBekIsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBmb290ZXInPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wYXRyZW9uLmNvbS9xdXhpb3NcIj5QYXRyZW9uPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vUXV4aW9zXCI+VHdpdHRlcjwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jL1F1eGlvc0RldlwiPllvdXR1YmU8L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3F1eGlvc1wiPkdpdGh1YjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHVuYXZhaWxhYmxlOiAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dVbmF2YWlsYWJsZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1bmF2YWlsYWJsZTogMSB9KTtcclxuICB9XHJcbiAgaGlkZVVuYXZhaWxhYmxlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVuYXZhaWxhYmxlOiAwIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICB2YXIgdW5hdmFpbGFibGUgPSB7XHJcbiAgICAgIG9wYWNpdHk6IHRoaXMuc3RhdGUudW5hdmFpbGFibGVcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSBjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHBsdWdpbnMnPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9wbHVnaW5zXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3BsdWdpbnMucG5nJyAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBwcm9qZWN0cyc+XHJcbiAgICAgICAgICAgIHsvKjxMaW5rIHRvPVwiL3Byb2plY3RzXCI+Ki99XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3Byb2plY3RzLnBuZydcclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17Ojp0aGlzLnNob3dVbmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17Ojp0aGlzLmhpZGVVbmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7Lyo8L0xpbms+Ki99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1bmF2YWlsYWJsZScgc3R5bGU9e3VuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17Ojp0aGlzLnNob3dVbmF2YWlsYWJsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9ezo6dGhpcy5oaWRlVW5hdmFpbGFibGV9ID5cclxuICAgICAgICAgICAgICBOb3QgQXZhaWxhYmxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWUnXHJcbmltcG9ydCBQbHVnaW5zTGF5b3V0IGZyb20gJy4vcGx1Z2lucydcclxuaW1wb3J0IFBsdWdpbkxpc3QgZnJvbSAnLi9wbHVnaW5zL2xpc3QnXHJcbmltcG9ydCBQbHVnaW5QYWdlIGZyb20gJy4vcGx1Z2lucy9wYWdlJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0vPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvcGx1Z2luc1wiIGNvbXBvbmVudD17UGx1Z2luc0xheW91dH0+XHJcbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UGx1Z2luTGlzdH0vPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zLzpwbHVnaW5OYW1lXCIgY29tcG9uZW50PXtQbHVnaW5QYWdlfS8+XHJcbiAgICA8L1JvdXRlPlxyXG4gICAgey8qPFJvdXRlIHBhdGg9XCIvcHJvamVjdHNcIiBjb21wb25lbnQ9e1Byb2plY3RzTGF5b3V0fS8+Ki99XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXRlJylcclxuKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luTWFuYWdlciB7XHJcbiAgc3RhdGljIHBsdWdpbkxpc3QgPSBbXHJcbiAgICAnUVBsdXMnLFxyXG4gICAgJ1FTcHJpdGUnLFxyXG4gICAgJ1FBdWRpbycsXHJcbiAgICAnUUlucHV0JyxcclxuICAgICdRSW5wdXRSZW1hcCcsXHJcbiAgICAnUU5hbWVJbnB1dCcsXHJcbiAgICAnUVNwZWVkJ1xyXG4gIF1cclxuICBzdGF0aWMgcGx1Z2luc1BhdGggPSAnL2RhdGEvcGx1Z2lucy5qc29uJztcclxuICBzdGF0aWMgdGFnc1BhdGggPSAnL2RhdGEvdGFncy5qc29uJztcclxuXHJcbiAgc3RhdGljIGxvYWQodHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmaWxlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdwbHVnaW5zJykge1xyXG4gICAgICBmaWxlID0gdGhpcy5wbHVnaW5zUGF0aDtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RhZ3MnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnRhZ3NQYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUsIHRydWUpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAnMjAwJykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3BsdWdpbnMnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuZmlsdGVyUGx1Z2lucyhvYmopKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9XHJcbiAgc3RhdGljIGZpbHRlclBsdWdpbnMocGx1Z2lucykge1xyXG4gICAgbGV0IGZpbmFsID0gW107XHJcbiAgICB0aGlzLnBsdWdpbkxpc3QuZm9yRWFjaCgocGx1Z2luKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwbHVnaW5zW2ldLm5hbWUgPT09IHBsdWdpbikge1xyXG4gICAgICAgICAgZmluYWwucHVzaChwbHVnaW5zW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAnLi8uLi9wbHVnaW5NYW5hZ2VyJ1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgICB0YWc6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3BsdWdpbnMnLCA6OnRoaXMuc2V0UGx1Z2lucyk7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3RhZ3MnLCA6OnRoaXMuc2V0VGFncyk7XHJcbiAgfVxyXG4gIHNldFBsdWdpbnMocGx1Z2lucykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBsdWdpbnMgfSk7XHJcbiAgfVxyXG4gIGdldFBsdWdpbihuYW1lKSB7XHJcbiAgICBsZXQgcGx1Z2luID0gbnVsbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnBsdWdpbnNbaV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHBsdWdpbiA9IHRoaXMuc3RhdGUucGx1Z2luc1tpXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBsdWdpbjtcclxuICB9XHJcbiAgc2V0VGFncyhuZXdUYWdzKSB7XHJcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKG5ld1RhZ3MpO1xyXG4gICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGFncy5wdXNoKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHZhbDogbmV3VGFnc1tuYW1lXVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG4gIH1cclxuICBzZXRUYWcodGFnKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS50YWcgPT09IHRhZykge1xyXG4gICAgICB0YWcgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWcgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gJ1JQRyBNYWtlciBNViBQbHVnaW5zJztcclxuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5wbHVnaW5OYW1lO1xyXG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4ocGx1Z2luTmFtZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxQmcnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsdWdpbnMgY29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIHsgcGx1Z2luTmFtZSB8fCB0aXRsZSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuICYmIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XHJcbiAgICAgICAgICAgICAgdGFnOiB0aGlzLnN0YXRlLnRhZyxcclxuICAgICAgICAgICAgICBzZXRUYWc6IDo6dGhpcy5zZXRUYWcsXHJcbiAgICAgICAgICAgICAgcGx1Z2luczogdGhpcy5zdGF0ZS5wbHVnaW5zLFxyXG4gICAgICAgICAgICAgIHBsdWdpblxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgcGx1Z2luTmFtZT17cGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgdGFnPXt0aGlzLnN0YXRlLnRhZ31cclxuICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICBzZXRUYWc9ezo6dGhpcy5zZXRUYWd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBmaWx0ZXIocGx1Z2luKSB7XHJcbiAgICBjb25zdCB0YWcgPSB0aGlzLnByb3BzLnRhZztcclxuICAgIGlmICh0YWcgPT09ICcnKSByZXR1cm4gdHJ1ZTtcclxuICAgIGNvbnN0IHRhZ3MgPSBwbHVnaW4udGFncy5zcGxpdCgnLCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YWdzW2ldLnRyaW0oKSA9PT0gdGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcGx1Z2lucyA9IHRoaXMucHJvcHMucGx1Z2lucyB8fCBbXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cclxuICAgICAgICB7cGx1Z2lucy5maWx0ZXIoOjp0aGlzLmZpbHRlcikubWFwKChwbHVnaW4sIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8UGx1Z2luQmxvY2sga2V5PXtpfSBwbHVnaW49e3BsdWdpbn0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5CbG9jayBmcm9tICcuL3BsdWdpbkJsb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIDxQbHVnaW5CbG9jayBwbHVnaW49e3RoaXMucHJvcHMucGx1Z2lufSBtYXg9e3RydWV9IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG1ha2VSZXF1aXJlcygpIHtcclxuICAgIGxldCB7IHJlcXVpcmVzIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGlmIChyZXF1aXJlcykge1xyXG4gICAgICByZXF1aXJlcyA9IHJlcXVpcmVzLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICB8IFJlcXVpcmVzOiA8TGluayB0bz17YC9wbHVnaW5zLyR7cmVxdWlyZXN9YH0+e3JlcXVpcmVzfTwvTGluaz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBtYWtlQm9keSgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdmlkZW8sXHJcbiAgICAgIGFib3V0LFxyXG4gICAgICBoZWxwXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBsZXQgYm9keTtcclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICAvLyBlbWJlZCB2aWRlbyB0byB0b3Agb2YgYm9keVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4KSB7XHJcbiAgICAgIGJvZHkgPSBgJHthYm91dH1cXG4ke2hlbHB9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keSA9IGAke2Fib3V0fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya2VkKGJvZHksIHtcclxuICAgICAgc2FuaXRpemU6IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuICBtYWtlVGFncygpIHtcclxuICAgIGNvbnN0IHsgdGFncyB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBpZiAoIXRhZ3MpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRhZ3Muc3BsaXQoJywnKS5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICB0YWcgPSB0YWcudHJpbSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICB0bz0nL3BsdWdpbnMnXHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3RhZydcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25UYWcuYmluZCh0aGlzLCB0YWcpfT5cclxuICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuICBvblRhZyh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdmVyc2lvblxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgY29uc3QgcmVxdWlyZXMgPSB0aGlzLm1ha2VSZXF1aXJlcygpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMubWFrZUJvZHkoKTtcclxuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLm1ha2VUYWdzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvcGx1Z2lucy8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9MaW5rPiB8IDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgICAgVmVyc2lvbjoge3ZlcnNpb259IHt0aGlzLm1ha2VSZXF1aXJlcygpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVscCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBib2R5fX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgICBUYWdzOiB7dGFnc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYWdzIGZyb20gJy4vdGFncydcclxuXHJcbmNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcbmNvbnN0IF9kaXN0RnJvbVRvcCA9IDE1MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3A6IDBcclxuICAgIH1cclxuICAgIHRoaXMub25TY3JvbGwgPSA6OnRoaXMub25TY3JvbGw7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKCkge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBfZGlzdEZyb21Ub3ApIHtcclxuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgLSBfZGlzdEZyb21Ub3A7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnRvcFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgeyB0aGlzLnByb3BzLnBsdWdpbk5hbWUgPyA8TGluayB0bz0nL3BsdWdpbnMnIGNsYXNzTmFtZT0naGVhZGVyJz5CYWNrIHRvIFBsdWdpbnM8L0xpbms+IDogbnVsbCB9XHJcbiAgICAgICAgPFRhZ3MgdGFnPXt0aGlzLnByb3BzLnRhZ30gdGFncz17dGhpcy5wcm9wcy50YWdzfSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luVGFncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DbGljayh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWwgfSA9IHRhZztcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSAoKE1hdGguZmxvb3IoKHZhbCAtIDEpIC8gMikgKyAwLjUpICogMC4yMCkgKyAwLjg7XHJcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgZm9udFNpemU6IGAke3NpemV9ZW1gIH07XHJcbiAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ3RhZyc7XHJcbiAgICAgICAgICBjbGFzc05hbWUgKz0gdGhpcy5wcm9wcy50YWcgPT09IG5hbWUgPyAnIHNlbGVjdGVkJyA6ICcnO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz0nL3BsdWdpbnMnXHJcbiAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCBuYW1lKX0+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdfQ==
