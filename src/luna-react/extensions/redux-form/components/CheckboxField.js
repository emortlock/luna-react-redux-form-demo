'use strict'

exports.__esModule = true

var { CheckboxField } = require('../../../')

var _CheckboxField2 = _interopRequireDefault(CheckboxField)

var _hoc = require('../hoc')

var _hoc2 = _interopRequireDefault(_hoc)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.default = (0, _hoc2.default)(_CheckboxField2.default)
