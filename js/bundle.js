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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginManager = function () {
  function PluginManager() {
    _classCallCheck(this, PluginManager);
  }

  _createClass(PluginManager, null, [{
    key: 'load',
    value: function load(name, callback) {
      var xhr = new XMLHttpRequest();
      xhr.overrideMimeType("application/json");
      xhr.open('GET', this.docsPath + name + '.json', true);
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

PluginManager.docsPath = '/data/docs/';
exports.default = PluginManager;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _docsManager = require('./../docsManager');

var _docsManager2 = _interopRequireDefault(_docsManager);

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
      title: '',
      body: '',
      sections: []
    };
    return _this;
  }

  _createClass(DocsPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _docsManager2.default.load(this.props.params.docName, this.setDocs.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.params.section) {
        this.scrollTo(this.props.params.section);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var id = nextProps.params.section;
      if (id) {
        this.scrollTo(id);
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(id) {
      id = id.toLowerCase().replace(/\s/, '-');
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView(true);
      }
    }
  }, {
    key: 'setDocs',
    value: function setDocs(obj) {
      this.setState(obj);
    }
  }, {
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
            this.state.title
          ),
          React.createElement(_sidebar2.default, {
            doc: this.props.params.docName,
            sections: this.state.sections
          }),
          React.createElement(
            'div',
            { className: 'content' },
            React.createElement(_page2.default, { body: this.state.body })
          ),
          React.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return DocsPage;
}(React.Component);

exports.default = DocsPage;

},{"./../components/footer":1,"./../docsManager":2,"./page":4,"./sidebar":5}],4:[function(require,module,exports){
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
    key: 'render',
    value: function render() {
      var body = marked(this.props.body);
      return React.createElement('div', { className: 'block', dangerouslySetInnerHTML: { __html: body } });
    }
  }]);

  return PluginBlock;
}(React.Component);

exports.default = PluginBlock;

},{}],5:[function(require,module,exports){
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
      var style2 = {
        display: 'block'
      };
      var doc = this.props.doc;
      return React.createElement(
        'div',
        { className: 'sidebar', style: style },
        React.createElement(
          'div',
          { className: 'block' },
          React.createElement(
            'h2',
            null,
            'Sections'
          ),
          this.props.sections.map(function (section, i) {
            var s1 = section.replace(/#/g, '').trim();
            var s2 = section.replace(/#/g, '-').trim();
            return React.createElement(
              Link,
              { key: i, to: '/docs/' + doc + '/' + s1, style: style2 },
              s2
            );
          })
        )
      );
    }
  }]);

  return Sidebar;
}(React.Component);

exports.default = Sidebar;

},{}],6:[function(require,module,exports){
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

},{"./../components/footer":1}],7:[function(require,module,exports){
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


ReactDOM.render(React.createElement(
  Router,
  { history: hashHistory },
  React.createElement(Route, { path: '/', component: _home2.default }),
  React.createElement(
    Route,
    { path: '/plugins', component: _plugins2.default },
    React.createElement(IndexRoute, { component: _list2.default }),
    React.createElement(Route, { path: '/plugins/:pluginName(/:section)', component: _page2.default })
  ),
  React.createElement(Route, { path: '/projects', component: _projects2.default }),
  React.createElement(Route, { path: '/docs/:docName(/:section)', component: _docs2.default })
), document.getElementById('site'));

},{"./docs":3,"./home":6,"./plugins":9,"./plugins/list":10,"./plugins/page":11,"./projects":16}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluginManager = require('./../pluginManager');

var _pluginManager2 = _interopRequireDefault(_pluginManager);

var _sidebarSections = require('./sidebarSections');

var _sidebarSections2 = _interopRequireDefault(_sidebarSections);

var _sidebarTags = require('./sidebarTags');

var _sidebarTags2 = _interopRequireDefault(_sidebarTags);

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
      var id = nextProps.params.section;
      var plugin = nextProps.params.pluginName;
      if (plugin) {
        window.scrollTo(0, 0);
      }
      if (id) {
        this.scrollTo(id);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.params.section) {
        this.scrollTo(this.props.params.section);
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(id) {
      id = id.toLowerCase();
      id = id.replace(/[^a-zA-Z0-9]/g, ' ');
      id = id.replace(/\s+/g, '-');
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView(true);
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
          pluginName ? React.createElement(_sidebarSections2.default, {
            pluginName: pluginName,
            plugin: plugin
          }) : React.createElement(_sidebarTags2.default, {
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

},{"./../components/footer":1,"./../pluginManager":8,"./sidebarSections":13,"./sidebarTags":14}],10:[function(require,module,exports){
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

},{"./pluginBlock":12}],11:[function(require,module,exports){
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

},{"./pluginBlock":12}],12:[function(require,module,exports){
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
        if (!code) {
          code = /youtu\.be\/(.*)/.exec(video);
        }
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

},{}],13:[function(require,module,exports){
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

var SidebarSections = function (_React$Component) {
  _inherits(SidebarSections, _React$Component);

  function SidebarSections(props) {
    _classCallCheck(this, SidebarSections);

    var _this = _possibleConstructorReturn(this, (SidebarSections.__proto__ || Object.getPrototypeOf(SidebarSections)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(SidebarSections, [{
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
      if (!this.props.plugin) return null;
      var style = {
        marginTop: this.state.top
      };
      var style2 = {
        display: 'block'
      };
      var plugin = this.props.pluginName;
      var sections = this.props.plugin.sections || [];
      return React.createElement(
        'div',
        { className: 'sidebarSections', style: style },
        React.createElement(
          'div',
          { className: 'block' },
          React.createElement(
            Link,
            { to: '/plugins' },
            '< Back to Plugins'
          ),
          React.createElement(
            'h2',
            null,
            'Sections'
          ),
          sections.map(function (section, i) {
            var s1 = section.replace(/#/g, '').trim();
            s1 = s1.toLowerCase();
            s1 = s1.replace(/[^a-zA-Z0-9]/g, ' ');
            s1 = s1.replace(/\s+/g, '-');
            var s2 = section.replace(/#/g, '-').trim();
            return React.createElement(
              Link,
              { key: i, to: '/plugins/' + plugin + '/' + s1, style: style2 },
              s2
            );
          })
        )
      );
    }
  }]);

  return SidebarSections;
}(React.Component);

exports.default = SidebarSections;

},{}],14:[function(require,module,exports){
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

var SidebarTags = function (_React$Component) {
  _inherits(SidebarTags, _React$Component);

  function SidebarTags(props) {
    _classCallCheck(this, SidebarTags);

    var _this = _possibleConstructorReturn(this, (SidebarTags.__proto__ || Object.getPrototypeOf(SidebarTags)).call(this, props));

    _this.state = {
      top: 0
    };
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  _createClass(SidebarTags, [{
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
        React.createElement(_tags2.default, {
          tag: this.props.tag,
          tags: this.props.tags,
          setTag: this.props.setTag
        })
      );
    }
  }]);

  return SidebarTags;
}(React.Component);

exports.default = SidebarTags;

},{"./tags":15}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./../components/footer":1}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczZcXGNvbXBvbmVudHNcXGZvb3Rlci5qc3giLCJlczZcXGRvY3NNYW5hZ2VyLmpzIiwiZXM2XFxkb2NzXFxpbmRleC5qc3giLCJlczZcXGRvY3NcXHBhZ2UuanN4IiwiZXM2XFxkb2NzXFxzaWRlYmFyLmpzeCIsImVzNlxcaG9tZVxcaW5kZXguanN4IiwiZXM2XFxtYWluLmpzeCIsImVzNlxccGx1Z2luTWFuYWdlci5qcyIsImVzNlxccGx1Z2luc1xcaW5kZXguanN4IiwiZXM2XFxwbHVnaW5zXFxsaXN0LmpzeCIsImVzNlxccGx1Z2luc1xccGFnZS5qc3giLCJlczZcXHBsdWdpbnNcXHBsdWdpbkJsb2NrLmpzeCIsImVzNlxccGx1Z2luc1xcc2lkZWJhclNlY3Rpb25zLmpzeCIsImVzNlxccGx1Z2luc1xcc2lkZWJhclRhZ3MuanN4IiwiZXM2XFxwbHVnaW5zXFx0YWdzLmpzeCIsImVzNlxccHJvamVjdHNcXGluZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGdDQUFSO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDRCQUFSO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHFDQUFSO0FBQUE7QUFBQSxTQUhGO0FBQUE7QUFJRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDJCQUFSO0FBQUE7QUFBQTtBQUpGLE9BREY7QUFRRDs7OztFQVZpQyxNQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7Ozs7O0lDQUEsYTs7Ozs7Ozt5QkFHUCxJLEVBQU0sUSxFQUFVO0FBQzFCLFVBQUksTUFBTSxJQUFJLGNBQUosRUFBVjtBQUNBLFVBQUks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RGlCOztBQUUvQixjQUFNLE9BQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxDQUFDLE1BQU0sQ0FBUCxJQUFZLENBQXZCLElBQTRCLEdBQTdCLElBQW9DLElBQXJDLEdBQTZDLEdBQTFEO0FBQ0EsY0FBTSxRQUFRLEVBQUUsVUFBYSxJQUFiLE9BQUYsRUFBZDtBQUNBLGNBQUksWUFBWSxLQUFoQjtBQUNBLHVCQUFhLE9BQUssS0FBTCxDQUFXLEdBQVgsS0FBbUIsSUFBbkIsR0FBMEIsV0FBMUIsR0FBd0MsRUFBckQ7QUFDQSxpQkFDRTtBQUFDLGdCQUFEO0FBQUE7QUFDRSxrQkFBRyxVQURMO0FBRUUsbUJBQUssQ0FGUDtBQUdFLHlCQUFXLFNBSGI7QUFJRSxxQkFBTyxLQUpUO0FBS0UsdUJBQVMsT0FBSyxPQUFMLENBQWEsSUFBYixTQUF3QixJQUF4QixDQUxYO0FBTUc7QUFOSCxXQURGO0FBVUQsU0FoQkE7QUFESCxPQURGO0FBcUJEOzs7O0VBMUJxQyxNQUFNLFM7O2tCQUF6QixVOzs7Ozs7Ozs7OztBQ0RyQjs7Ozs7Ozs7OzsrZUFEQTs7O0lBR3FCLFk7OztBQUNuQix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNO0FBREssS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFDUTtBQUlQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUNBQUssV0FBVSxLQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxnQkFBZjtBQUNFLHlDQUFLLEtBQUksc0JBQVQ7QUFERixXQUpGO0FBYUU7QUFiRjtBQUZGLE9BREY7QUFvQkQ7Ozs7RUEvQnVDLE1BQU0sUzs7a0JBQTNCLFkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgZm9vdGVyJz5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF0cmVvbi5jb20vcXV4aW9zXCI+UGF0cmVvbjwvYT4gfCZuYnNwO1xyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1F1eGlvc1wiPlR3aXR0ZXI8L2E+IHwmbmJzcDtcclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9RdXhpb3NEZXZcIj5Zb3V0dWJlPC9hPiB8Jm5ic3A7XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9xdXhpb3NcIj5HaXRodWI8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5NYW5hZ2VyIHtcclxuICBzdGF0aWMgZG9jc1BhdGggPSAnL2RhdGEvZG9jcy8nO1xyXG5cclxuICBzdGF0aWMgbG9hZChuYW1lLCBjYWxsYmFjaykge1xyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMuZG9jc1BhdGggKyBuYW1lICsgJy5qc29uJywgdHJ1ZSk7XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09ICcyMDAnKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZChudWxsKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IERvY3NNYW5hZ2VyIGZyb20gJy4vLi4vZG9jc01hbmFnZXInXHJcblxyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInXHJcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0aXRsZTogJycsXHJcbiAgICAgIGJvZHk6ICcnLFxyXG4gICAgICBzZWN0aW9uczogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgRG9jc01hbmFnZXIubG9hZCh0aGlzLnByb3BzLnBhcmFtcy5kb2NOYW1lLCA6OnRoaXMuc2V0RG9jcyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMucGFyYW1zLnNlY3Rpb24pIHtcclxuICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLnByb3BzLnBhcmFtcy5zZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgIGNvbnN0IGlkID0gbmV4dFByb3BzLnBhcmFtcy5zZWN0aW9uO1xyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8oaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzY3JvbGxUbyhpZCkge1xyXG4gICAgaWQgPSBpZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy8sICctJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0RG9jcyhvYmopIHtcclxuICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlIGNvbnRhaW5lciBkb2NzJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICBkb2M9e3RoaXMucHJvcHMucGFyYW1zLmRvY05hbWV9XHJcbiAgICAgICAgICAgIHNlY3Rpb25zPXt0aGlzLnN0YXRlLnNlY3Rpb25zfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPFBhZ2UgYm9keT17dGhpcy5zdGF0ZS5ib2R5fSAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gbWFya2VkKHRoaXMucHJvcHMuYm9keSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm9keX19IC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcbmNvbnN0IF9kaXN0RnJvbVRvcCA9IDE1MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3A6IDBcclxuICAgIH1cclxuICAgIHRoaXMub25TY3JvbGwgPSA6OnRoaXMub25TY3JvbGw7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKCkge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBfZGlzdEZyb21Ub3ApIHtcclxuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgLSBfZGlzdEZyb21Ub3A7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGlzLnN0YXRlLnRvcFxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGUyID0ge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXHJcbiAgICB9XHJcbiAgICBjb25zdCBkb2MgPSB0aGlzLnByb3BzLmRvYztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICA8aDI+U2VjdGlvbnM8L2gyPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMxID0gc2VjdGlvbi5yZXBsYWNlKC8jL2csICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHMyID0gc2VjdGlvbi5yZXBsYWNlKC8jL2csICctJykudHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gdG89e2AvZG9jcy8ke2RvY30vJHtzMX1gfSBzdHlsZT17c3R5bGUyfT5cclxuICAgICAgICAgICAgICAgIHtzMn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncUJnJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2sgc2hvd2Nhc2UnPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9wbHVnaW5zXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3BsdWdpbnMucG5nJyAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBzaG93Y2FzZSc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL3Byb2plY3RzLnBuZycgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBzaG93Y2FzZSc+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2RvY3NcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZ3MvZG9jcy5wbmcnIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKi99XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5IH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWUnXHJcblxyXG5pbXBvcnQgUGx1Z2luc0xheW91dCBmcm9tICcuL3BsdWdpbnMnXHJcbmltcG9ydCBQbHVnaW5MaXN0IGZyb20gJy4vcGx1Z2lucy9saXN0J1xyXG5pbXBvcnQgUGx1Z2luUGFnZSBmcm9tICcuL3BsdWdpbnMvcGFnZSdcclxuXHJcbmltcG9ydCBQcm9qZWN0c0xheW91dCBmcm9tICcuL3Byb2plY3RzJ1xyXG5cclxuaW1wb3J0IERvY3NMYXlvdXQgZnJvbSAnLi9kb2NzJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0vPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvcGx1Z2luc1wiIGNvbXBvbmVudD17UGx1Z2luc0xheW91dH0+XHJcbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UGx1Z2luTGlzdH0vPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9wbHVnaW5zLzpwbHVnaW5OYW1lKC86c2VjdGlvbilcIiBjb21wb25lbnQ9e1BsdWdpblBhZ2V9Lz5cclxuICAgIDwvUm91dGU+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9wcm9qZWN0c1wiIGNvbXBvbmVudD17UHJvamVjdHNMYXlvdXR9Lz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3MvOmRvY05hbWUoLzpzZWN0aW9uKVwiIGNvbXBvbmVudD17RG9jc0xheW91dH0gLz5cclxuICA8L1JvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpdGUnKVxyXG4pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5NYW5hZ2VyIHtcclxuICBzdGF0aWMgcGx1Z2luc1BhdGggPSAnL2RhdGEvcGx1Z2lucy5qc29uJztcclxuICBzdGF0aWMgdGFnc1BhdGggPSAnL2RhdGEvdGFncy5qc29uJztcclxuXHJcbiAgc3RhdGljIGxvYWQodHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGxldCBmaWxlO1xyXG4gICAgaWYgKHR5cGUgPT09ICdwbHVnaW5zJykge1xyXG4gICAgICBmaWxlID0gdGhpcy5wbHVnaW5zUGF0aDtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RhZ3MnKSB7XHJcbiAgICAgIGZpbGUgPSB0aGlzLnRhZ3NQYXRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGZpbGUsIHRydWUpO1xyXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSAnMjAwJykge1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICBjYWxsYmFjayhvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgeGhyLnNlbmQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQbHVnaW5NYW5hZ2VyIGZyb20gJy4vLi4vcGx1Z2luTWFuYWdlcidcclxuXHJcbmltcG9ydCBTaWRlYmFyU2VjdGlvbnMgZnJvbSAnLi9zaWRlYmFyU2VjdGlvbnMnXHJcbmltcG9ydCBTaWRlYmFyVGFncyBmcm9tICcuL3NpZGViYXJUYWdzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5zUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgICB0YWc6ICcnLFxyXG4gICAgICB0YWdzOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3BsdWdpbnMnLCA6OnRoaXMuc2V0UGx1Z2lucyk7XHJcbiAgICBQbHVnaW5NYW5hZ2VyLmxvYWQoJ3RhZ3MnLCA6OnRoaXMuc2V0VGFncyk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICBjb25zdCBpZCA9IG5leHRQcm9wcy5wYXJhbXMuc2VjdGlvbjtcclxuICAgIGNvbnN0IHBsdWdpbiA9IG5leHRQcm9wcy5wYXJhbXMucGx1Z2luTmFtZTtcclxuICAgIGlmIChwbHVnaW4pIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8oaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBhcmFtcy5zZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5wcm9wcy5wYXJhbXMuc2VjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNjcm9sbFRvKGlkKSB7XHJcbiAgICBpZCA9IGlkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBpZCA9IGlkLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCAnICcpO1xyXG4gICAgaWQgPSBpZC5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UGx1Z2lucyhwbHVnaW5zKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcGx1Z2lucyB9KTtcclxuICB9XHJcbiAgZ2V0UGx1Z2luKG5hbWUpIHtcclxuICAgIGxldCBwbHVnaW4gPSBudWxsO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLnBsdWdpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucGx1Z2luc1tpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgcGx1Z2luID0gdGhpcy5zdGF0ZS5wbHVnaW5zW2ldO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGx1Z2luO1xyXG4gIH1cclxuICBzZXRUYWdzKG5ld1RhZ3MpIHtcclxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMobmV3VGFncyk7XHJcbiAgICBsZXQgdGFncyA9IFtdO1xyXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICB0YWdzLnB1c2goe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsOiBuZXdUYWdzW25hbWVdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcbiAgfVxyXG4gIHNldFRhZyh0YWcpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRhZyA9PT0gdGFnKSB7XHJcbiAgICAgIHRhZyA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhZyB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSAnUlBHIE1ha2VyIE1WIFBsdWdpbnMnO1xyXG4gICAgY29uc3QgcGx1Z2luTmFtZSA9IHRoaXMucHJvcHMucGFyYW1zLnBsdWdpbk5hbWU7XHJcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBjb250YWluZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgeyBwbHVnaW5OYW1lIHx8IHRpdGxlIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gJiYgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICB0YWc6IHRoaXMuc3RhdGUudGFnLFxyXG4gICAgICAgICAgICAgIHNldFRhZzogOjp0aGlzLnNldFRhZyxcclxuICAgICAgICAgICAgICBwbHVnaW5zOiB0aGlzLnN0YXRlLnBsdWdpbnMsXHJcbiAgICAgICAgICAgICAgcGx1Z2luXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBsdWdpbk5hbWUgPyA8U2lkZWJhclNlY3Rpb25zXHJcbiAgICAgICAgICAgICAgcGx1Z2luTmFtZT17cGx1Z2luTmFtZX1cclxuICAgICAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cclxuICAgICAgICAgICAgLz4gOiA8U2lkZWJhclRhZ3NcclxuICAgICAgICAgICAgICB0YWc9e3RoaXMuc3RhdGUudGFnfVxyXG4gICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICBzZXRUYWc9ezo6dGhpcy5zZXRUYWd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUGx1Z2luQmxvY2sgZnJvbSAnLi9wbHVnaW5CbG9jaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGZpbHRlcihwbHVnaW4pIHtcclxuICAgIGNvbnN0IHRhZyA9IHRoaXMucHJvcHMudGFnO1xyXG4gICAgaWYgKHRhZyA9PT0gJycpIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgdGFncyA9IHBsdWdpbi50YWdzLnNwbGl0KCcsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRhZ3NbaV0udHJpbSgpID09PSB0YWcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwbHVnaW5zID0gdGhpcy5wcm9wcy5wbHVnaW5zIHx8IFtdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QnPlxyXG4gICAgICAgIHtwbHVnaW5zLmZpbHRlcig6OnRoaXMuZmlsdGVyKS5tYXAoKHBsdWdpbiwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxQbHVnaW5CbG9jayBrZXk9e2l9IHBsdWdpbj17cGx1Z2lufSBzZXRUYWc9e3RoaXMucHJvcHMuc2V0VGFnfSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBsdWdpbkJsb2NrIGZyb20gJy4vcGx1Z2luQmxvY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XHJcbiAgICAgICAgPFBsdWdpbkJsb2NrIHBsdWdpbj17dGhpcy5wcm9wcy5wbHVnaW59IG1heD17dHJ1ZX0gc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5CbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgbWFrZVJlcXVpcmVzKCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgcmVxdWlyZXMsXHJcbiAgICAgIGRvd25sb2FkXHJcbiAgICB9ID0gdGhpcy5wcm9wcy5wbHVnaW4gfHwge307XHJcbiAgICBpZiAocmVxdWlyZXMpIHtcclxuICAgICAgcmVxdWlyZXMgPSByZXF1aXJlcy50cmltKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdWInPlxyXG4gICAgICAgICAgfCBSZXF1aXJlczogPExpbmsgdG89e2AvcGx1Z2lucy8ke3JlcXVpcmVzfWB9PlxyXG4gICAgICAgICAgICB7cmVxdWlyZXN9XHJcbiAgICAgICAgICA8L0xpbms+IHwgPGEgaHJlZj17ZG93bmxvYWR9PlxyXG4gICAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICB8IDxhIGhyZWY9e2Rvd25sb2FkfT5cclxuICAgICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgbWFrZUJvZHkoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHZpZGVvLFxyXG4gICAgICBhYm91dCxcclxuICAgICAgaGVscFxyXG4gICAgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgbGV0IGJvZHkgPSAnJztcclxuICAgIGlmICh2aWRlbykge1xyXG4gICAgICB2YXIgY29kZSA9IC9cXD92PSguKikvLmV4ZWModmlkZW8pO1xyXG4gICAgICBpZiAoIWNvZGUpIHtcclxuICAgICAgICBjb2RlID0gL3lvdXR1XFwuYmVcXC8oLiopLy5leGVjKHZpZGVvKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29kZSkge1xyXG4gICAgICAgIGJvZHkgKz0gYDxjZW50ZXI+PGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7Y29kZVsxXX1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9jZW50ZXI+YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXgpIHtcclxuICAgICAgYm9keSArPSBgJHthYm91dH1cXG4ke2hlbHB9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keSArPSBgJHthYm91dH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcmtlZChib2R5KTtcclxuICB9XHJcbiAgbWFrZVRhZ3MoKSB7XHJcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHRoaXMucHJvcHMucGx1Z2luIHx8IHt9O1xyXG4gICAgaWYgKCF0YWdzKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiB0YWdzLnNwbGl0KCcsJykubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgdGFnID0gdGFnLnRyaW0oKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgdG89Jy9wbHVnaW5zJ1xyXG4gICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd0YWcnXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVGFnLmJpbmQodGhpcywgdGFnKX0+XHJcbiAgICAgICAgICB7dGFnfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25UYWcodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldFRhZyh0YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHZlcnNpb25cclxuICAgIH0gPSB0aGlzLnByb3BzLnBsdWdpbiB8fCB7fTtcclxuICAgIGNvbnN0IHJlcXVpcmVzID0gdGhpcy5tYWtlUmVxdWlyZXMoKTtcclxuICAgIGNvbnN0IGJvZHkgPSB0aGlzLm1ha2VCb2R5KCk7XHJcbiAgICBjb25zdCB0YWdzID0gdGhpcy5tYWtlVGFncygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICAgIDxMaW5rIHRvPXtgL3BsdWdpbnMvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvTGluaz4gfCA8c3BhbiBjbGFzc05hbWU9J3N1Yic+XHJcbiAgICAgICAgICAgIFZlcnNpb246IHt2ZXJzaW9ufSB7dGhpcy5tYWtlUmVxdWlyZXMoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlbHAnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYm9keX19PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXInPlxyXG4gICAgICAgICAgVGFnczoge3RhZ3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCB7IExpbmsgfSA9IFJlYWN0Um91dGVyO1xyXG5jb25zdCBfZGlzdEZyb21Ub3AgPSAxNTA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyU2VjdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3A6IDBcclxuICAgIH1cclxuICAgIHRoaXMub25TY3JvbGwgPSA6OnRoaXMub25TY3JvbGw7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsKTtcclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKCkge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiBfZGlzdEZyb21Ub3ApIHtcclxuICAgICAgdG9wID0gd2luZG93LnNjcm9sbFkgLSBfZGlzdEZyb21Ub3A7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9wIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMucGx1Z2luKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUudG9wXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdHlsZTIgPSB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgIH1cclxuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucHJvcHMucGx1Z2luTmFtZTtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5wcm9wcy5wbHVnaW4uc2VjdGlvbnMgfHwgW107XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhclNlY3Rpb25zJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayc+XHJcbiAgICAgICAgICA8TGluayB0bz0nL3BsdWdpbnMnPiZsdDsgQmFjayB0byBQbHVnaW5zPC9MaW5rPlxyXG4gICAgICAgICAgPGgyPlNlY3Rpb25zPC9oMj5cclxuICAgICAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHMxID0gc2VjdGlvbi5yZXBsYWNlKC8jL2csICcnKS50cmltKCk7XHJcbiAgICAgICAgICAgIHMxID0gczEudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgczEgPSBzMS5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJyAnKTtcclxuICAgICAgICAgICAgczEgPSBzMS5yZXBsYWNlKC9cXHMrL2csICctJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHMyID0gc2VjdGlvbi5yZXBsYWNlKC8jL2csICctJykudHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gdG89e2AvcGx1Z2lucy8ke3BsdWdpbn0vJHtzMX1gfSBzdHlsZT17c3R5bGUyfT5cclxuICAgICAgICAgICAgICAgIHtzMn1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYWdzIGZyb20gJy4vdGFncydcclxuXHJcbmNvbnN0IHsgTGluayB9ID0gUmVhY3RSb3V0ZXI7XHJcbmNvbnN0IF9kaXN0RnJvbVRvcCA9IDE1MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXJUYWdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9wOiAwXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2Nyb2xsID0gOjp0aGlzLm9uU2Nyb2xsO1xyXG4gIH1cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwpO1xyXG4gIH1cclxuICBvblNjcm9sbCgpIHtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gX2Rpc3RGcm9tVG9wKSB7XHJcbiAgICAgIHRvcCA9IHdpbmRvdy5zY3JvbGxZIC0gX2Rpc3RGcm9tVG9wO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvcCB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS50b3BcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJyBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIDxUYWdzXHJcbiAgICAgICAgICB0YWc9e3RoaXMucHJvcHMudGFnfVxyXG4gICAgICAgICAgdGFncz17dGhpcy5wcm9wcy50YWdzfVxyXG4gICAgICAgICAgc2V0VGFnPXt0aGlzLnByb3BzLnNldFRhZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiY29uc3QgeyBMaW5rIH0gPSBSZWFjdFJvdXRlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpblRhZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG9uQ2xpY2sodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNldFRhZyh0YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmxvY2snPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsIH0gPSB0YWc7XHJcbiAgICAgICAgICBjb25zdCBzaXplID0gKChNYXRoLmZsb29yKCh2YWwgLSAxKSAvIDIpICsgMC41KSAqIDAuMjApICsgMC44O1xyXG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGZvbnRTaXplOiBgJHtzaXplfWVtYCB9O1xyXG4gICAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICd0YWcnO1xyXG4gICAgICAgICAgY2xhc3NOYW1lICs9IHRoaXMucHJvcHMudGFnID09PSBuYW1lID8gJyBzZWxlY3RlZCcgOiAnJztcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgdG89Jy9wbHVnaW5zJ1xyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcywgbmFtZSl9PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCIvL2ltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZG9jczogW11cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgLy9jb25zdCB0aXRsZSA9ICdSUEcgTWFrZXIgTVYgUGx1Z2lucyc7XHJcbiAgICAvL2NvbnN0IHBsdWdpbk5hbWUgPSB0aGlzLnByb3BzLnBhcmFtcy5wbHVnaW5OYW1lO1xyXG4gICAgLy9jb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihwbHVnaW5OYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3FCZycgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSBjb250YWluZXIgcHJvamVjdHMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cclxuICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NrIHNob3djYXNlJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWdzL2NvbWluZ1Nvb24ucG5nJyAvPlxyXG4gICAgICAgICAgICB7LyogdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwge1xyXG4gICAgICAgICAgICAgIHRhZzogdGhpcy5zdGF0ZS50YWcsXHJcbiAgICAgICAgICAgICAgc2V0VGFnOiA6OnRoaXMuc2V0VGFnLFxyXG4gICAgICAgICAgICAgIHBsdWdpbnM6IHRoaXMuc3RhdGUucGx1Z2lucyxcclxuICAgICAgICAgICAgICBwbHVnaW5cclxuICAgICAgICAgICAgfSkqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19
