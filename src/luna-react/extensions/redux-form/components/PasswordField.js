'use strict'

exports.__esModule = true

var { PasswordField } = require('../../../')

var _PasswordField2 = _interopRequireDefault(PasswordField)

var _hoc = require('../hoc')

var _hoc2 = _interopRequireDefault(_hoc)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = (0, _hoc2.default)(_PasswordField2.default)
