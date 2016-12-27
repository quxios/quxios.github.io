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
      var rand = Math.floor(Math.random() * 10) + 1;
      var arr = [];
      for (var i = 0; i < rand; i++) {
        arr.push(React.createElement(
          'div',
          { key: i },
          'testing'
        ));
      }
      return React.createElement(
        'div',
        { className: 'block' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            Link,
            { to: '/plugins/testPlugin' },
            'Plugin Name'
          )
        ),
        React.createElement(
          'div',
          { className: 'desc' },
          arr
        ),
        React.createElement(
          'div',
          { className: 'footer' },
          'footer'
        )
      );
    }
  }]);

  return PluginBlock;
}(React.Component);

var PluginList = function (_React$Component2) {
  _inherits(PluginList, _React$Component2);

  function PluginList() {
    _classCallCheck(this, PluginList);

    return _possibleConstructorReturn(this, (PluginList.__proto__ || Object.getPrototypeOf(PluginList)).apply(this, arguments));
  }

  _createClass(PluginList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(PluginBlock, null),
        React.createElement(PluginBlock, null),
        React.createElement(PluginBlock, null),
        React.createElement(PluginBlock, null)
      );
    }
  }]);

  return PluginList;
}(React.Component);

exports.default = PluginList;