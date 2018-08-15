'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var selected = props.selected,
      current = props.current,
      increaseSelectedFont = props.increaseSelectedFont;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      datePicker = _context$muiTheme.datePicker;
  var hover = state.hover;


  return {
    root: (0, _extends3.default)({
      boxSizing: 'border-box',
      color: current && datePicker.color,
      display: 'block',
      fontSize: 14,
      margin: '0 auto',
      position: 'relative',
      textAlign: 'center',
      lineHeight: 'inherit',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' }, props.style),
    label: {
      alignSelf: 'center',
      color: hover || selected ? datePicker.color : baseTheme.palette.textColor,
      fontSize: selected && increaseSelectedFont ? 26 : 17,
      fontWeight: hover ? 450 : selected ? 500 : 400,
      position: 'relative',
      top: -1
    }
  };
}

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleMouseEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ hover: false });
    }, _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event, _this.props.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          current = _props.current,
          className = _props.className,
          onClick = _props.onClick,
          selected = _props.selected,
          value = _props.value,
          increaseSelectedFont = _props.increaseSelectedFont,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'current', 'className', 'onClick', 'selected', 'value', 'increaseSelectedFont']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disableFocusRipple: true,
          disableTouchRipple: true,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: this.handleClick,
          style: styles.root
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          children
        )
      );
    }
  }]);
  return Button;
}(_react.Component);

Button.defaultProps = {
  increaseSelectedFont: true,
  selected: false
};
Button.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  current: _propTypes2.default.bool,
  increaseSelectedFont: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  value: _propTypes2.default.number.isRequired
} : {};
exports.default = Button;