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

PluginManager.pluginList = ['QPlus', 'QSprite', 'QAudio'];
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
          React.createElement(_sidebar2.default, { tags: this.state.tags, setTag: this.setTag.bind(this) }),
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

var _distFromTop = 160;

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
        React.createElement(_tags2.default, { tags: this.props.tags, setTag: this.props.setTag })
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

          var size = (Math.floor(val / 2) + 0.5) * 0.20 + 0.8;
          var style = { fontSize: size + 'em' };
          return React.createElement(
            Link,
            {
              to: '/plugins',
              key: i,
              className: 'tag',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGhvbWVcXGluZGV4LmpzeCIsImVzNlxcbWFpbi5qc3giLCJlczZcXHBsdWdpbk1hbmFnZXIuanMiLCJlczZcXHBsdWdpbnNcXGluZGV4LmpzeCIsImVzNlxccGx1Z2luc1xcbGlzdC5qc3giLCJlczZcXHBsdWdpbnNcXHBhZ2UuanN4IiwiZXM2XFxwbHVnaW5zXFxwbHVnaW5CbG9jay5qc3giLCJlczZcXHBsdWdpbnNcXHNpZGViYXIuanN4IiwiZXM2XFxwbHVnaW5zXFx0YWdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDRCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFDQUFSO0FBQUE7QUFBQSxTQUhGO0FBQUE7QUFJRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7OztFQVZpQyxNQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7OztBQ0VyQjs7Ozs7Ozs7Ozs7O21CQUZpQixXO0lBQVQsSSxnQkFBQSxJOztJQUlhLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYTtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7c0NBQ2lCO0FBQ2hCLFdBQUssUUFBTCxDQUFjLEVBQUUsYUFBYSxDQUFmLEVBQWQ7QUFDRDs7O3NDQUNpQjtBQUNoQixXQUFLLFFBQUwsQ0FB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QU8sS0FKVDtBQUtFLHVCQUFTLE9BQUssT0FBTCxDQUFhLElBQWIsU0FBd0IsSUFBeEIsQ0FMWDtBQU1HO0FBTkgsV0FERjtBQVVELFNBZEE7QUFESCxPQURGO0FBbUJEOzs7O0VBeEJxQyxNQUFNLFM7O2tCQUF6QixVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIGZvb3Rlcic+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhdHJlb24uY29tL3F1eGlvc1wiPlBhdHJlb248L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9RdXhpb3NcIj5Ud2l0dGVyPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvUXV4aW9zRGV2XCI+WW91dHViZTwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcXV4aW9zXCI+R2l0aHViPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdW5hdmFpbGFibGU6IDBcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd1VuYXZhaWxhYmxlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVuYXZhaWxhYmxlOiAxIH0pO1xyXG4gIH1cclxuICBoaWRlVW5hdmFpbGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdW5hdmFpbGFibGU6IDAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB1bmF2YWlsYWJsZSA9IHtcclxuICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS51bmF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgcGx1Z2lucyc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BsdWdpbnNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvcGx1Z2lucy5wbmcnIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHByb2plY3RzJz5cclxuICAgICAgICAgICAgey8qPExpbmsgdG89XCIvcHJvamVjdHNcIj4qL31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvcHJvamVjdHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXs6OnRoaXMuc2hvd1VuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXs6OnRoaXMuaGlkZVVuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKjwvTGluaz4qL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYXZhaWxhYmxlJyBzdHlsZT17dW5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXs6OnRoaXMuc2hvd1VuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17Ojp0aGlzLmhpZGVVbmF2YWlsYWJsZX0gPlxyXG4gICAgICAgICAgICAgIE5vdCBBdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgaGFzaEhpc3RvcnkgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IFBsdWdpbnNMYXlvdXQgZnJvbSAnLi9wbHVnaW5zJ1xyXG5pbXBvcnQgUGx1Z2luTGlzdCBmcm9tICcuL3BsdWdpbnMvbGlzdCdcclxuaW1wb3J0IFBsdWdpblBhZ2UgZnJvbSAnLi9wbHVnaW5zL3BhZ2UnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfS8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zXCIgY29tcG9uZW50PXtQbHVnaW5zTGF5b3V0fT5cclxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtQbHVnaW5MaXN0fS8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BsdWdpbnMvOnBsdWdpbk5hbWVcIiBjb21wb25lbnQ9e1BsdWdpblBhZ2V9Lz5cclxuICAgIDwvUm91dGU+XHJcbiAgICB7Lyo8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGNvbXBvbmVudD17UHJvamVjdHNMYXlvdXR9Lz4qL31cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUnKVxyXG4pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5NYW5hZ2VyIHtcclxuICBzdGF0aWMgcGx1Z2luTGlzdCA9IFtcclxuICAgICdRUGx1cycsXHJcbiAgICAnUVNwcml0ZScsXHJcbiAgICAnUUF1ZGlvJ1xyXG4gIF1cclxuICBzdGF0aWMgcGx1Z2luc1BhdGggPSAnL2RhdGEvcGx1Z2lucy5qc29uJztcclxuICBzdGF0aWMgdGFnc1BhdGggPSAnL2RhdGEvdGFncy5qc29uJztcclxuXHJcbiAgc3RhdGljIGxvYWQodHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmaWxlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdwbHVnaW5zJykge1xyXG4gICAgICBmaWxlID0gdGhpcy5wbHVnaW5zUGF0aDtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RhZ3MnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnRhZ3NQYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUsIHRydWUpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAnMjAwJykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3BsdWdpbnMnKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuZmlsdGVyUGx1Z2lucyhvYmopKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9XHJcbiAgc3RhdGljIGZpbHRlclBsdWdpbnMocGx1Z2lucykge1xyXG4gICAgbGV0IGZpbmFsID0gW107XHJcbiAgICB0aGlzLnBsdWdpbkxpc3QuZm9yRWFjaCgocGx1Z2luKSA9PiB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChwbHVnaW5zW2ldLm5hbWUgPT09IHBsdWdpbikge1xyXG4gICAgICAgICAgZmluYWwucHVzaChwbHVnaW5zW2ldKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBmaW5hbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbk1hbmFnZXIgZnJvbSAnLi8uLi9wbHVnaW5NYW5hZ2VyJ1xyXG5cclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgICB0YWc6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3BsdWdpbnMnLCA6OnRoaXMuc2V0UGx1Z2lucyk7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3RhZ3MnLCA6OnRoaXMuc2V0VGFncyk7XHJcbiAgfVxyXG4gIHNldFBsdWdpbnMocGx1Z2lucykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBsdWdpbnMgfSk7XHJcbiAgfVxyXG4gIGdldFBsdWdpbihuYW1lKSB7XHJcbiAgICBsZXQgcGx1Z2luID0gbnVsbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnBsdWdpbnNbaV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHBsdWdpbiA9IHRoaXMuc3RhdGUucGx1Z2luc1tpXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBsdWdpbjtcclxuICB9XHJcbiAgc2V0VGFncyhuZXdUYWdzKSB7XHJcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKG5ld1RhZ3MpO1xyXG4gICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGFncy5wdXNoKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHZhbDogbmV3VGFnc1tuYW1lXVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG4gIH1cclxuICBzZXRUYWcodGFnKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFnIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9ICdSUEcgTWFrZXIgTVYgUGx1Z2lucyc7XHJcbiAgICBjb25zdCBwbHVnaW5OYW1lID0gdGhpcy5wcm9wcy5wYXJhbXMucGx1Z2luTmFtZTtcclxuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMuZ2V0UGx1Z2luKHBsdWdpbk5hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwbHVnaW5zIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxyXG4gICAgICAgICAgICB7IHBsdWdpbk5hbWUgfHwgdGl0bGUgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIHRhZzogdGhpcy5zdGF0ZS50YWcsXHJcbiAgICAgICAgICAgICAgc2V0VGFnOiA6OnRoaXMuc2V0VGFnLFxyXG4gICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuc3RhdGUucGx1Z2lucyxcclxuICAgICAgICAgICAgICBwbHVnaW5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTaWRlYmFyIHRhZ3M9e3RoaXMuc3RhdGUudGFnc30gc2V0VGFnPXs6OnRoaXMuc2V0VGFnfSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBmaWx0ZXIocGx1Z2luKSB7XHJcbiAgICBjb25zdCB0YWcgPSB0aGlzLnByb3BzLnRhZztcclxuICAgIGlmICh0YWcgPT09ICcnKSByZXR1cm4gdHJ1ZTtcclxuICAgIGNvbnN0IHRhZ3MgPSBwbHVnaW4udGFncy5zcGxpdCgnLCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YWdzW2ldLnRyaW0oKSA9PT0gdGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcGx1Z2lucyA9IHRoaXMucHJvcHMucGx1Z2lucyB8fCBbXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cclxuICAgICAgICB7cGx1Z2lucy5maWx0ZXIoOjp0aGlzLmZpbHRlcikubWFwKChwbHVnaW4sIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8UGx1Z2luQmxvY2sga2V5PXtpfSBwbHVnaW49e3BsdWdpbn0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5CbG9jayBmcm9tICcuL3BsdWdpbkJsb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIDxQbHVnaW5CbG9jayBwbHVnaW49e3RoaXMucHJvcHMucGx1Z2lufSBtYXg9e3RydWV9IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG1ha2VSZXF1aXJlcygpIHtcclxuICAgIGxldCB7IHJlcXVpcmVzIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGlmIChyZXF1aXJlcykge1xyXG4gICAgICByZXF1aXJlcyA9IHJlcXVpcmVzLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICB8IFJlcXVpcmVzOiA8TGluayB0bz17YC9wbHVnaW5zLyR7cmVxdWlyZXN9YH0+e3JlcXVpcmVzfTwvTGluaz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBtYWtlQm9keSgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdmlkZW8sXHJcbiAgICAgIGFib3V0LFxyXG4gICAgICBoZWxwXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBsZXQgYm9keTtcclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICAvLyBlbWJlZCB2aWRlbyB0byB0b3Agb2YgYm9keVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4KSB7XHJcbiAgICAgIGJvZHkgPSBgJHthYm91dH1cXG4ke2hlbHB9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keSA9IGAke2Fib3V0fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya2VkKGJvZHkpO1xyXG4gIH1cclxuICBtYWtlVGFncygpIHtcclxuICAgIGNvbnN0IHsgdGFncyB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBpZiAoIXRhZ3MpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHRhZ3Muc3BsaXQoJywnKS5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICB0YWcgPSB0YWcudHJpbSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICB0bz0nL3BsdWdpbnMnXHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3RhZydcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25UYWcuYmluZCh0aGlzLCB0YWcpfT5cclxuICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuICBvblRhZyh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdmVyc2lvblxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgY29uc3QgcmVxdWlyZXMgPSB0aGlzLm1ha2VSZXF1aXJlcygpO1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMubWFrZUJvZHkoKTtcclxuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLm1ha2VUYWdzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvcGx1Z2lucy8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9MaW5rPiB8IDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgICAgVmVyc2lvbjoge3ZlcnNpb259IHt0aGlzLm1ha2VSZXF1aXJlcygpfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVscCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBib2R5fX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+XHJcbiAgICAgICAgICBUYWdzOiB7dGFnc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYWdzIGZyb20gJy4vdGFncydcclxuXHJcbmNvbnN0IF9kaXN0RnJvbVRvcCA9IDE2MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3A6IDBcclxuICAgIH1cclxuICAgIHRoaXMub25TY3JvbGwgPSA6OnRoaXMub25TY3JvbGw7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKCkge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBfZGlzdEZyb21Ub3ApIHtcclxuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgLSBfZGlzdEZyb21Ub3A7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnRvcFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAgPFRhZ3MgdGFncz17dGhpcy5wcm9wcy50YWdzfSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luVGFncyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DbGljayh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2V0VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWwgfSA9IHRhZztcclxuICAgICAgICAgIGNvbnN0IHNpemUgPSAoKE1hdGguZmxvb3IodmFsIC8gMikgKyAwLjUpICogMC4yMCkgKyAwLjg7XHJcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgZm9udFNpemU6IGAke3NpemV9ZW1gIH07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIHRvPScvcGx1Z2lucydcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0YWcnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGljay5iaW5kKHRoaXMsIG5hbWUpfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19
