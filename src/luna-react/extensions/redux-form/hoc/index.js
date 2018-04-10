'use strict'

exports.__esModule = true
exports.mapReduxFormProps = undefined

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _recompose = require('recompose')

var mapReduxFormProps = function mapReduxFormProps(props) {
  var input = props.input,
    meta = props.meta

  var fieldProps = _extends({}, props, {
    name: input.name,
    onBlur: input.onBlur,
    onChange: input.onChange,
    onFocus: input.onFocus,
    value: input.value ? input.value : '',
  })

  delete fieldProps.input
  delete fieldProps.meta

  if (meta.touched) {
    if (meta.error) fieldProps.error = meta.error
    if (meta.warning) fieldProps.warning = meta.warning
  }

  return fieldProps
}

exports.mapReduxFormProps = mapReduxFormProps

exports.default = /* istanbul ignore next */ function(Component) {
  return /* istanbul ignore next */ (0, _recompose.compose)(
    (0, _recompose.setDisplayName)(
      'ReduxFormField(' +
        (Component.displayName || Component.name || 'Component') +
        ')',
    ),
    (0, _recompose.mapProps)(mapReduxFormProps),
  )(Component)
}
