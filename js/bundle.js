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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGhvbWVcXGluZGV4LmpzeCIsImVzNlxcbWFpbi5qc3giLCJlczZcXHBsdWdpbk1hbmFnZXIuanMiLCJlczZcXHBsdWdpbnNcXGluZGV4LmpzeCIsImVzNlxccGx1Z2luc1xcbGlzdC5qc3giLCJlczZcXHBsdWdpbnNcXHBhZ2UuanN4IiwiZXM2XFxwbHVnaW5zXFxwbHVnaW5CbG9jay5qc3giLCJlczZcXHBsdWdpbnNcXHNpZGViYXIuanN4IiwiZXM2XFxwbHVnaW5zXFx0YWdzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDRCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFDQUFSO0FBQUE7QUFBQSxTQUhGO0FBQUE7QUFJRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7OztFQVZpQyxNQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7OztBQ0VyQjs7Ozs7Ozs7Ozs7O21CQUZpQixXO0lBQVQsSSxnQkFBQSxJOztJQUlhLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxtQkFBYTtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7c0NBQ2lCO0FBQ2hCLFdBQUssUUFBTCxDQUFjLEVBQUUsYUFBYSxDQUFmLEVBQWQ7QUFDRDs7O3NDQUNpQjtBQUNoQixXQUFLLFFBQUwsQ0FB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akIsR0FEaUIsR0FDVCxHQURTLENBQ2pCLEdBRGlCOztBQUUvQixjQUFNLE9BQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxDQUFDLE1BQU0sQ0FBUCxJQUFZLENBQXZCLElBQTRCLEdBQTdCLElBQW9DLElBQXJDLEdBQTZDLEdBQTFEO0FBQ0EsY0FBTSxRQUFRLEVBQUUsVUFBYSxJQUFiLE9BQUYsRUFBZDtBQUNBLGNBQUksWUFBWSxLQUFoQjtBQUNBLHVCQUFhLE9BQUssS0FBTCxDQUFXLEdBQVgsS0FBbUIsSUFBbkIsR0FBMEIsV0FBMUIsR0FBd0MsRUFBckQ7QUFDQSxpQkFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxrQkFBRyxVQURMO0FBRUUsbUJBQUssQ0FGUDtBQUdFLHlCQUFXLFNBSGI7QUFJRSxxQkFBTyxLQUpUO0FBS0UsdUJBQVMsT0FBSyxPQUFMLENBQWEsSUFBYixTQUF3QixJQUF4QixDQUxYO0FBTUc7QUFOSCxXQURGO0FBVUQsU0FoQkE7QUFESCxPQURGO0FBcUJEOzs7O0VBMUJxQyxNQUFNLFM7O2tCQUF6QixVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIGZvb3Rlcic+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhdHJlb24uY29tL3F1eGlvc1wiPlBhdHJlb248L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9RdXhpb3NcIj5Ud2l0dGVyPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvUXV4aW9zRGV2XCI+WW91dHViZTwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcXV4aW9zXCI+R2l0aHViPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL2Zvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdW5hdmFpbGFibGU6IDBcclxuICAgIH1cclxuICB9XHJcbiAgc2hvd1VuYXZhaWxhYmxlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVuYXZhaWxhYmxlOiAxIH0pO1xyXG4gIH1cclxuICBoaWRlVW5hdmFpbGFibGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdW5hdmFpbGFibGU6IDAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHZhciB1bmF2YWlsYWJsZSA9IHtcclxuICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS51bmF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgcGx1Z2lucyc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3BsdWdpbnNcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvcGx1Z2lucy5wbmcnIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHByb2plY3RzJz5cclxuICAgICAgICAgICAgey8qPExpbmsgdG89XCIvcHJvamVjdHNcIj4qL31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvcHJvamVjdHMucG5nJ1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXs6OnRoaXMuc2hvd1VuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXs6OnRoaXMuaGlkZVVuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKjwvTGluaz4qL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYXZhaWxhYmxlJyBzdHlsZT17dW5hdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXs6OnRoaXMuc2hvd1VuYXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17Ojp0aGlzLmhpZGVVbmF2YWlsYWJsZX0gPlxyXG4gICAgICAgICAgICAgIE5vdCBBdmFpbGFibGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgaGFzaEhpc3RvcnkgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IFBsdWdpbnNMYXlvdXQgZnJvbSAnLi9wbHVnaW5zJ1xyXG5pbXBvcnQgUGx1Z2luTGlzdCBmcm9tICcuL3BsdWdpbnMvbGlzdCdcclxuaW1wb3J0IFBsdWdpblBhZ2UgZnJvbSAnLi9wbHVnaW5zL3BhZ2UnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWVQYWdlfS8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zXCIgY29tcG9uZW50PXtQbHVnaW5zTGF5b3V0fT5cclxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtQbHVnaW5MaXN0fS8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3BsdWdpbnMvOnBsdWdpbk5hbWVcIiBjb21wb25lbnQ9e1BsdWdpblBhZ2V9Lz5cclxuICAgIDwvUm91dGU+XHJcbiAgICB7Lyo8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGNvbXBvbmVudD17UHJvamVjdHNMYXlvdXR9Lz4qL31cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUnKVxyXG4pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5NYW5hZ2VyIHtcclxuICBzdGF0aWMgcGx1Z2luc1BhdGggPSAnL2RhdGEvcGx1Z2lucy5qc29uJztcclxuICBzdGF0aWMgdGFnc1BhdGggPSAnL2RhdGEvdGFncy5qc29uJztcclxuXHJcbiAgc3RhdGljIGxvYWQodHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmaWxlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdwbHVnaW5zJykge1xyXG4gICAgICBmaWxlID0gdGhpcy5wbHVnaW5zUGF0aDtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RhZ3MnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnRhZ3NQYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUsIHRydWUpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAnMjAwJykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBjYWxsYmFjayhvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJy4vLi4vcGx1Z2luTWFuYWdlcidcclxuXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwbHVnaW5zOiBbXSxcclxuICAgICAgdGFnOiAnJyxcclxuICAgICAgdGFnczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgUGx1Z2luTWFuYWdlci5sb2FkKCdwbHVnaW5zJywgOjp0aGlzLnNldFBsdWdpbnMpO1xyXG4gICAgUGx1Z2luTWFuYWdlci5sb2FkKCd0YWdzJywgOjp0aGlzLnNldFRhZ3MpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgaWYgKC9cXC9wbHVnaW5zXFwvKC4qKS9pLnRlc3QobmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSkge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFBsdWdpbnMocGx1Z2lucykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBsdWdpbnMgfSk7XHJcbiAgfVxyXG4gIGdldFBsdWdpbihuYW1lKSB7XHJcbiAgICBsZXQgcGx1Z2luID0gbnVsbDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnBsdWdpbnNbaV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgIHBsdWdpbiA9IHRoaXMuc3RhdGUucGx1Z2luc1tpXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBsdWdpbjtcclxuICB9XHJcbiAgc2V0VGFncyhuZXdUYWdzKSB7XHJcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKG5ld1RhZ3MpO1xyXG4gICAgbGV0IHRhZ3MgPSBbXTtcclxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgdGFncy5wdXNoKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHZhbDogbmV3VGFnc1tuYW1lXVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG4gIH1cclxuICBzZXRUYWcodGFnKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS50YWcgPT09IHRhZykge1xyXG4gICAgICB0YWcgPSAnJztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWcgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gJ1JQRyBNYWtlciBNViBQbHVnaW5zJztcclxuICAgIGNvbnN0IHBsdWdpbk5hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5wbHVnaW5OYW1lO1xyXG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4ocGx1Z2luTmFtZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdxQmcnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsdWdpbnMgY29udGFpbmVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIHsgcGx1Z2luTmFtZSB8fCB0aXRsZSB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuICYmIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XHJcbiAgICAgICAgICAgICAgdGFnOiB0aGlzLnN0YXRlLnRhZyxcclxuICAgICAgICAgICAgICBzZXRUYWc6IDo6dGhpcy5zZXRUYWcsXHJcbiAgICAgICAgICAgICAgcGx1Z2luczogdGhpcy5zdGF0ZS5wbHVnaW5zLFxyXG4gICAgICAgICAgICAgIHBsdWdpblxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgcGx1Z2luTmFtZT17cGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgdGFnPXt0aGlzLnN0YXRlLnRhZ31cclxuICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICBzZXRUYWc9ezo6dGhpcy5zZXRUYWd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBmaWx0ZXIocGx1Z2luKSB7XHJcbiAgICBjb25zdCB0YWcgPSB0aGlzLnByb3BzLnRhZztcclxuICAgIGlmICh0YWcgPT09ICcnKSByZXR1cm4gdHJ1ZTtcclxuICAgIGNvbnN0IHRhZ3MgPSBwbHVnaW4udGFncy5zcGxpdCgnLCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0YWdzW2ldLnRyaW0oKSA9PT0gdGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcGx1Z2lucyA9IHRoaXMucHJvcHMucGx1Z2lucyB8fCBbXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cclxuICAgICAgICB7cGx1Z2lucy5maWx0ZXIoOjp0aGlzLmZpbHRlcikubWFwKChwbHVnaW4sIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8UGx1Z2luQmxvY2sga2V5PXtpfSBwbHVnaW49e3BsdWdpbn0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5CbG9jayBmcm9tICcuL3BsdWdpbkJsb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIDxQbHVnaW5CbG9jayBwbHVnaW49e3RoaXMucHJvcHMucGx1Z2lufSBtYXg9e3RydWV9IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGx1Z2luQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG1ha2VSZXF1aXJlcygpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHJlcXVpcmVzLFxyXG4gICAgICBkb3dubG9hZFxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgaWYgKHJlcXVpcmVzKSB7XHJcbiAgICAgIHJlcXVpcmVzID0gcmVxdWlyZXMudHJpbSgpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3ViJz5cclxuICAgICAgICAgIHwgUmVxdWlyZXM6IDxMaW5rIHRvPXtgL3BsdWdpbnMvJHtyZXF1aXJlc31gfT5cclxuICAgICAgICAgICAge3JlcXVpcmVzfVxyXG4gICAgICAgICAgPC9MaW5rPiB8IDxhIGhyZWY9e2Rvd25sb2FkfT5cclxuICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdWInPlxyXG4gICAgICAgICAgfCA8YSBocmVmPXtkb3dubG9hZH0+XHJcbiAgICAgICAgICAgIERvd25sb2FkXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gIG1ha2VCb2R5KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB2aWRlbyxcclxuICAgICAgYWJvdXQsXHJcbiAgICAgIGhlbHBcclxuICAgIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGxldCBib2R5ID0gJyc7XHJcbiAgICBpZiAodmlkZW8pIHtcclxuICAgICAgdmFyIGNvZGUgPSAvXFw/dj0oLiopLy5leGVjKHZpZGVvKTtcclxuICAgICAgaWYgKGNvZGUpIHtcclxuICAgICAgICBib2R5ICs9IGA8Y2VudGVyPjxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2NvZGVbMV19XCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPjwvY2VudGVyPmBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4KSB7XHJcbiAgICAgIGJvZHkgKz0gYCR7YWJvdXR9XFxuJHtoZWxwfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkgKz0gYCR7YWJvdXR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXJrZWQoYm9keSk7XHJcbiAgfVxyXG4gIG1ha2VUYWdzKCkge1xyXG4gICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGlmICghdGFncykgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gdGFncy5zcGxpdCgnLCcpLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgIHRhZyA9IHRhZy50cmltKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIHRvPScvcGx1Z2lucydcclxuICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0ndGFnJ1xyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vblRhZy5iaW5kKHRoaXMsIHRhZyl9PlxyXG4gICAgICAgICAge3RhZ31cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uVGFnKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRUYWcodGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB2ZXJzaW9uXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBjb25zdCByZXF1aXJlcyA9IHRoaXMubWFrZVJlcXVpcmVzKCk7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5tYWtlQm9keSgpO1xyXG4gICAgY29uc3QgdGFncyA9IHRoaXMubWFrZVRhZ3MoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9wbHVnaW5zLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L0xpbms+IHwgPHNwYW4gY2xhc3NOYW1lPSdzdWInPlxyXG4gICAgICAgICAgICBWZXJzaW9uOiB7dmVyc2lvbn0ge3RoaXMubWFrZVJlcXVpcmVzKCl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWxwJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGJvZHl9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz5cclxuICAgICAgICAgIFRhZ3M6IHt0YWdzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRhZ3MgZnJvbSAnLi90YWdzJ1xyXG5cclxuY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuY29uc3QgX2Rpc3RGcm9tVG9wID0gMTUwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRvcDogMFxyXG4gICAgfVxyXG4gICAgdGhpcy5vblNjcm9sbCA9IDo6dGhpcy5vblNjcm9sbDtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgb25TY3JvbGwoKSB7XHJcbiAgICBsZXQgdG9wID0gMDtcclxuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IF9kaXN0RnJvbVRvcCkge1xyXG4gICAgICB0b3AgPSB3aW5kb3cuc2Nyb2xsWSAtIF9kaXN0RnJvbVRvcDtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3AgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUudG9wXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcicgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7IHRoaXMucHJvcHMucGx1Z2luTmFtZSA/IDxMaW5rIHRvPScvcGx1Z2lucycgY2xhc3NOYW1lPSdoZWFkZXInPkJhY2sgdG8gUGx1Z2luczwvTGluaz4gOiBudWxsIH1cclxuICAgICAgICA8VGFncyB0YWc9e3RoaXMucHJvcHMudGFnfSB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHNldFRhZz17dGhpcy5wcm9wcy5zZXRUYWd9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5UYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBvbkNsaWNrKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy5zZXRUYWcodGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIHZhbCB9ID0gdGFnO1xyXG4gICAgICAgICAgY29uc3Qgc2l6ZSA9ICgoTWF0aC5mbG9vcigodmFsIC0gMSkgLyAyKSArIDAuNSkgKiAwLjIwKSArIDAuODtcclxuICAgICAgICAgIGNvbnN0IHN0eWxlID0geyBmb250U2l6ZTogYCR7c2l6ZX1lbWAgfTtcclxuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSAndGFnJztcclxuICAgICAgICAgIGNsYXNzTmFtZSArPSB0aGlzLnByb3BzLnRhZyA9PT0gbmFtZSA/ICcgc2VsZWN0ZWQnIDogJyc7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIHRvPScvcGx1Z2lucydcclxuICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGljay5iaW5kKHRoaXMsIG5hbWUpfT5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19
