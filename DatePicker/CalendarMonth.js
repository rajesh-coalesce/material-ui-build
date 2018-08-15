'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarMonth = function (_Component) {
  (0, _inherits3.default)(CalendarMonth, _Component);

  function CalendarMonth() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CalendarMonth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CalendarMonth.__proto__ || (0, _getPrototypeOf2.default)(CalendarMonth)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickMonth = function (event, month) {
      if (_this.props.onClickMonth) {
        _this.props.onClickMonth(event, month);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CalendarMonth, [{
    key: 'getMonths',
    value: function getMonths() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          selectedDate = _props.selectedDate,
          utils = _props.utils;


      var months = [];

      for (var month = 0; month <= 11; month++) {
        var monthFormated = new DateTimeFormat(locale, {
          month: 'short'
        }).format(utils.setMonth(selectedDate, month));

        var monthButton = _react2.default.createElement(
          _Button2.default,
          {
            key: 'mb' + month,
            onClick: this.handleClickMonth,
            selected: selectedDate.getMonth() === month,
            value: month,
            current: month === new Date().getMonth(),
            style: { flex: '1 0 33.33%', padding: '10' },
            increaseSelectedFont: false
          },
          monthFormated
        );

        months.push(monthButton);
      }

      return months;
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          calendarMonthBackgroundColor = _context$muiTheme.datePicker.calendarMonthBackgroundColor;


      var styles = {
        root: {
          backgroundColor: calendarMonthBackgroundColor,
          display: 'flex',
          justifyContent: 'center',
          minHeight: '100%',
          flexWrap: 'wrap'
        }
      };

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        this.getMonths()
      );
    }
  }]);
  return CalendarMonth;
}(_react.Component);

CalendarMonth.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CalendarMonth.propTypes = process.env.NODE_ENV !== "production" ? {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  locale: _propTypes2.default.string.isRequired,
  maxDate: _propTypes2.default.object.isRequired,
  minDate: _propTypes2.default.object.isRequired,
  onClickMonth: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object.isRequired,
  utils: _propTypes2.default.object.isRequired,
  wordings: _propTypes2.default.object
} : {};
exports.default = CalendarMonth;