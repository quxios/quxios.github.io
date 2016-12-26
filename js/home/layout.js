'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeLayout = function (_React$Component) {
  _inherits(HomeLayout, _React$Component);

  function HomeLayout(props) {
    _classCallCheck(this, HomeLayout);

    var _this = _possibleConstructorReturn(this, (HomeLayout.__proto__ || Object.getPrototypeOf(HomeLayout)).call(this, props));

    _this.state = {
      unavailable: 0
    };
    return _this;
  }

  _createClass(HomeLayout, [{
    key: 'onPlugins',
    value: function onPlugins() {}
  }, {
    key: 'onProjects',
    value: function onProjects() {}
  }, {
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
            React.createElement('img', { onClick: this.onPlugins.bind(this), src: '/imgs/plugins.png' })
          ),
          React.createElement(
            'div',
            { className: 'block projects' },
            React.createElement('img', { src: '/imgs/projects.png',
              onClick: this.onProjects.bind(this),
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
          React.createElement(
            'div',
            { className: 'block footer' },
            React.createElement(
              'a',
              { href: 'https://www.patreon.com/quxios' },
              'Patreon'
            ),
            ' |\xA0',
            React.createElement(
              'a',
              { href: 'https://twitter.com/Quxios' },
              'Twitter'
            ),
            ' |\xA0',
            React.createElement(
              'a',
              { href: 'https://www.youtube.com/c/QuxiosDev' },
              'Youtube'
            ),
            ' |\xA0',
            React.createElement(
              'a',
              { href: 'https://github.com/quxios' },
              'Github'
            )
          )
        )
      );
    }
  }]);

  return HomeLayout;
}(React.Component);

exports.default = HomeLayout;