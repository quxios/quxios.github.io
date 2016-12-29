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