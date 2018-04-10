import {
  compose,
  mapProps,
  setDisplayName,
  withHandlers,
  withProps,
  withPropsOnChange,
  withState,
} from 'recompose'
import uniqueId from 'lodash.uniqueid'
import React, { Component, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

var getUniqueId = function(prefix) {
  return uniqueId(prefix)
}

var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function(obj) {
        return typeof obj
      }
    : function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

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

var inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    )
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

var objectWithoutProperties = function(obj, keys) {
  var target = {}

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }

  return target
}

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  }

  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

var addLunaClass = function addLunaClass(props) {
  return _extends({}, props, {
    className: classnames(props.className, 'ln-c-icon'),
  })
}

var iconHandler = /* istanbul ignore next */ function(Component$$1) {
  return /* istanbul ignore next */ compose(
    setDisplayName(Component$$1.displayName || Component$$1.name || 'Icon'),
    mapProps(addLunaClass),
  )(Component$$1)
}

var ArrowDown = function ArrowDown(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '10',
        viewBox: '0 0 18 10',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M9 7.586L1.707.293A1 1 0 0 0 .293 1.707l8 8a1 1 0 0 0 1.414 0l8-8A1 1 0 1 0 16.293.293L9 7.586z',
    }),
  )
}

var ArrowDown$1 = iconHandler(ArrowDown)

var filterProps = function(props, filterList) {
  return Object.keys(props).reduce(function(newProps, prop) {
    var _babelHelpers$extends

    if (filterList.includes(prop)) {
      return newProps
    }
    return _extends(
      {},
      newProps,
      ((_babelHelpers$extends = {}),
      (_babelHelpers$extends[prop] = props[prop]),
      _babelHelpers$extends),
    )
  }, {})
}

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
    className = _ref.className,
    title = _ref.title,
    titleElement = _ref.titleElement,
    open = _ref.open,
    standalone = _ref.standalone,
    ids = _ref.ids,
    handleClick = _ref.handleClick,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'title',
      'titleElement',
      'open',
      'standalone',
      'ids',
      'handleClick',
    ])

  var Heading = titleElement

  return React.createElement(
    'div',
    _extends({}, filterProps(rest, ['setOpenState', 'defaultOpen']), {
      className: classnames(
        'ln-c-accordion',
        className,
        open && 'is-open',
        standalone && 'ln-c-accordion--standalone',
      ),
    }),
    React.createElement(
      'div',
      { className: 'ln-c-accordion__head' },
      React.createElement(
        'button',
        {
          className: 'ln-c-accordion__toggle',
          type: 'button',
          onClick: function onClick() {
            return handleClick(open)
          },
          'aria-hidden': true,
        },
        React.createElement(ArrowDown$1, { className: 'ln-c-accordion__icon' }),
      ),
      React.createElement(
        Heading,
        { className: 'ln-c-accordion__title', id: ids.title },
        title,
      ),
    ),
    React.createElement(
      'div',
      {
        className: 'ln-c-accordion__body',
        role: 'region',
        'aria-labelledby': ids.title,
      },
      children,
    ),
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  titleElement: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  open: PropTypes.bool,
  standalone: PropTypes.bool,
  ids: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
}

Accordion.defaultProps = {
  className: undefined,
  titleElement: 'h4',
  open: false,
  standalone: false,
}

var handleClick = function handleClick(_ref) {
  var setOpenState = _ref.setOpenState
  return function(currentState) {
    return setOpenState(!currentState)
  }
}

var createIds = function createIds(_ref2) {
  var ids = _ref2.ids
  return (
    ids || {
      ids: {
        title: getUniqueId('ln-accordion-'),
      },
    }
  )
}

var AccordionWrapper = compose(
  setDisplayName('Accordion'),
  withState('open', 'setOpenState', function(_ref3) {
    var defaultOpen = _ref3.defaultOpen
    return !!defaultOpen
  }),
  withHandlers({ handleClick: handleClick }),
  withPropsOnChange(function() {
    return false
  }, createIds),
)(Accordion)

var ListItem = function ListItem(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    type = _ref.type,
    rest = objectWithoutProperties(_ref, ['className', 'children', 'type'])
  return React.createElement(
    'li',
    _extends({}, rest, {
      className: classnames(
        className,
        ((_classnames = {}),
        (_classnames['ln-o-' + type + '-list__item'] = type),
        _classnames),
      ),
    }),
    children,
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['bare', 'inline', 'matrix']),
}

ListItem.defaultProps = {
  className: undefined,
  type: undefined,
}

var List = function List(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    type = _ref.type,
    spaced = _ref.spaced,
    items = _ref.items,
    ordered = _ref.ordered,
    rest = objectWithoutProperties(_ref, [
      'className',
      'children',
      'type',
      'spaced',
      'items',
      'ordered',
    ])

  var ListElement = ordered ? 'ol' : 'ul'
  var keys = []

  return React.createElement(
    ListElement,
    _extends({}, rest, {
      className: classnames(
        className,
        ((_classnames = {}),
        (_classnames['ln-o-' + type + '-list'] = type),
        (_classnames['ln-o-' + type + '-list--spaced'] = type && spaced),
        _classnames),
      ),
    }),
    items
      ? items.map(function(item, index) {
          var key =
            'listItem-' + (!keys.includes(item.toString()) ? item : index)
          keys.push(item.toString())

          return React.createElement(
            ListItem,
            {
              key: key,
              type: type,
            },
            item,
          )
        })
      : children,
  )
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node),
  type: PropTypes.oneOf(['bare', 'inline', 'matrix']),
  spaced: PropTypes.bool,
  ordered: PropTypes.bool,
}

List.defaultProps = {
  className: undefined,
  children: false,
  items: undefined,
  type: undefined,
  spaced: false,
  ordered: false,
}

var BreadcrumbsWrapper = function BreadcrumbsWrapper(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'nav',
    _extends({}, rest, {
      className: 'ln-c-breadcrumbs' + (className ? ' ' + className : ''),
    }),
    React.createElement(
      List,
      {
        type: 'inline',
        spaced: true,
      },
      children,
    ),
  )
}

BreadcrumbsWrapper.displayName = 'Breadcrumbs.Wrapper'

BreadcrumbsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

BreadcrumbsWrapper.defaultProps = {
  className: undefined,
}

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    rest = objectWithoutProperties(_ref, ['children', 'className', 'active'])
  return React.createElement(
    ListItem,
    _extends({}, rest, {
      type: 'inline',
      className: 'ln-c-breadcrumbs' + (className ? ' ' + className : ''),
    }),
    active
      ? children
      : React.createElement(
          'span',
          { className: 'ln-c-breadcrumbs__item' },
          children,
        ),
  )
}

BreadcrumbsItem.displayName = 'Breadcrumbs.Item'

BreadcrumbsItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
}

BreadcrumbsItem.defaultProps = {
  className: undefined,
  active: false,
}

var Breadcrumbs = {
  Wrapper: BreadcrumbsWrapper,
  Item: BreadcrumbsItem,
}

var Button = function Button(_ref) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    fullWidth = _ref.fullWidth,
    onClick = _ref.onClick,
    type = _ref.type,
    title = _ref.title,
    containerElement = _ref.containerElement,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'disabled',
      'fullWidth',
      'onClick',
      'type',
      'title',
      'containerElement',
    ])

  var props = _extends({}, rest, {
    className: classnames('ln-c-button', className, {
      'is-disabled': disabled,
      'ln-c-button--full': fullWidth,
    }),
    role: 'button',
    title: title,
    onClick: onClick,
  })

  if (containerElement === 'button') {
    props = _extends({}, props, {
      disabled: disabled,
      'aria-disabled': disabled || undefined,
      type: type,
    })
  }

  return React.isValidElement(containerElement)
    ? React.cloneElement(containerElement, props, children)
    : React.createElement(containerElement, props, children)
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
}

Button.defaultProps = {
  className: undefined,
  disabled: false,
  fullWidth: false,
  type: 'button',
  containerElement: 'button',
  title: undefined,
}

var PrimaryButton = function PrimaryButton(props) {
  return React.createElement(
    Button,
    _extends({}, props, {
      className: classnames('ln-c-button--primary', props.className),
    }),
    props.children,
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

PrimaryButton.defaultProps = {
  className: undefined,
}

var SecondaryButton = function SecondaryButton(props) {
  return React.createElement(
    Button,
    _extends({}, props, {
      className: classnames('ln-c-button--secondary', props.className),
    }),
    props.children,
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

SecondaryButton.defaultProps = {
  className: undefined,
}

var TextButton = function TextButton(props) {
  return React.createElement(
    Button,
    _extends({}, props, {
      className: classnames('ln-c-button--text-only', props.className),
    }),
    props.children,
  )
}

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

TextButton.defaultProps = {
  className: undefined,
}

var Cancel = function Cancel(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '17',
        height: '17',
        viewBox: '0 0 17 17',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'nonzero',
      },
      React.createElement('path', {
        d:
          'M.293 1.707L14.435 15.85a1 1 0 0 0 1.414-1.414L1.707.293A1 1 0 0 0 .293 1.707z',
      }),
      React.createElement('path', {
        d:
          'M14.435.293L.293 14.435a1 1 0 0 0 1.414 1.414L15.85 1.707A1 1 0 1 0 14.435.293z',
      }),
    ),
  )
}

var CloseIcon = iconHandler(Cancel)

var CloseButton = function CloseButton(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    title = _ref.title,
    rest = objectWithoutProperties(_ref, ['className', 'onClick', 'title'])
  return React.createElement(
    Button,
    _extends({}, rest, {
      className: classnames(className, 'ln-c-dismiss'),
      onClick: onClick,
      title: title,
    }),
    React.createElement(CloseIcon, null),
  )
}

CloseButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
}

CloseButton.defaultProps = {
  className: undefined,
  title: 'Close',
}

var Search = function Search(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'nonzero',
      },
      React.createElement('path', {
        d:
          'M23.207 21.793l-7.5-7.5a1 1 0 0 0-1.414 1.414l7.5 7.5a1 1 0 0 0 1.414-1.414z',
      }),
      React.createElement('path', {
        d:
          'M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14zm0 2A9 9 0 1 1 9 0a9 9 0 0 1 0 18z',
      }),
    ),
  )
}

var Search$1 = iconHandler(Search)

var SearchButton = function SearchButton(_ref) {
  var icon$$1 = _ref.icon,
    text = _ref.text,
    inputAction = _ref.inputAction,
    rest = objectWithoutProperties(_ref, ['icon', 'text', 'inputAction'])

  var ButtonElement = inputAction ? Button : PrimaryButton

  return React.createElement(
    ButtonElement,
    _extends({ type: 'submit' }, rest),
    icon$$1,
    React.createElement('span', { className: 'ln-u-visually-hidden' }, text),
  )
}

SearchButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  inputAction: PropTypes.bool,
}

SearchButton.defaultProps = {
  icon: React.createElement(Search$1, null),
  text: 'Search',
  inputAction: false,
}

// Base

var Wrapper$1 = function Wrapper(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-c-cta-button-group',
        'ln-o-clearfix',
      ),
    }),
    children,
  )
}

Wrapper$1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Wrapper$1.defaultProps = {
  className: undefined,
}

Wrapper$1.displayName = 'ButtonGroup.Wrapper'

var Primary = function Primary(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-cta-button-group__primary'),
    }),
    children,
  )
}

Primary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Primary.defaultProps = {
  className: undefined,
}

Primary.displayName = 'ButtonGroup.Primary'

var Secondary = function Secondary(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-cta-button-group__secondary'),
    }),
    children,
  )
}

Secondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Secondary.defaultProps = {
  className: undefined,
}

Secondary.displayName = 'ButtonGroup.Secondary'

var ButtonGroup = {
  Wrapper: Wrapper$1,
  Primary: Primary,
  Secondary: Secondary,
}

var Card = function Card(_ref) {
  var className = _ref.className,
    padded = _ref.padded,
    children = _ref.children,
    rest = objectWithoutProperties(_ref, ['className', 'padded', 'children'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames('ln-c-card', className, {
        'ln-c-card--soft': padded,
      }),
    }),
    children,
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padded: PropTypes.bool,
}

Card.defaultProps = {
  className: undefined,
  padded: true,
}

var setHasOverlay = function(visible) {
  var classHandler =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : document.body.classList

  var className = 'has-overlay'

  if (visible) {
    return classHandler.add(className)
  }

  return classHandler.remove(className)
}

var SiteWrap = function SiteWrap(_ref) {
  var padded = _ref.padded,
    className = _ref.className,
    children = _ref.children,
    large = _ref.large,
    rest = objectWithoutProperties(_ref, [
      'padded',
      'className',
      'children',
      'large',
    ])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames('ln-o-site-wrap', 'ln-o-clearfix', className, {
        'ln-o-site-wrap--padding': padded,
        'ln-o-site-wrap--large': large,
      }),
    }),
    children,
  )
}

SiteWrap.propTypes = {
  padded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
}

SiteWrap.defaultProps = {
  padded: false,
  large: false,
  className: undefined,
}

var NavigationWrapper = function NavigationWrapper(_ref) {
  var children = _ref.children,
    title = _ref.title,
    button = _ref.button,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, [
      'children',
      'title',
      'button',
      'className',
    ])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-navigation-wrapper'),
    }),
    React.createElement(
      SiteWrap,
      { padded: true, large: true, className: 'ln-u-hard-right' },
      button,
      !!title &&
        React.createElement(
          'h1',
          { className: 'ln-c-navigation-wrapper__title' },
          title,
        ),
      !!children &&
        React.createElement(
          'nav',
          { className: 'ln-c-navigation-wrapper__inner' },
          children,
        ),
    ),
  )
}

NavigationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.element,
  title: PropTypes.node,
  className: PropTypes.string,
}

NavigationWrapper.defaultProps = {
  button: undefined,
  title: undefined,
  className: undefined,
}

var Navigation$1 = function Navigation(_ref) {
  var items = _ref.items,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['items', 'className'])
  return React.createElement(
    'ul',
    _extends({}, rest, { className: className.list }),
    items.map(function(Element) {
      if (Element.type === 'li') return Element

      return React.createElement(
        'li',
        {
          key: Element.props.href || Element.props.to,
          className: className.item,
        },
        React.cloneElement(Element, {
          className: classnames(Element.props.className, className.link),
        }),
      )
    }),
  )
}

Navigation$1.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.shape({
    list: PropTypes.string,
    item: PropTypes.string,
    link: PropTypes.string,
  }),
}

Navigation$1.defaultProps = {
  items: [],
  className: {
    list: 'ln-c-navigation',
    item: 'ln-c-navigation__item',
    link: 'ln-c-navigation__link',
  },
}

var MenuButton = function MenuButton(_ref) {
  var className = _ref.className,
    onClick = _ref.onClick,
    rest = objectWithoutProperties(_ref, ['className', 'onClick'])
  return React.createElement(
    'button',
    _extends({}, rest, {
      className: className,
      'aria-hidden': 'true',
      tabIndex: '-1',
      onClick: onClick,
    }),
    React.createElement(
      'span',
      { className: 'ln-navigation-toggle' },
      React.createElement('span', {
        className: 'ln-c-navigation-toggle__item',
      }),
    ),
  )
}

MenuButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

MenuButton.defaultProps = {
  className: undefined,
}

var Navigation = {
  Wrapper: NavigationWrapper,
  List: Navigation$1,
}

var navigationClasses = {
  list: 'ln-c-topbar__list',
  item: 'ln-c-topbar__item',
  link: 'ln-o-bare-link ln-c-topbar__text',
}

var TopBar = function TopBar(_ref) {
  var logo = _ref.logo,
    items = _ref.items,
    meta = _ref.meta,
    className = _ref.className,
    toggle = _ref.toggle,
    hasDivider = _ref.hasDivider,
    rest = objectWithoutProperties(_ref, [
      'logo',
      'items',
      'meta',
      'className',
      'toggle',
      'hasDivider',
    ])

  var createOnClickHandle = function createOnClickHandle(onClick) {
    return function(e) {
      toggle(false)

      if (onClick) {
        onClick(e)
      }
    }
  }

  var addOnClickHandler = function addOnClickHandler(menuItem) {
    return cloneElement(menuItem, {
      onClick: createOnClickHandle(menuItem.props.onClick),
    })
  }

  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-c-topbar',
        !hasDivider && 'ln-c-topbar--hide-divider',
      ),
    }),
    React.createElement(
      SiteWrap,
      { padded: true, large: true },
      React.createElement(
        'div',
        { className: 'ln-o-flag' },
        React.createElement(
          'div',
          { className: 'ln-o-flag__body' },
          React.createElement(Navigation.List, {
            className: navigationClasses,
            items: logo
              ? [
                  React.createElement(
                    'li',
                    {
                      key: 'logo',
                      className: 'ln-c-topbar__item ln-c-topbar__item--logo',
                    },
                    logo,
                  ),
                ].concat(items.map(addOnClickHandler))
              : items.map(addOnClickHandler),
          }),
        ),
        meta &&
          React.createElement(
            'div',
            { className: 'ln-o-flag__component' },
            React.createElement(
              'div',
              { className: 'ln-c-topbar__text' },
              meta,
            ),
          ),
      ),
    ),
  )
}

TopBar.propTypes = {
  logo: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.node),
  meta: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  hasDivider: PropTypes.bool,
}

TopBar.defaultProps = {
  logo: undefined,
  items: [],
  meta: undefined,
  className: undefined,
  hasDivider: true,
}

var Form = function Form(_ref) {
  var children = _ref.children,
    className = _ref.className,
    onSubmit = _ref.onSubmit,
    rest = objectWithoutProperties(_ref, ['children', 'className', 'onSubmit'])
  return React.createElement(
    'form',
    _extends({}, rest, {
      noValidate: true,
      onSubmit: onSubmit,
      className: className,
    }),
    children,
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  className: undefined,
  onSubmit: undefined,
}

var LabelInfo = function LabelInfo(_ref) {
  var className = _ref.className,
    children = _ref.children,
    rest = objectWithoutProperties(_ref, ['className', 'children'])
  return React.createElement(
    'span',
    _extends({}, rest, {
      className: classnames('ln-c-label__info', className),
    }),
    children,
  )
}

LabelInfo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

LabelInfo.defaultProps = {
  className: undefined,
}

var DEFAULT_REQUIRED_INDICATOR = ''
var DEFAULT_OPTIONAL_INDICATOR = '(optional)'

var Label = function Label(_ref) {
  var element = _ref.element,
    htmlFor = _ref.htmlFor,
    requiredLabel = _ref.requiredLabel,
    optionalLabel = _ref.optionalLabel,
    children = _ref.children,
    className = _ref.className,
    hidden = _ref.hidden,
    rest = objectWithoutProperties(_ref, [
      'element',
      'htmlFor',
      'requiredLabel',
      'optionalLabel',
      'children',
      'className',
      'hidden',
    ])

  var Element = element
  var indicator = void 0

  if (optionalLabel !== undefined) {
    indicator =
      optionalLabel === true ? DEFAULT_OPTIONAL_INDICATOR : optionalLabel
  }

  if (requiredLabel !== undefined) {
    indicator =
      requiredLabel === true ? DEFAULT_REQUIRED_INDICATOR : requiredLabel
  }

  return React.createElement(
    Element,
    _extends({}, rest, {
      htmlFor: htmlFor,
      className: classnames(
        className,
        'ln-c-label',
        hidden && 'ln-u-visually-hidden',
      ),
    }),
    children,
    indicator && React.createElement(LabelInfo, null, ' ', indicator),
  )
}

Label.displayName = 'Label'

Label.propTypes = {
  element: PropTypes.oneOf(['label', 'legend']),
  htmlFor: PropTypes.string.isRequired,
  requiredLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  optionalLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  hidden: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Label.defaultProps = {
  element: 'label',
  requiredLabel: undefined,
  optionalLabel: undefined,
  hidden: false,
  className: undefined,
}

var FieldInfo = function FieldInfo(_ref) {
  var id = _ref.id,
    children = _ref.children,
    error = _ref.error,
    warning = _ref.warning,
    className = _ref.className,
    displayFirst = _ref.displayFirst,
    rest = objectWithoutProperties(_ref, [
      'id',
      'children',
      'error',
      'warning',
      'className',
      'displayFirst',
    ])
  return React.createElement(
    'div',
    _extends({}, rest, {
      id: id,
      className: classnames(className, 'ln-c-field-info', {
        'ln-c-field-info--validation-first': displayFirst,
        'ln-c-field-info--error': error || warning,
        'ln-c-field-info--extra': !error && !warning,
      }),
      role: error || warning ? 'alert' : undefined,
    }),
    children,
  )
}

FieldInfo.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  className: PropTypes.string,
  displayFirst: PropTypes.bool,
}

FieldInfo.defaultProps = {
  id: undefined,
  error: false,
  warning: false,
  className: undefined,
  displayFirst: false,
}

var FormGroup = function FormGroup(_ref) {
  var element = _ref.element,
    labelElement = _ref.labelElement,
    name = _ref.name,
    required = _ref.required,
    optional = _ref.optional,
    label = _ref.label,
    error = _ref.error,
    warning = _ref.warning,
    info = _ref.info,
    children = _ref.children,
    className = _ref.className,
    validationFirst = _ref.validationFirst,
    hideLabel = _ref.hideLabel,
    rest = objectWithoutProperties(_ref, [
      'element',
      'labelElement',
      'name',
      'required',
      'optional',
      'label',
      'error',
      'warning',
      'info',
      'children',
      'className',
      'validationFirst',
      'hideLabel',
    ])

  var Element = element

  var hasError = !!error
  var hasWarning = !!warning

  return React.createElement(
    Element,
    _extends({}, rest, {
      className: classnames(className, 'ln-c-form-group', {
        'has-error': hasError,
        'has-warning': hasWarning,
      }),
    }),
    !!label &&
      React.createElement(
        Label,
        {
          element: labelElement,
          htmlFor: name,
          requiredLabel: required,
          optionalLabel: optional,
          hidden: hideLabel,
        },
        label,
      ),
    !!info && React.createElement(FieldInfo, { id: name + 'Info' }, info),
    (hasError || hasWarning) &&
      React.createElement(
        FieldInfo,
        {
          id: name + 'Validation',
          displayFirst: validationFirst,
          error: hasError,
          warning: hasWarning,
        },
        error || warning,
      ),
    children,
  )
}

FormGroup.propTypes = {
  element: PropTypes.oneOf(['div', 'fieldset']),
  labelElement: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  optional: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  label: PropTypes.node,
  hideLabel: PropTypes.bool,
  error: PropTypes.node,
  warning: PropTypes.node,
  info: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  validationFirst: PropTypes.bool,
}

FormGroup.defaultProps = {
  element: 'div',
  labelElement: undefined,
  required: undefined,
  optional: undefined,
  label: undefined,
  hideLabel: false,
  info: undefined,
  warning: undefined,
  error: undefined,
  className: undefined,
  validationFirst: false,
}

var Input = function Input(_ref) {
  var id = _ref.id,
    name = _ref.name,
    type = _ref.type,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    checked = _ref.checked,
    defaultChecked = _ref.defaultChecked,
    minLength = _ref.minLength,
    maxLength = _ref.maxLength,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    autoComplete = _ref.autoComplete,
    autoCapitalize = _ref.autoCapitalize,
    required = _ref.required,
    inputMode = _ref.inputMode,
    pattern = _ref.pattern,
    readOnly = _ref.readOnly,
    spellCheck = _ref.spellCheck,
    tabIndex = _ref.tabIndex,
    className = _ref.className,
    invalid = _ref.invalid,
    rest = objectWithoutProperties(_ref, [
      'id',
      'name',
      'type',
      'placeholder',
      'disabled',
      'onBlur',
      'onChange',
      'onFocus',
      'value',
      'defaultValue',
      'checked',
      'defaultChecked',
      'minLength',
      'maxLength',
      'min',
      'max',
      'step',
      'autoComplete',
      'autoCapitalize',
      'required',
      'inputMode',
      'pattern',
      'readOnly',
      'spellCheck',
      'tabIndex',
      'className',
      'invalid',
    ])
  return React.createElement(
    'input',
    _extends({}, rest, {
      id: id || name,
      name: name,
      type: type,

      className: className,

      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,

      value: value,
      defaultValue: defaultValue,
      checked: checked,
      defaultChecked: defaultChecked,

      placeholder: placeholder,

      tabIndex: tabIndex,

      autoComplete: autoComplete,
      autoCapitalize: autoCapitalize,

      inputMode: inputMode,
      spellCheck: spellCheck,

      required: required,
      minLength: minLength,
      maxLength: maxLength,
      min: min,
      max: max,
      step: step,
      pattern: pattern,

      readOnly: readOnly,
      disabled: disabled,

      'aria-disabled': disabled || undefined,
      'aria-required': required === false ? required : undefined,
      'aria-invalid': invalid || undefined,
    }),
  )
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  required: PropTypes.bool,
  inputMode: PropTypes.string,
  pattern: PropTypes.oneOfType([
    PropTypes.instanceOf(RegExp),
    PropTypes.string,
  ]),
  readOnly: PropTypes.bool,
  spellCheck: PropTypes.oneOf(['default', true, false]),
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
}

Input.defaultProps = {
  id: undefined,
  type: 'text',
  disabled: false,
  placeholder: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  checked: undefined,
  defaultChecked: undefined,
  minLength: undefined,
  maxLength: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  inputMode: undefined,
  pattern: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined,
}

var TextInput = function TextInput(_ref) {
  var className = _ref.className,
    props = objectWithoutProperties(_ref, ['className'])
  return React.createElement(
    Input,
    _extends({ className: classnames('ln-c-text-input', className) }, props),
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
}

TextInput.defaultProps = {
  className: undefined,
}

var propTypes = _extends({}, FormGroup.propTypes)
delete propTypes.children

var getRequiredFlag = function(required, optional) {
  return required !== undefined || optional !== undefined
    ? !!required
    : undefined
}

var getDescribedByIds = function(_ref) {
  var name = _ref.name,
    info = _ref.info,
    error = _ref.error,
    warning = _ref.warning
  return [
    info !== undefined && name + 'Info',
    (error !== undefined || warning !== undefined) && name + 'Validation',
  ].filter(function(id) {
    return !!id
  })
}

var getComponentName = function(component) {
  if (!component) return null

  var type = component.type || component

  if (typeof type === 'string') {
    return type
  }
  if (typeof type === 'function') {
    return type.displayName || type.name
  }
  return null
}

var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
    className = _ref.className,
    hasIcon = _ref.hasIcon,
    hasAction = _ref.hasAction,
    hasButton = _ref.hasButton,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'hasIcon',
      'hasAction',
      'hasButton',
    ])

  var hasIconClass = hasIcon
  var hasActionClass = hasAction

  React.Children.forEach(children, function(child) {
    if (React.isValidElement(child)) {
      var componentName = getComponentName(child)
      if (componentName === 'InputIcon') {
        hasIconClass = true
      }

      if (componentName === 'InputAction') {
        hasActionClass = true
      }
    }
  })

  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        'ln-c-input-group',
        hasIconClass && 'ln-c-input-group--has-icon',
        hasActionClass && 'ln-c-input-group--has-action',
        hasButton && 'ln-c-input-group--has-button',
        className,
      ),
    }),
    children,
  )
}

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
  hasAction: PropTypes.bool,
  hasButton: PropTypes.bool,
}

InputGroup.defaultProps = {
  children: undefined,
  className: undefined,
  hasIcon: false,
  hasAction: false,
  hasButton: false,
}

var InputIcon = function InputIcon(_ref) {
  var children = _ref.children

  var element = React.Children.only(children)

  return React.cloneElement(element, {
    className: classnames(
      'ln-c-input-group__icon',
      element.props && element.props.className,
    ),
    'aria-hidden': true,
  })
}

InputIcon.propTypes = {
  children: PropTypes.node,
}

InputIcon.defaultProps = {
  children: undefined,
}

var InputControl = function InputControl(_ref) {
  var children = _ref.children

  var element = React.Children.only(children)

  return React.cloneElement(element, {
    className: classnames(
      'ln-c-input-group__control',
      element.props && element.props.className,
    ),
  })
}

InputControl.propTypes = {
  children: PropTypes.node,
}

InputControl.defaultProps = {
  children: undefined,
}

var InputAction = function InputAction(_ref) {
  var children = _ref.children

  var element = React.Children.only(children)

  return React.cloneElement(element, {
    className: classnames(
      'ln-c-input-group__action',
      element.props && element.props.className,
    ),
  })
}

InputAction.propTypes = {
  children: PropTypes.node,
}

InputAction.defaultProps = {
  children: undefined,
}

var TextInputField = function TextInputField(_ref) {
  var className = _ref.className,
    required = _ref.required,
    requiredLabel = _ref.requiredLabel,
    optional = _ref.optional,
    optionalLabel = _ref.optionalLabel,
    validationFirst = _ref.validationFirst,
    label = _ref.label,
    hideLabel = _ref.hideLabel,
    error = _ref.error,
    warning = _ref.warning,
    info = _ref.info,
    labelElement = _ref.labelElement,
    hasButton = _ref.hasButton,
    icon = _ref.icon,
    action = _ref.action,
    actionFirst = _ref.actionFirst,
    props = objectWithoutProperties(_ref, [
      'className',
      'required',
      'requiredLabel',
      'optional',
      'optionalLabel',
      'validationFirst',
      'label',
      'hideLabel',
      'error',
      'warning',
      'info',
      'labelElement',
      'hasButton',
      'icon',
      'action',
      'actionFirst',
    ])

  var requiredFlag = getRequiredFlag(required, optional)
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error,
  })

  return React.createElement(
    FormGroup,
    {
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst,
      labelElement: labelElement,
    },
    React.createElement(
      InputGroup,
      { hasButton: hasButton },
      icon && React.createElement(InputIcon, null, icon),
      action && actionFirst && React.createElement(InputAction, null, action),
      React.createElement(
        InputControl,
        null,
        React.createElement(
          TextInput,
          _extends(
            {
              required: requiredFlag,
              invalid: error !== undefined ? !!error : undefined,
              'aria-describedby':
                describedBy.length > 0 ? describedBy.join(' ') : undefined,
            },
            props,
          ),
        ),
      ),
      action && !actionFirst && React.createElement(InputAction, null, action),
    ),
  )
}

TextInputField.propTypes = _extends({}, propTypes, {
  icon: PropTypes.node,
  action: PropTypes.node,
  hasButton: PropTypes.bool,
  actionFirst: PropTypes.bool,
})

TextInputField.defaultProps = {
  icon: undefined,
  action: undefined,
  hasButton: false,
  actionFirst: false,
}

var Password$1 = function Password(_ref) {
  var hasToggle = _ref.hasToggle,
    setTextVisibility = _ref.setTextVisibility,
    showText = _ref.showText,
    props = objectWithoutProperties(_ref, [
      'hasToggle',
      'setTextVisibility',
      'showText',
    ])
  return React.createElement(
    'div',
    { className: 'ln-c-password' },
    React.createElement(
      TextInput,
      _extends({}, props, { type: showText ? 'text' : 'password' }),
    ),
    hasToggle &&
      setTextVisibility &&
      React.createElement(
        TextButton,
        {
          className: 'ln-c-password__toggle-button',
          onClick: function onClick() {
            return setTextVisibility(!showText)
          },
        },
        showText ? 'Hide' : 'Show',
        React.createElement(
          'span',
          { className: 'ln-u-visually-hidden' },
          'password',
        ),
      ),
  )
}

Password$1.propTypes = {
  showText: PropTypes.bool,
  hasToggle: PropTypes.bool,
  setTextVisibility: PropTypes.func,
}

Password$1.defaultProps = {
  showText: false,
  hasToggle: false,
  setTextVisibility: undefined,
}

var Password = compose(
  setDisplayName('Password'),
  withState('showText', 'setTextVisibility', false),
)(Password$1)

var DEFAULT_LEVELS = {
  0: {
    className: '',
    caption: 'Too short',
    test: function test() {
      return true
    },
  },
  1: {
    className: 'is-level-1',
    caption: 'Bad',
    test: function test(value) {
      return value.length > 7
    },
  },
  2: {
    className: 'is-level-2',
    caption: 'Ok',
    test: function test(value) {
      return value.length > 9
    },
  },
  3: {
    className: 'is-level-3',
    caption: 'Good',
    test: function test(value) {
      return value.length > 11
    },
  },
  4: {
    className: 'is-level-4',
    caption: 'Great',
    test: function test(value) {
      return value.length > 13
    },
  },
}

var getLevel = function getLevel(value, levelMap) {
  var levels = Object.keys(levelMap)
  var reversedLevels = levels.reverse()

  if (value !== undefined) {
    for (var i = 0; i < levels.length; i += 1) {
      if (levelMap[reversedLevels[i]].test(value)) {
        return levelMap[reversedLevels[i]]
      }
    }
  }

  return levelMap[levels[0]]
}

var PasswordField = (function(_Component) {
  inherits(PasswordField, _Component)

  function PasswordField(props) {
    classCallCheck(this, PasswordField)

    var _this = possibleConstructorReturn(this, _Component.call(this, props))

    _this.state = { value: props.value || props.defaultValue || '' }

    _this.handleChange = _this.handleChange.bind(_this)
    return _this
  }

  PasswordField.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value })

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  PasswordField.prototype.render = function render() {
    var _props = this.props,
      levels = _props.levels,
      strengthIndicator = _props.strengthIndicator,
      className = _props.className,
      required = _props.required,
      requiredLabel = _props.requiredLabel,
      optional = _props.optional,
      optionalLabel = _props.optionalLabel,
      validationFirst = _props.validationFirst,
      label = _props.label,
      hideLabel = _props.hideLabel,
      error = _props.error,
      warning = _props.warning,
      info = _props.info,
      props = objectWithoutProperties(_props, [
        'levels',
        'strengthIndicator',
        'className',
        'required',
        'requiredLabel',
        'optional',
        'optionalLabel',
        'validationFirst',
        'label',
        'hideLabel',
        'error',
        'warning',
        'info',
      ])

    var strengthIndicatorId = props.name + 'StrengthIndicator'

    var requiredFlag = getRequiredFlag(required, optional)
    var describedBy = getDescribedByIds({
      name: props.name,
      info: info,
      warning: warning,
      error: error,
    }).concat([strengthIndicatorId])
    var level = getLevel(this.state.value, levels)

    return React.createElement(
      FormGroup,
      {
        name: props.name,
        required: required,
        optional: optional,
        label: label,
        hideLabel: hideLabel,
        error: error,
        warning: warning,
        info: info,
        className: className,
        validationFirst: validationFirst,
      },
      React.createElement(
        Password,
        _extends(
          {
            required: requiredFlag,
            invalid: error !== undefined ? !!error : undefined,
            'aria-describedby': describedBy.join(' '),
          },
          props,
          {
            value: this.state.value,
            onChange: this.handleChange,
          },
        ),
      ),
      strengthIndicator &&
        React.createElement(
          'div',
          { className: 'ln-c-password-strength-meter ' + level.className },
          React.createElement(
            'p',
            {
              id: strengthIndicatorId,
              className: 'ln-c-password-strength-meter__label',
              'aria-live': 'polite',
              'aria-atomic': 'true',
            },
            'Strength:',
            ' ',
            React.createElement(
              'span',
              { className: 'ln-c-password-strength-meter__value' },
              level.caption,
            ),
          ),
        ),
    )
  }

  return PasswordField
})(Component)

PasswordField.propTypes = _extends({}, propTypes, {
  levels: PropTypes.shape({}),
  strengthIndicator: PropTypes.bool,
})

PasswordField.defaultProps = {
  levels: DEFAULT_LEVELS,
  strengthIndicator: false,
}

var DEFAULT_PLACEHOLDER = 'Please select'

var Select = function Select(_ref) {
  var name = _ref.name,
    options = _ref.options,
    required = _ref.required,
    disabled = _ref.disabled,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    value = _ref.value,
    className = _ref.className,
    placeholder = _ref.placeholder,
    defaultValue = _ref.defaultValue,
    readOnly = _ref.readOnly,
    tabIndex = _ref.tabIndex,
    invalid = _ref.invalid,
    rest = objectWithoutProperties(_ref, [
      'name',
      'options',
      'required',
      'disabled',
      'onBlur',
      'onChange',
      'onFocus',
      'value',
      'className',
      'placeholder',
      'defaultValue',
      'readOnly',
      'tabIndex',
      'invalid',
    ])
  return React.createElement(
    'select',
    _extends({}, rest, {
      id: name,
      name: name,

      className: classnames('ln-c-select', className),

      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,

      value: value,
      defaultValue: defaultValue,

      required: required,

      tabIndex: tabIndex,

      disabled: disabled,
      readOnly: readOnly,

      'aria-disabled': disabled || undefined,
      'aria-required': required === false ? required : undefined,
      'aria-invalid': invalid || undefined,
    }),
    placeholder &&
      React.createElement(
        'option',
        { value: '' },
        typeof placeholder === 'string' ? placeholder : DEFAULT_PLACEHOLDER,
      ),
    options.map(function(option) {
      return React.createElement(
        'option',
        { key: name + '-' + option.value, value: option.value },
        option.label,
      )
    }),
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  tabIndex: PropTypes.number,
  invalid: PropTypes.bool,
}

Select.defaultProps = {
  disabled: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  placeholder: DEFAULT_PLACEHOLDER,
  className: undefined,
  required: undefined,
  readOnly: false,
  tabIndex: undefined,
  invalid: undefined,
}

var SelectField = function SelectField(_ref) {
  var className = _ref.className,
    required = _ref.required,
    requiredLabel = _ref.requiredLabel,
    optional = _ref.optional,
    optionalLabel = _ref.optionalLabel,
    validationFirst = _ref.validationFirst,
    label = _ref.label,
    hideLabel = _ref.hideLabel,
    error = _ref.error,
    warning = _ref.warning,
    info = _ref.info,
    props = objectWithoutProperties(_ref, [
      'className',
      'required',
      'requiredLabel',
      'optional',
      'optionalLabel',
      'validationFirst',
      'label',
      'hideLabel',
      'error',
      'warning',
      'info',
    ])

  var requiredFlag = getRequiredFlag(required, optional)
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error,
  })

  return React.createElement(
    FormGroup,
    {
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst,
    },
    React.createElement(
      Select,
      _extends(
        {
          required: requiredFlag,
          invalid: error !== undefined ? !!error : undefined,
          'aria-describedby':
            describedBy.length > 0 ? describedBy.join(' ') : undefined,
        },
        props,
      ),
    ),
  )
}

SelectField.propTypes = propTypes

var FormOption = function FormOption(_ref) {
  var label = _ref.label,
    className = _ref.className,
    fullWidth = _ref.fullWidth,
    type = _ref.type,
    props = objectWithoutProperties(_ref, [
      'label',
      'className',
      'fullWidth',
      'type',
    ])

  var id = props.value ? props.name + '-' + props.value : props.name

  return React.createElement(
    'div',
    {
      className: classnames(
        'ln-c-form-option',
        'ln-c-form-option--' + type,
        fullWidth && 'ln-c-form-option--full',
        className,
      ),
    },
    React.createElement(
      Input,
      _extends(
        {
          type: type,
          className: 'ln-c-form-option__input',
        },
        props,
        {
          id: id,
        },
      ),
    ),
    React.createElement(
      'label',
      { className: 'ln-c-form-option__label', htmlFor: id },
      label,
    ),
  )
}

FormOption.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  label: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
}

FormOption.defaultProps = {
  type: 'radio',
  label: undefined,
  className: undefined,
  fullWidth: false,
  value: undefined,
}

var getChecked = function getChecked(_ref) {
  var optionGroupValue = _ref.optionGroupValue,
    optionValue = _ref.optionValue,
    optionChecked = _ref.optionChecked

  var checked = void 0
  if (optionGroupValue !== undefined) checked = optionValue === optionGroupValue
  if (optionChecked !== undefined) checked = optionChecked
  return checked
}

var FormOptionFieldInput = function FormOptionFieldInput(_ref2) {
  var option = _ref2.option,
    optionGroupValue = _ref2.optionGroupValue,
    props = objectWithoutProperties(_ref2, ['option', 'optionGroupValue'])
  return React.createElement(
    FormOption,
    _extends({}, props, {
      label: option.label,
      value: option.value,
      checked: getChecked({
        optionGroupValue: optionGroupValue,
        optionValue: option.value,
        optionChecked: option.checked,
      }),
      defaultChecked: option.defaultChecked,
    }),
  )
}

FormOptionFieldInput.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.node,
    value: PropTypes.string,
    checked: PropTypes.bool,
  }).isRequired,
  optionGroupValue: PropTypes.string,
}

FormOptionFieldInput.defaultProps = {
  optionGroupValue: undefined,
}

var FormOptionField = function FormOptionField(_ref3) {
  var className = _ref3.className,
    required = _ref3.required,
    requiredLabel = _ref3.requiredLabel,
    optional = _ref3.optional,
    optionalLabel = _ref3.optionalLabel,
    validationFirst = _ref3.validationFirst,
    label = _ref3.label,
    hideLabel = _ref3.hideLabel,
    error = _ref3.error,
    warning = _ref3.warning,
    info = _ref3.info,
    options = _ref3.options,
    optionType = _ref3.optionType,
    props = objectWithoutProperties(_ref3, [
      'className',
      'required',
      'requiredLabel',
      'optional',
      'optionalLabel',
      'validationFirst',
      'label',
      'hideLabel',
      'error',
      'warning',
      'info',
      'options',
      'optionType',
    ])

  var requiredFlag = getRequiredFlag(required, optional)
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error,
  })
  var optionGroupValue =
    props.value !== undefined ? props.value.toString() : undefined

  var optionInputProps = _extends({}, props, {
    type: optionType,
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby':
      describedBy.length > 0 ? describedBy.join(' ') : undefined,
  })

  return React.createElement(
    FormGroup,
    {
      element: 'fieldset',
      labelElement: 'legend',
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst,
    },
    options.length > 1
      ? React.createElement(
          List,
          { type: 'bare' },
          options.map(function(option) {
            return React.createElement(
              ListItem,
              { type: 'bare', key: props.name + '-' + option.value },
              React.createElement(
                FormOptionFieldInput,
                _extends({}, optionInputProps, {
                  option: option,
                  optionGroupValue: optionGroupValue,
                }),
              ),
            )
          }),
        )
      : React.createElement(
          FormOptionFieldInput,
          _extends({}, optionInputProps, {
            option: options[0],
            optionGroupValue: optionGroupValue,
          }),
        ),
  )
}

FormOptionField.propTypes = _extends({}, propTypes, {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionType: PropTypes.oneOf(['radio', 'checkbox']),
})

FormOptionField.defaultProps = {
  optionType: 'radio',
}

var CheckboxField = compose(
  setDisplayName('CheckboxField'),
  withProps({ optionType: 'checkbox' }),
)(FormOptionField)

var RadioButtonField = compose(
  setDisplayName('RadioButtonField'),
  withProps({ optionType: 'radio' }),
)(FormOptionField)

var TextArea = function TextArea(_ref) {
  var id = _ref.id,
    name = _ref.name,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    minLength = _ref.minLength,
    maxLength = _ref.maxLength,
    autoComplete = _ref.autoComplete,
    autoCapitalize = _ref.autoCapitalize,
    required = _ref.required,
    readOnly = _ref.readOnly,
    spellCheck = _ref.spellCheck,
    tabIndex = _ref.tabIndex,
    className = _ref.className,
    invalid = _ref.invalid,
    cols = _ref.cols,
    rows = _ref.rows,
    wrap = _ref.wrap,
    rest = objectWithoutProperties(_ref, [
      'id',
      'name',
      'placeholder',
      'disabled',
      'onBlur',
      'onChange',
      'onFocus',
      'value',
      'defaultValue',
      'minLength',
      'maxLength',
      'autoComplete',
      'autoCapitalize',
      'required',
      'readOnly',
      'spellCheck',
      'tabIndex',
      'className',
      'invalid',
      'cols',
      'rows',
      'wrap',
    ])
  return React.createElement(
    'textarea',
    _extends({}, rest, {
      id: id || name,
      name: name,

      className: classnames(
        'ln-c-text-input ln-c-text-input--textarea',
        className,
      ),

      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,

      value: value,
      defaultValue: defaultValue,

      placeholder: placeholder,

      tabIndex: tabIndex,

      autoComplete: autoComplete,
      autoCapitalize: autoCapitalize,

      spellCheck: spellCheck,

      required: required,
      minLength: minLength,
      maxLength: maxLength,

      readOnly: readOnly,
      disabled: disabled,

      'aria-disabled': disabled || undefined,
      'aria-required': required === false ? required : undefined,
      'aria-invalid': invalid || undefined,

      cols: cols,
      rows: rows,
      wrap: wrap,
    }),
  )
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  autoCapitalize: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  spellCheck: PropTypes.oneOf(['default', true, false]),
  tabIndex: PropTypes.number,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  wrap: PropTypes.string,
}

TextArea.defaultProps = {
  id: undefined,
  disabled: false,
  placeholder: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
  defaultValue: undefined,
  checked: undefined,
  defaultChecked: undefined,
  minLength: undefined,
  maxLength: undefined,
  autoComplete: undefined,
  autoCapitalize: undefined,
  required: undefined,
  readOnly: false,
  spellCheck: undefined,
  tabIndex: undefined,
  className: undefined,
  invalid: undefined,
  rows: undefined,
  cols: undefined,
  wrap: undefined,
}

var TextAreaField = (function(_Component) {
  inherits(TextAreaField, _Component)

  function TextAreaField(props) {
    classCallCheck(this, TextAreaField)

    var _this = possibleConstructorReturn(this, _Component.call(this, props))

    _this.state = { value: props.value || props.defaultValue || '' }

    _this.handleChange = _this.handleChange.bind(_this)
    return _this
  }

  TextAreaField.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value })

    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  TextAreaField.prototype.render = function render() {
    var _props = this.props,
      characterCount = _props.characterCount,
      className = _props.className,
      required = _props.required,
      requiredLabel = _props.requiredLabel,
      optional = _props.optional,
      optionalLabel = _props.optionalLabel,
      validationFirst = _props.validationFirst,
      label = _props.label,
      hideLabel = _props.hideLabel,
      error = _props.error,
      warning = _props.warning,
      info = _props.info,
      props = objectWithoutProperties(_props, [
        'characterCount',
        'className',
        'required',
        'requiredLabel',
        'optional',
        'optionalLabel',
        'validationFirst',
        'label',
        'hideLabel',
        'error',
        'warning',
        'info',
      ])

    var counterId = props.name + 'Counter'

    var requiredFlag = getRequiredFlag(required, optional)
    var describedBy = getDescribedByIds({
      name: props.name,
      info: info,
      warning: warning,
      error: error,
    }).concat([counterId])

    return React.createElement(
      FormGroup,
      {
        name: props.name,
        required: required,
        optional: optional,
        label: label,
        hideLabel: hideLabel,
        error: error,
        warning: warning,
        info: info,
        className: className,
        validationFirst: validationFirst,
      },
      React.createElement(
        TextArea,
        _extends(
          {
            required: requiredFlag,
            invalid: error !== undefined ? !!error : undefined,
            'aria-describedby': describedBy.join(' '),
          },
          props,
          {
            onChange: this.handleChange,
            value: this.state.value,
          },
        ),
      ),
      characterCount &&
        props.maxLength &&
        React.createElement(
          'p',
          { id: counterId, 'aria-live': 'polite', 'aria-atomic': 'true' },
          this.state.value.length,
          React.createElement(
            'span',
            { className: 'ln-u-visually-hidden' },
            ' out of ',
          ),
          React.createElement('span', { 'aria-hidden': 'true' }, ' / '),
          props.maxLength,
        ),
    )
  }

  return TextAreaField
})(Component)

TextAreaField.propTypes = _extends({}, propTypes, {
  characterCount: PropTypes.bool,
})

TextAreaField.defaultProps = {
  characterCount: false,
}

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
    hasIcon = _ref.hasIcon,
    hasAction = _ref.hasAction,
    hasButton = _ref.hasButton,
    icon$$1 = _ref.icon,
    action = _ref.action,
    props = objectWithoutProperties(_ref, [
      'className',
      'hasIcon',
      'hasAction',
      'hasButton',
      'icon',
      'action',
    ])
  return React.createElement(
    InputGroup,
    { hasButton: hasButton, className: className },
    hasIcon && React.createElement(InputIcon, null, icon$$1),
    React.createElement(
      InputControl,
      null,
      React.createElement(TextInput, _extends({ type: 'search' }, props)),
    ),
    hasAction && React.createElement(InputAction, null, action),
  )
}

SearchInput.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
  hasButton: PropTypes.bool,
  hasAction: PropTypes.bool,
  hasIcon: PropTypes.bool,
}

SearchInput.defaultProps = {
  className: undefined,
  icon: React.createElement(Search$1, null),
  action: React.createElement(SearchButton, { inputAction: true }),
  hasButton: false,
  hasAction: false,
  hasIcon: false,
}

var FlagWrapper = function FlagWrapper(_ref) {
  var className = _ref.className,
    children = _ref.children,
    respondAt = _ref.respondAt,
    rest = objectWithoutProperties(_ref, ['className', 'children', 'respondAt'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        !respondAt && 'ln-o-flag',
        respondAt && 'ln-o-flag@' + respondAt,
      ),
    }),
    children,
  )
}

FlagWrapper.displayName = 'Flag.Wrapper'

FlagWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  respondAt: PropTypes.string,
}

FlagWrapper.defaultProps = {
  className: undefined,
  respondAt: undefined,
}

var FlagBody = function FlagBody(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    alignment = _ref.alignment,
    rest = objectWithoutProperties(_ref, ['className', 'children', 'alignment'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-o-flag__body',
        ((_classnames = {}),
        (_classnames['ln-o-flag__body--' + alignment] = alignment),
        _classnames),
      ),
    }),
    children,
  )
}

FlagBody.displayName = 'Flag.Body'

FlagBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['top', 'bottom']),
}

FlagBody.defaultProps = {
  className: undefined,
  alignment: undefined,
}

var FlagComponent = function FlagComponent(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    alignment = _ref.alignment,
    nowrap = _ref.nowrap,
    rest = objectWithoutProperties(_ref, [
      'className',
      'children',
      'alignment',
      'nowrap',
    ])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-o-flag__component',
        ((_classnames = {}),
        (_classnames['ln-o-flag__component--' + alignment] = alignment),
        (_classnames['ln-o-flag__component--nowrap'] = nowrap),
        _classnames),
      ),
    }),
    children,
  )
}

FlagComponent.displayName = 'Flag.Component'

FlagComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(['top', 'bottom']),
  nowrap: PropTypes.bool,
}

FlagComponent.defaultProps = {
  className: undefined,
  alignment: undefined,
  nowrap: false,
}

var Flag = {
  Wrapper: FlagWrapper,
  Body: FlagBody,
  Component: FlagComponent,
}

var SearchField = function SearchField(_ref) {
  var className = _ref.className,
    required = _ref.required,
    requiredLabel = _ref.requiredLabel,
    optional = _ref.optional,
    optionalLabel = _ref.optionalLabel,
    validationFirst = _ref.validationFirst,
    label = _ref.label,
    hideLabel = _ref.hideLabel,
    error = _ref.error,
    warning = _ref.warning,
    info = _ref.info,
    labelElement = _ref.labelElement,
    button = _ref.button,
    props = objectWithoutProperties(_ref, [
      'className',
      'required',
      'requiredLabel',
      'optional',
      'optionalLabel',
      'validationFirst',
      'label',
      'hideLabel',
      'error',
      'warning',
      'info',
      'labelElement',
      'button',
    ])

  var requiredFlag = getRequiredFlag(required, optional)
  var describedBy = getDescribedByIds({
    name: props.name,
    info: info,
    warning: warning,
    error: error,
  })

  var inputProps = _extends({}, props, {
    required: requiredFlag,
    invalid: error !== undefined ? !!error : undefined,
    'aria-describedby':
      describedBy.length > 0 ? describedBy.join(' ') : undefined,
  })

  return React.createElement(
    FormGroup,
    {
      name: props.name,
      required: required,
      optional: optional,
      label: label,
      hideLabel: hideLabel,
      error: error,
      warning: warning,
      info: info,
      className: className,
      validationFirst: validationFirst,
      labelElement: labelElement,
    },
    props.hasButton
      ? React.createElement(
          Flag.Wrapper,
          null,
          React.createElement(
            Flag.Body,
            null,
            React.createElement(SearchInput, inputProps),
          ),
          React.createElement(Flag.Component, null, button),
        )
      : React.createElement(SearchInput, inputProps),
  )
}

SearchField.propTypes = _extends({}, propTypes, {
  button: PropTypes.node,
})

SearchField.defaultProps = {
  button: React.createElement(SearchButton, null),
}

var Fieldset = function Fieldset(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    Card,
    _extends({}, rest, { className: className }),
    React.createElement('fieldset', null, children),
  )
}

Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Fieldset.defaultProps = {
  children: undefined,
  className: undefined,
}

var Legend = function Legend(_ref) {
  var children = _ref.children,
    className = _ref.className,
    fontStyle = _ref.fontStyle,
    heading = _ref.heading,
    headingLevel = _ref.headingLevel,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'fontStyle',
      'heading',
      'headingLevel',
    ])
  return React.createElement(
    'legend',
    _extends({}, rest, {
      className: classnames(fontStyle && 'ln-u-' + fontStyle, className),
      role: heading ? 'heading' : undefined,
      'aria-level': heading
        ? headingLevel || (fontStyle && fontStyle.replace(/\D+/g, ''))
        : undefined,
    }),
    children,
  )
}

Legend.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fontStyle: PropTypes.string,
  heading: PropTypes.bool,
  headingLevel: PropTypes.number,
}

Legend.defaultProps = {
  children: undefined,
  className: undefined,
  fontStyle: undefined,
  heading: true,
  headingLevel: undefined,
}

var Search$3 = function Search(_ref) {
  var _classnames, _classnames2

  var className = _ref.className,
    placeholder = _ref.placeholder,
    handleSubmit = _ref.handleSubmit,
    expandable = _ref.expandable,
    value = _ref.value,
    handleChange = _ref.handleChange,
    open = _ref.open,
    toggle = _ref.toggle,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    rest = objectWithoutProperties(_ref, [
      'className',
      'placeholder',
      'handleSubmit',
      'expandable',
      'value',
      'handleChange',
      'open',
      'toggle',
      'onBlur',
      'onFocus',
    ])
  return React.createElement(
    Form,
    _extends({}, filterProps(rest, ['changeValue', 'onExpandClick']), {
      onSubmit: handleSubmit,
      className: classnames(
        'ln-c-search',
        ((_classnames = {
          'ln-c-search--expandable': expandable,
          'is-open': open,
        }),
        (_classnames[className] = typeof className === 'string'),
        (_classnames[className.form] = !!className.form),
        _classnames),
      ),
    }),
    React.createElement('input', {
      type: 'search',
      className: classnames(
        'ln-c-search__input',
        'ln-c-text-input',
        ((_classnames2 = {}),
        (_classnames2[className.input] = !!className.input),
        _classnames2),
      ),
      placeholder: placeholder,
      value: value,
      onChange: handleChange,
      onBlur: onBlur,
      onFocus: onFocus,
    }),
    React.createElement(
      'button',
      {
        type: 'submit',
        className: 'ln-c-search__submit',
        disabled: !value,
        'aria-disabled': !value || undefined,
      },
      'Submit search query',
    ),
    expandable &&
      React.createElement(
        'button',
        {
          type: 'button',
          className: 'ln-c-search--expandable__toggle',
          onClick: toggle,
        },
        'Open Search',
      ),
  )
}

Search$3.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      form: PropTypes.string,
      input: PropTypes.string,
    }),
  ]),
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  expandable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  open: PropTypes.bool,
  toggle: PropTypes.func,
}

Search$3.defaultProps = {
  className: {},
  placeholder: 'Search',
  expandable: false,
  open: false,
  toggle: undefined,
  onBlur: undefined,
  onFocus: undefined,
}

var toggle$1 = function toggle(_ref) {
  var onExpandClick = _ref.onExpandClick,
    open = _ref.open
  return function() {
    return onExpandClick(!open)
  }
}

var handleChange = function handleChange(_ref2) {
  var onChange = _ref2.onChange,
    changeValue = _ref2.changeValue
  return function(e) {
    changeValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }
}

var handleSubmit = function handleSubmit(_ref3) {
  var onSubmit = _ref3.onSubmit,
    value = _ref3.value
  return function(e) {
    onSubmit(value)
    e.preventDefault()
  }
}

var Search$2 = compose(
  setDisplayName('Search'),
  withState('value', 'changeValue', ''),
  withState('open', 'onExpandClick', false),
  withHandlers({
    toggle: toggle$1,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
  }),
)(Search$3)

var navigationClasses$1 = {
  list: 'ln-c-icon-nav',
  item: 'ln-c-icon-nav__item',
  link: 'ln-c-icon-nav__link',
}

var searchClasses = {
  form: 'ln-c-icon-nav__form',
  input: 'ln-c-icon-nav__text-input',
}

var IconNavigation = function IconNavigation(_ref) {
  var onSearchSubmit = _ref.onSearchSubmit,
    items = _ref.items,
    rest = objectWithoutProperties(_ref, ['onSearchSubmit', 'items'])
  return React.createElement(
    Navigation.List,
    _extends({}, rest, {
      className: navigationClasses$1,
      items: onSearchSubmit
        ? [
            React.createElement(
              'li',
              {
                key: 'search',
                className: 'ln-c-icon-nav__item ln-c-icon-nav__item--fixed',
              },
              React.createElement(Search$2, {
                className: searchClasses,
                onSubmit: onSearchSubmit,
                expandable: true,
              }),
            ),
          ].concat(items)
        : items,
    }),
  )
}

IconNavigation.propTypes = {
  onSearchSubmit: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.element),
}

IconNavigation.defaultProps = {
  onSearchSubmit: undefined,
  items: [],
}

var MainBar = function MainBar(_ref) {
  var logo = _ref.logo,
    toggle = _ref.toggle,
    menuItems = _ref.menuItems,
    iconNav = _ref.iconNav,
    onSearchSubmit = _ref.onSearchSubmit,
    className = _ref.className,
    topBar = _ref.topBar,
    rest = objectWithoutProperties(_ref, [
      'logo',
      'toggle',
      'menuItems',
      'iconNav',
      'onSearchSubmit',
      'className',
      'topBar',
    ])

  var showIconNav = iconNav.length > 0 || onSearchSubmit
  var showNavList = menuItems.length > 0

  var createOnClickHandle = function createOnClickHandle(onClick) {
    return function(e) {
      toggle(false)

      if (onClick) {
        onClick(e)
      }
    }
  }

  var addOnClickHandler = function addOnClickHandler(menuItem) {
    return cloneElement(menuItem, {
      onClick: createOnClickHandle(menuItem.props.onClick),
    })
  }

  return React.createElement(
    Navigation.Wrapper,
    _extends({}, rest, {
      title: logo,
      button:
        iconNav.length > 0 ||
        menuItems.length > 0 ||
        Object.keys(topBar).length > 0
          ? React.createElement(MenuButton, {
              className: 'ln-c-header__toggle',
              onClick: toggle,
            })
          : undefined,
      className: className,
    }),
    (showIconNav || showNavList) && [
      showIconNav &&
        React.createElement(IconNavigation, {
          key: 'iconNav',
          items: iconNav.map(addOnClickHandler),
          onSearchSubmit: onSearchSubmit,
        }),
      showNavList > 0 &&
        React.createElement(Navigation.List, {
          key: 'mainNav',
          items: menuItems.map(addOnClickHandler),
        }),
    ],
  )
}

MainBar.propTypes = {
  logo: PropTypes.node.isRequired,
  toggle: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
  topBar: PropTypes.shape({}),
  iconNav: IconNavigation.propTypes.items,
  onSearchSubmit: IconNavigation.propTypes.onSearchSubmit,
}

MainBar.defaultProps = {
  menuItems: [],
  className: undefined,
  topBar: {},
  iconNav: IconNavigation.defaultProps.items,
  onSearchSubmit: IconNavigation.defaultProps.onSearchSubmit,
}

var Header$1 = function Header(_ref) {
  var className = _ref.className,
    mainId = _ref.mainId,
    open = _ref.open,
    toggle = _ref.toggle,
    topBar = _ref.topBar,
    logo = _ref.logo,
    iconNav = _ref.iconNav,
    menuItems = _ref.menuItems,
    onSearchSubmit = _ref.onSearchSubmit,
    rest = objectWithoutProperties(_ref, [
      'className',
      'mainId',
      'open',
      'toggle',
      'topBar',
      'logo',
      'iconNav',
      'menuItems',
      'onSearchSubmit',
    ])
  return React.createElement(
    'header',
    _extends({}, filterProps(rest, ['onMenuClick']), {
      className: classnames('ln-c-header', className, {
        'is-open': open,
      }),
    }),
    React.createElement(
      'a',
      { href: '#' + mainId, className: 'ln-u-visually-hidden' },
      'Skip Navigation',
    ),
    React.createElement('button', {
      className: 'ln-c-header__toggle-overlay js-header-toggle',
      title: 'Toggle Menu',
      'aria-hidden': 'true',
      tabIndex: '-1',
      onClick: toggle,
    }),
    React.createElement(
      'div',
      { className: 'ln-c-header__inner' },
      Object.keys(topBar).length > 0 &&
        React.createElement(
          TopBar,
          _extends({}, topBar, {
            toggle: toggle,
            hasDivider: iconNav.length > 0 || menuItems.length > 0,
          }),
        ),
      React.createElement(MainBar, {
        logo: logo,
        toggle: toggle,
        menuItems: menuItems,
        iconNav: iconNav,
        onSearchSubmit: onSearchSubmit,
        topBar: topBar,
      }),
    ),
  )
}

Header$1.propTypes = _extends(
  {
    mainId: PropTypes.string,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    topBar: PropTypes.shape(_extends({}, TopBar.propTypes)),
  },
  MainBar.propTypes,
  {
    iconNav: PropTypes.arrayOf(PropTypes.element),
  },
)

Header$1.defaultProps = _extends(
  {
    mainId: 'main-content',
    className: undefined,
    topBar: {},
  },
  MainBar.defaultProps,
)

var toggle = function toggle(_ref) {
  var onMenuClick = _ref.onMenuClick,
    open = _ref.open
  return function(forceState) {
    var newState = typeof forceState === 'boolean' ? forceState : !open

    setHasOverlay(newState)
    return onMenuClick(newState)
  }
}

var Header = compose(
  setDisplayName('Header'),
  withState('open', 'onMenuClick', false),
  withHandlers({
    toggle: toggle,
  }),
)(Header$1)

var MainSection = function MainSection(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      id: 'main-content',
      className: classnames(className, 'ln-c-main-content'),
    }),
    children,
  )
}

MainSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

MainSection.defaultProps = {
  children: undefined,
  className: undefined,
}

var ColleagueLayout = function ColleagueLayout(_ref) {
  var children = _ref.children,
    className = _ref.className,
    mainId = _ref.mainId,
    open = _ref.open,
    toggle = _ref.toggle,
    topBar = _ref.topBar,
    logo = _ref.logo,
    iconNav = _ref.iconNav,
    menuItems = _ref.menuItems,
    onSearchSubmit = _ref.onSearchSubmit,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'mainId',
      'open',
      'toggle',
      'topBar',
      'logo',
      'iconNav',
      'menuItems',
      'onSearchSubmit',
    ])

  var headerProps = {
    mainId: mainId,
    open: open,
    toggle: toggle,
    topBar: topBar,
    logo: logo,
    iconNav: iconNav,
    menuItems: menuItems,
    onSearchSubmit: onSearchSubmit,
  }

  return React.createElement(
    'div',
    _extends({}, rest, { className: className }),
    React.createElement(Header, headerProps),
    React.createElement(MainSection, null, children),
  )
}
ColleagueLayout.propTypes = _extends(
  {
    children: PropTypes.node,
    className: PropTypes.string,
  },
  Header.propTypes,
)

ColleagueLayout.defaultProps = {
  children: undefined,
  className: undefined,
}

var GridWrapper = function GridWrapper(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    matrix = _ref.matrix,
    reverse = _ref.reverse,
    equalHeight = _ref.equalHeight,
    gutterSize = _ref.gutterSize,
    verticalAlign = _ref.verticalAlign,
    horizontalAlign = _ref.horizontalAlign,
    element = _ref.element,
    rest = objectWithoutProperties(_ref, [
      'className',
      'children',
      'matrix',
      'reverse',
      'equalHeight',
      'gutterSize',
      'verticalAlign',
      'horizontalAlign',
      'element',
    ])

  var Element = element
  return React.createElement(
    Element,
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-o-grid',
        ((_classnames = {
          'ln-o-grid--matrix': matrix,
          'ln-o-grid--reverse': reverse,
          'ln-o-grid--equal-height': equalHeight,
        }),
        (_classnames['ln-o-grid--gutter-' + gutterSize] = gutterSize),
        (_classnames['ln-o-grid--' + verticalAlign] = verticalAlign),
        (_classnames['ln-u-text-align-' + horizontalAlign] = horizontalAlign),
        _classnames),
      ),
    }),
    children,
  )
}

GridWrapper.displayName = 'Grid.Wrapper'

GridWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  matrix: PropTypes.bool,
  gutterSize: PropTypes.string,
  reverse: PropTypes.bool,
  equalHeight: PropTypes.bool,
  verticalAlign: PropTypes.oneOf(['middle', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['center', 'right']),
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

GridWrapper.defaultProps = {
  className: undefined,
  matrix: false,
  gutterSize: undefined,
  reverse: false,
  equalHeight: false,
  verticalAlign: undefined,
  horizontalAlign: undefined,
  element: 'div',
}

var GridItem = function GridItem(_ref) {
  var _classnames

  var className = _ref.className,
    children = _ref.children,
    size = _ref.size,
    offsetLeft = _ref.offsetLeft,
    offsetRight = _ref.offsetRight,
    element = _ref.element,
    rest = objectWithoutProperties(_ref, [
      'className',
      'children',
      'size',
      'offsetLeft',
      'offsetRight',
      'element',
    ])

  var Element = element
  var sizeClass =
    (typeof size === 'undefined' ? 'undefined' : _typeof(size)) === 'object'
      ? Object.keys(size).map(function(breakpoint) {
          return breakpoint !== 'default'
            ? 'ln-u-' + size[breakpoint] + '@' + breakpoint
            : 'ln-u-' + size[breakpoint]
        })
      : 'ln-u-' + size

  return React.createElement(
    Element,
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-o-grid__item',
        sizeClass,
        ((_classnames = {}),
        (_classnames['ln-u-pull-' + offsetLeft] = offsetLeft),
        (_classnames['ln-u-push-' + offsetRight] = offsetRight),
        _classnames),
      ),
    }),
    children,
  )
}

GridItem.displayName = 'Grid.Item'

GridItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  offsetLeft: PropTypes.string,
  offsetRight: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

GridItem.defaultProps = {
  className: undefined,
  offsetLeft: undefined,
  offsetRight: undefined,
  element: 'div',
}

var Grid = {
  Wrapper: GridWrapper,
  Item: GridItem,
}

var Checkbox = compose(
  setDisplayName('Checkbox'),
  withProps({ type: 'checkbox' }),
)(FormOption)

var RadioButton = compose(
  setDisplayName('RadioButton'),
  withProps({ type: 'radio' }),
)(FormOption)

var LoadingIcon = function LoadingIcon(_ref) {
  var className = _ref.className,
    inverted = _ref.inverted,
    rest = objectWithoutProperties(_ref, ['className', 'inverted'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-c-loading-indicator',
        inverted && 'ln-c-loading-indicator--inverted',
      ),
    }),
    React.createElement('div', { className: 'ln-c-loading-indicator__bar' }),
  )
}

LoadingIcon.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
}

LoadingIcon.defaultProps = {
  className: undefined,
  inverted: false,
}

var LoadingIndicator = function LoadingIndicator(_ref) {
  var message = _ref.message,
    className = _ref.className,
    inverted = _ref.inverted,
    rest = objectWithoutProperties(_ref, ['message', 'className', 'inverted'])
  return React.createElement(
    Flag.Wrapper,
    _extends({}, rest, { className: className }),
    React.createElement(
      Flag.Component,
      null,
      React.createElement(LoadingIcon, { inverted: inverted }),
    ),
    React.createElement(Flag.Body, null, message),
  )
}

LoadingIndicator.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  inverted: PropTypes.bool,
}

LoadingIndicator.defaultProps = {
  message: 'Please wait, loading...',
  className: undefined,
  inverted: false,
}

var Modal = function Modal(_ref) {
  var children = _ref.children,
    className = _ref.className,
    open = _ref.open,
    handleClose = _ref.handleClose,
    closeContainerElement = _ref.closeContainerElement,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'open',
      'handleClose',
      'closeContainerElement',
    ])

  if (open) setHasOverlay(true)

  var onClose = function onClose(e) {
    setHasOverlay(false)

    if (handleClose) {
      handleClose(e)
    }

    if (closeContainerElement && closeContainerElement.onClick) {
      closeContainerElement.onClick(e)
    }
  }

  return React.createElement(
    'div',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-modal', {
        'is-open': open,
      }),
    }),
    React.createElement(
      Flag.Wrapper,
      { className: 'ln-u-fill-height' },
      React.createElement(
        Flag.Body,
        null,
        React.createElement(
          'div',
          { className: 'ln-c-modal__body' },
          React.createElement(CloseButton, {
            onClick: onClose,
            containerElement: closeContainerElement,
          }),
          children,
        ),
      ),
    ),
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  closeContainerElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
}

Modal.defaultProps = {
  className: undefined,
  open: false,
  handleClose: undefined,
  closeContainerElement: undefined,
}

var NotificationList = function NotificationList(_ref) {
  var children = _ref.children,
    className = _ref.className,
    open = _ref.open,
    rest = objectWithoutProperties(_ref, ['children', 'className', 'open'])
  return React.createElement(
    List,
    _extends({}, rest, {
      type: 'bare',
      className: classnames(className, 'ln-c-activities', {
        'is-open': open,
      }),
    }),
    children,
  )
}

NotificationList.displayName = 'Notification.List'

NotificationList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  open: PropTypes.bool,
}

NotificationList.defaultProps = {
  className: undefined,
  open: false,
}

var NotificationItem = function NotificationItem(_ref) {
  var children = _ref.children,
    className = _ref.className,
    notification = _ref.notification,
    handleClose = _ref.handleClose,
    open = _ref.open,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'notification',
      'handleClose',
      'open',
    ])
  return React.createElement(
    ListItem,
    _extends({}, rest, {
      type: 'bare',
      className: classnames(className, 'ln-c-activities__item', {
        'ln-c-activities__item--notification': notification,
        'is-open': notification && open,
      }),
    }),
    notification &&
      handleClose &&
      React.createElement(CloseButton, { onClick: handleClose }),
    children,
  )
}

NotificationItem.displayName = 'Notification.Item'

NotificationItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  notification: PropTypes.bool,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
}

NotificationItem.defaultProps = {
  className: undefined,
  notification: false,
  open: false,
  handleClose: undefined,
}

var Notification = {
  List: NotificationList,
  Item: NotificationItem,
}

var Section = function Section(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'section',
    _extends({}, rest, {
      className: classnames(className, 'ln-o-section'),
    }),
    children,
  )
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Section.defaultProps = {
  children: undefined,
  className: undefined,
}

var ArrowRight = function ArrowRight(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '10',
        height: '18',
        viewBox: '0 0 10 18',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M7.586 9L.293 16.293a1 1 0 0 0 1.414 1.414l8-8a1 1 0 0 0 0-1.414l-8-8A1 1 0 1 0 .293 1.707L7.586 9z',
    }),
  )
}

var ArrowRight$1 = iconHandler(ArrowRight)

var colours = {
  success: 'green',
  info: 'blue',
  warning: 'amber',
  danger: 'red',
}

var StatusCard = function StatusCard(_ref) {
  var _classnames

  var className = _ref.className,
    link = _ref.link,
    onClick = _ref.onClick,
    status = _ref.status,
    children = _ref.children,
    containerElement = _ref.containerElement,
    rest = objectWithoutProperties(_ref, [
      'className',
      'link',
      'onClick',
      'status',
      'children',
      'containerElement',
    ])

  var props = _extends({}, rest, {
    className: classnames(
      'ln-c-status-card',
      className,
      ((_classnames = {
        'ln-c-status-card--link': link || onClick,
      }),
      (_classnames['ln-c-status-card--' + colours[status]] = colours[status]),
      _classnames),
    ),
    onClick: onClick,
  })

  var body = React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'ln-c-status-card__content' },
      children,
    ),
    (link || onClick) &&
      React.createElement(
        'div',
        { className: 'ln-c-status-card__chevron' },
        React.createElement(ArrowRight$1, null),
      ),
  )

  return React.isValidElement(containerElement)
    ? React.cloneElement(containerElement, props, body)
    : React.createElement(onClick ? 'button' : containerElement, props, body)
}

StatusCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  children: PropTypes.node.isRequired,
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

StatusCard.defaultProps = {
  className: undefined,
  link: false,
  onClick: undefined,
  status: undefined,
  containerElement: 'div',
}

var TableCaption = function TableCaption(_ref) {
  var children = _ref.children,
    className = _ref.className,
    visuallyHidden = _ref.visuallyHidden,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'visuallyHidden',
    ])
  return React.createElement(
    'caption',
    _extends({}, rest, {
      className: classnames(
        'ln-c-table__caption',
        className,
        visuallyHidden && 'ln-u-visually-hidden',
      ),
    }),
    children,
  )
}

TableCaption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  visuallyHidden: PropTypes.bool,
}

TableCaption.defaultProps = {
  className: undefined,
  visuallyHidden: false,
}

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
    sortLabel = _ref.sortLabel,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'sortLabel', 'className'])
  return React.createElement(
    'thead',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-table__header'),
      'aria-label': sortLabel ? 'Sort by' : undefined,
    }),
    children,
  )
}

TableHeader.propTypes = {
  children: PropTypes.node,
  sortLabel: PropTypes.bool,
  className: PropTypes.string,
}

TableHeader.defaultProps = {
  children: undefined,
  sortLabel: false,
  className: undefined,
}

var TableHeaderRow = function TableHeaderRow(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'tr',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-c-table__row',
        'ln-c-table__header-row',
      ),
    }),
    children,
  )
}

TableHeaderRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

TableHeaderRow.defaultProps = {
  children: undefined,
  className: undefined,
}

var TableHeaderCell = function TableHeaderCell(_ref) {
  var _classnames

  var children = _ref.children,
    className = _ref.className,
    align = _ref.align,
    onSort = _ref.onSort,
    sortDirection = _ref.sortDirection,
    rest = objectWithoutProperties(_ref, [
      'children',
      'className',
      'align',
      'onSort',
      'sortDirection',
    ])
  return React.createElement(
    'th',
    _extends({}, rest, {
      className: classnames(
        'ln-c-table__header-cell',
        className,
        ((_classnames = {
          'ln-c-table__header-cell--sortable': !!onSort,
        }),
        (_classnames['ln-c-table__header-cell--text-align-' + align] = align),
        _classnames),
      ),
    }),
    onSort
      ? React.createElement(
          'button',
          {
            className: classnames('ln-c-table__sort-button', {
              'is-active': !!sortDirection,
              'is-ascending': sortDirection === 'ascending',
            }),
            onClick: function onClick() {
              return onSort(sortDirection === 'ascending')
            },
          },
          React.createElement(
            'span',
            { className: 'ln-c-table__sort-text', 'aria-label': 'Sort by' },
            children,
          ),
        )
      : children,
  )
}

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  onSort: PropTypes.func,
  sortDirection: PropTypes.oneOf(['ascending', 'descending']),
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

TableHeaderCell.defaultProps = {
  children: undefined,
  onSort: undefined,
  sortDirection: undefined,
  className: undefined,
  align: undefined,
}

var TableBody = function TableBody(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'tbody',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-table__body'),
    }),
    children,
  )
}

TableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
}

TableBody.defaultProps = {
  children: undefined,
  className: undefined,
}

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
    className = _ref.className,
    rest = objectWithoutProperties(_ref, ['children', 'className'])
  return React.createElement(
    'tr',
    _extends({}, rest, {
      className: classnames(className, 'ln-c-table__row'),
    }),
    children,
  )
}

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

TableRow.defaultProps = {
  children: undefined,
  className: undefined,
}

var TableCell = function TableCell(_ref) {
  var _classnames

  var children = _ref.children,
    label = _ref.label,
    className = _ref.className,
    align = _ref.align,
    rest = objectWithoutProperties(_ref, [
      'children',
      'label',
      'className',
      'align',
    ])
  return React.createElement(
    'td',
    _extends({}, rest, {
      className: classnames(
        className,
        'ln-c-table__cell',
        ((_classnames = {}),
        (_classnames['ln-c-table__cell--text-align-' + align] = align),
        _classnames),
      ),
      'data-label': label,
    }),
    children,
  )
}

TableCell.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right', 'center']),
}

TableCell.defaultProps = {
  children: undefined,
  label: undefined,
  className: undefined,
  align: undefined,
}

var DEFAULT_CELL_DATA_PROPERTY = 'value'

var buildAccessor = function buildAccessor(accessor) {
  if (typeof accessor === 'function') {
    return accessor
  }

  if (typeof accessor === 'string') {
    return function(row) {
      var _ref

      return (
        (_ref = {}), (_ref[DEFAULT_CELL_DATA_PROPERTY] = row[accessor]), _ref
      )
    }
  }

  return function(row) {
    return row
  }
}

var buildAccessors = function buildAccessors(columns) {
  return columns.reduce(function(acc, curr) {
    acc[curr.name] = buildAccessor(curr.accessor)
    return acc
  }, {})
}

var buildColClassName = function buildColClassName(columns) {
  return columns.reduce(function(classNames, column) {
    var _babelHelpers$extends

    return _extends(
      {},
      classNames,
      ((_babelHelpers$extends = {}),
      (_babelHelpers$extends[column.name] =
        _typeof(column.className) === 'object'
          ? column.className
          : { th: column.className, td: column.className }),
      _babelHelpers$extends),
    )
  }, {})
}

var Table = function Table(_ref2) {
  var _classnames

  var columns = _ref2.columns,
    data = _ref2.data,
    className = _ref2.className,
    responsive = _ref2.responsive,
    labels = _ref2.labels,
    sortable = _ref2.sortable,
    sortData = _ref2.sortData,
    sorted = _ref2.sorted,
    caption = _ref2.caption,
    visuallyHiddenCaption = _ref2.visuallyHiddenCaption,
    fixed = _ref2.fixed,
    rest = objectWithoutProperties(_ref2, [
      'columns',
      'data',
      'className',
      'responsive',
      'labels',
      'sortable',
      'sortData',
      'sorted',
      'caption',
      'visuallyHiddenCaption',
      'fixed',
    ])

  var accessors = buildAccessors(columns)
  var colClassNames = buildColClassName(columns)
  var isSortable =
    sortable ||
    columns.filter(function(c) {
      return c.sortable
    }).length > 0

  return React.createElement(
    'div',
    _extends({}, filterProps(rest, ['setSorted']), {
      className: 'ln-c-table-container',
    }),
    React.createElement(
      'table',
      {
        className: classnames(
          className,
          'ln-c-table',
          ((_classnames = {}),
          (_classnames['ln-c-table--responsive@' + responsive] =
            typeof responsive === 'string'),
          (_classnames['ln-c-table--responsive@md'] =
            typeof responsive !== 'string' && responsive),
          (_classnames['ln-c-table--no-labels'] = !labels),
          (_classnames['ln-c-table--sorted'] = isSortable),
          (_classnames['ln-c-table--fixed'] = fixed),
          _classnames),
        ),
      },
      caption &&
        React.createElement(
          TableCaption,
          { visuallyHidden: visuallyHiddenCaption },
          caption,
        ),
      React.createElement(
        TableHeader,
        { sortLabel: responsive && isSortable },
        React.createElement(
          TableHeaderRow,
          null,
          columns.map(function(column) {
            var sortDirection = void 0
            if (sorted.column === column.name) {
              sortDirection = sorted.ascending ? 'ascending' : 'descending'
            }

            return React.createElement(
              TableHeaderCell,
              {
                key: column.name,
                sortDirection: sortDirection,
                onSort:
                  column.sortable || (column.sortable === undefined && sortable)
                    ? function(ascendingActive) {
                        return sortData({
                          column: column.name,
                          accessor: accessors[column.name],
                          ascending: !ascendingActive,
                          sortValue: column.sort || DEFAULT_CELL_DATA_PROPERTY,
                        })
                      }
                    : undefined,
                align: column.align,
                className: colClassNames[column.name].th,
              },
              column.renderHead === undefined ? column.name : column.renderHead,
            )
          }),
        ),
      ),
      React.createElement(
        TableBody,
        null,
        data.map(function(row) {
          return React.createElement(
            TableRow,
            { key: JSON.stringify(row) },
            columns.map(function(column) {
              var cellData = accessors[column.name](row)

              return React.createElement(
                TableCell,
                {
                  key: column.name,
                  align: column.align,
                  className: colClassNames[column.name].td,
                  label:
                    responsive && labels && !column.hideLabel
                      ? column.name
                      : undefined,
                },
                column.render
                  ? column.render(cellData)
                  : cellData[DEFAULT_CELL_DATA_PROPERTY],
              )
            }),
          )
        }),
      ),
    ),
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      renderHead: PropTypes.node,
      accessor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      sort: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      sortable: PropTypes.bool,
      render: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  labels: PropTypes.bool,
  sortable: PropTypes.bool,
  sortData: PropTypes.func,
  sorted: PropTypes.shape({
    column: PropTypes.string,
    property: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    ascending: PropTypes.bool,
  }),
  caption: PropTypes.node,
  visuallyHiddenCaption: PropTypes.bool,
  fixed: PropTypes.bool,
}

Table.defaultProps = {
  className: undefined,
  responsive: false,
  labels: true,
  sortable: false,
  sortData: undefined,
  sorted: {},
  caption: undefined,
  visuallyHiddenCaption: false,
  fixed: false,
}

var sortData = function sortData(_ref) {
  var setSorted = _ref.setSorted
  return function(sortOptions) {
    return setSorted(sortOptions)
  }
}

var sortAlphabetically = function sortAlphabetically(
  accessor,
  sortValue,
  ascending,
) {
  return function(a, b) {
    var valueA = accessor(a)[sortValue]
    var valueB = accessor(b)[sortValue]

    if (valueA < valueB) {
      return ascending ? -1 : 1
    }
    if (valueA > valueB) {
      return ascending ? 1 : -1
    }
    return 0
  }
}

var sort = function sort(_ref2) {
  var data = _ref2.data,
    sorted = _ref2.sorted

  if (Object.keys(sorted).length > 0) {
    var sortFunction =
      typeof sorted.sortValue === 'function'
        ? sorted.sortValue(sorted.accessor, sorted.ascending)
        : sortAlphabetically(
            sorted.accessor,
            sorted.sortValue,
            sorted.ascending,
          )

    return {
      data: data.sort(sortFunction),
    }
  }
  return {}
}

var TableWrapper = compose(
  setDisplayName('Table'),
  withState('sorted', 'setSorted', {}),
  withHandlers({
    sortData: sortData,
  }),
  withProps(sort),
)(Table)

var ArrowLeft = function ArrowLeft(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '10',
        height: '18',
        viewBox: '0 0 10 18',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M2.414 9l7.293-7.293A1 1 0 0 0 8.293.293l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 1 0 1.414-1.414L2.414 9z',
    }),
  )
}

var ArrowLeft$1 = iconHandler(ArrowLeft)

var hasInnerRef = function hasInnerRef(element) {
  return (
    isValidElement(element) &&
    !!element.type.propTypes &&
    !!element.type.propTypes.innerRef
  )
}

var TabLink = function TabLink(_ref) {
  var _babelHelpers$extends

  var active = _ref.active,
    children = _ref.children,
    className = _ref.className,
    containerElement = _ref.containerElement,
    onClick = _ref.onClick,
    setRef = _ref.setRef,
    onFocus = _ref.onFocus,
    rest = objectWithoutProperties(_ref, [
      'active',
      'children',
      'className',
      'containerElement',
      'onClick',
      'setRef',
      'onFocus',
    ])

  var props = _extends(
    {},
    rest,
    ((_babelHelpers$extends = {
      className: classnames('ln-c-tabs__link', className, {
        'is-active': active,
      }),
      role: 'tab',
      'aria-selected': active,
      onClick: onClick,
    }),
    (_babelHelpers$extends[
      hasInnerRef(containerElement) ? 'innerRef' : 'ref'
    ] = setRef
      ? function(tabLink) {
          setRef(tabLink)
        }
      : undefined),
    (_babelHelpers$extends.onFocus = onFocus),
    _babelHelpers$extends),
  )

  return React.isValidElement(containerElement)
    ? React.cloneElement(containerElement, props, children)
    : React.createElement(containerElement, props, children)
}

TabLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerElement: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  setRef: PropTypes.func,
  onFocus: PropTypes.func,
}

TabLink.defaultProps = {
  active: false,
  className: undefined,
  containerElement: 'button',
  onClick: undefined,
  setRef: undefined,
  onFocus: undefined,
}

var TabList = function TabList(_ref) {
  var className = _ref.className,
    children = _ref.children,
    fill = _ref.fill,
    deep = _ref.deep,
    showPrevArrow = _ref.showPrevArrow,
    showNextArrow = _ref.showNextArrow,
    animateDistance = _ref.animateDistance,
    setTabRef = _ref.setTabRef,
    onArrowClick = _ref.onArrowClick,
    onTabLinkFocus = _ref.onTabLinkFocus,
    rest = objectWithoutProperties(_ref, [
      'className',
      'children',
      'fill',
      'deep',
      'showPrevArrow',
      'showNextArrow',
      'animateDistance',
      'setTabRef',
      'onArrowClick',
      'onTabLinkFocus',
    ])

  var isResponsive = !fill && React.Children.count(children) > 1 && onArrowClick
  var transform =
    isResponsive && animateDistance
      ? 'translateX(' + animateDistance + '%)'
      : undefined

  return React.createElement(
    'nav',
    _extends({}, filterProps(rest, ['visibleTabs']), {
      className: classnames('ln-c-tabs', className, {
        'ln-c-tabs--fill': fill,
        'ln-c-tabs--deep': deep,
        'has-prev-arrow': showPrevArrow,
        'has-next-arrow': showNextArrow,
      }),
    }),
    React.createElement(
      'div',
      { className: 'ln-c-tabs__list-wrap' },
      React.createElement(
        'div',
        {
          className: 'ln-c-tabs__list',
          role: 'tablist',
          style: { transform: transform },
        },
        isResponsive
          ? React.Children.map(children, function(child, index) {
              /* eslint-disable react/prop-types */
              var props = {
                key: index,
              }

              if (child.type === TabLink) {
                props.onFocus = onTabLinkFocus
                props.setRef = setTabRef
              }

              return React.cloneElement(child, props)
              /* eslint-enable react/prop-types */
            })
          : children,
      ),
      isResponsive && [
        React.createElement(
          'button',
          {
            key: 'arrowPrev',
            className:
              'ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-prev',
            tabIndex: '-1',
            onClick: function onClick() {
              return onArrowClick(false)
            },
          },
          React.createElement(ArrowLeft$1, null),
        ),
        React.createElement(
          'button',
          {
            key: 'arrowNext',
            className:
              'ln-c-tabs__link ln-c-tabs__link--arrow ln-c-tabs__link--arrow-next',
            tabIndex: '-1',
            onClick: function onClick() {
              return onArrowClick(true)
            },
          },
          React.createElement(ArrowRight$1, null),
        ),
      ],
    ),
  )
}

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fill: PropTypes.bool,
  deep: PropTypes.bool,
  showPrevArrow: PropTypes.bool,
  showNextArrow: PropTypes.bool,
  animateDistance: PropTypes.number,
  setTabRef: PropTypes.func,
  onArrowClick: PropTypes.func,
  onTabLinkFocus: PropTypes.func,
}

TabList.defaultProps = {
  className: undefined,
  fill: false,
  deep: false,
  showPrevArrow: false,
  showNextArrow: false,
  animateDistance: 0,
  setTabRef: undefined,
  onArrowClick: undefined,
  onTabLinkFocus: undefined,
}

var getAnimateDistance = function getAnimateDistance(
  selectedPageIndex,
  remainingTabs,
  tabsPerPage,
) {
  if (selectedPageIndex === undefined) {
    return 0
  }

  var animateDistance = selectedPageIndex * -100

  if (remainingTabs < 0) {
    animateDistance += remainingTabs * -1 * (100 / tabsPerPage)
  }

  return animateDistance
}

var getElementDimensions = function getElementDimensions(element) {
  if (!element.getBoundingClientRect) {
    return {}
  }

  return element.getBoundingClientRect()
}

var findActiveTabLinkIndex = function findActiveTabLinkIndex(children) {
  var index = void 0
  children.forEach(function(tab, tabIndex) {
    if (tab.props && tab.props.active) {
      index = tabIndex
    }
  })

  return index
}

var ARROW_WIDTH = 50

var Tabs = (function(_Component) {
  inherits(Tabs, _Component)

  function Tabs(props) {
    classCallCheck(this, Tabs)

    var _this = possibleConstructorReturn(this, _Component.call(this, props))

    _this.state = {
      animateDistance: 0,
    }
    _this.tabs = []
    _this.dimensions = {}

    _this.onArrowClick = _this.onArrowClick.bind(_this)
    _this.onResize = _this.onResize.bind(_this)
    _this.onTabLinkFocus = _this.onTabLinkFocus.bind(_this)
    _this.handleResize = _this.handleResize.bind(_this)
    _this.isResponsiveEnabled = _this.isResponsiveEnabled.bind(_this)
    _this.setSelectedTab = _this.setSelectedTab.bind(_this)
    _this.setTabRef = _this.setTabRef.bind(_this)
    _this.setDimensions = _this.setDimensions.bind(_this)
    return _this
  }

  Tabs.prototype.componentDidMount = function componentDidMount() {
    if (this.isResponsiveEnabled()) {
      this.handleResize()
      window.addEventListener('resize', this.onResize)
    }
  }

  Tabs.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this.resizeTimer)
    window.removeEventListener('resize', this.onResize)
  }

  Tabs.prototype.onArrowClick = function onArrowClick(next) {
    var modifier = next ? 1 : -1
    this.setSelectedTab(this.state.selectedIndex + modifier)
  }

  Tabs.prototype.onResize = function onResize() {
    window.clearTimeout(this.resizeTimer)
    this.resizeTimer = window.setTimeout(this.handleResize, 250)
  }

  Tabs.prototype.onTabLinkFocus = function onTabLinkFocus(e) {
    if (this.state.selectedIndex !== undefined) {
      var _getElementDimensions = getElementDimensions(e.target),
        x = _getElementDimensions.x,
        width = _getElementDimensions.width

      if (x + width >= this.dimensions.wrapper.width) {
        this.setSelectedTab(this.state.selectedIndex + 1)
      } else if (x + width <= this.dimensions.wrapper.x + ARROW_WIDTH) {
        this.setSelectedTab(this.state.selectedIndex - 1)
      }
    }
  }

  Tabs.prototype.setTabRef = function setTabRef(tab) {
    if (tab && !this.tabs.includes(tab)) {
      this.tabs.push(tab)
    }
  }

  Tabs.prototype.setDimensions = function setDimensions() {
    this.dimensions.wrapper = getElementDimensions(this.wrapper)

    if (this.state.selectedIndex === undefined) {
      this.dimensions.lastTab = getElementDimensions(
        this.tabs[this.tabs.length - 1],
      )
    }
  }

  Tabs.prototype.setSelectedTab = function setSelectedTab(selectedIndex) {
    var _this2 = this

    var visibleTabs = this.props.visibleTabs

    var remainingTabs =
      selectedIndex !== undefined
        ? this.tabs.length - (selectedIndex + 1) * visibleTabs
        : undefined

    this.setState(
      { selectedIndex: selectedIndex, remainingTabs: remainingTabs },
      function() {
        _this2.setState({
          animateDistance: getAnimateDistance(
            selectedIndex,
            remainingTabs,
            visibleTabs,
          ),
        })
      },
    )
  }

  Tabs.prototype.isResponsiveEnabled = function isResponsiveEnabled() {
    return !this.props.fill && this.tabs.length > this.props.visibleTabs
  }

  Tabs.prototype.handleResize = function handleResize() {
    this.setDimensions()

    if (this.dimensions.wrapper.right < this.dimensions.lastTab.right) {
      var activeIndex = findActiveTabLinkIndex(this.props.children) || 0
      if (activeIndex > 0)
        activeIndex = Math.floor(activeIndex / this.props.visibleTabs)
      this.setSelectedTab(activeIndex)
    } else {
      this.setSelectedTab(undefined)
    }
  }

  Tabs.prototype.render = function render() {
    var _this3 = this

    var _state = this.state,
      selectedIndex = _state.selectedIndex,
      remainingTabs = _state.remainingTabs,
      animateDistance = _state.animateDistance

    var responsiveProps = {}

    if (this.isResponsiveEnabled()) {
      responsiveProps = {
        showNextArrow: selectedIndex !== undefined && remainingTabs > 0,
        showPrevArrow: selectedIndex !== undefined && selectedIndex > 0,
        animateDistance: animateDistance,
      }
    }

    return React.createElement(
      'div',
      {
        ref: function ref(wrapper) {
          _this3.wrapper = wrapper
        },
      },
      React.createElement(
        TabList,
        _extends(
          {
            setTabRef: this.setTabRef,
            onArrowClick: this.onArrowClick,
            onTabLinkFocus: this.onTabLinkFocus,
          },
          responsiveProps,
          this.props,
        ),
      ),
    )
  }

  return Tabs
})(Component)

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  fill: PropTypes.bool,
  visibleTabs: PropTypes.number,
}

Tabs.defaultProps = {
  fill: false,
  visibleTabs: 2,
}

var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
    className = _ref.className,
    active = _ref.active,
    rest = objectWithoutProperties(_ref, ['children', 'className', 'active'])
  return React.createElement(
    'div',
    _extends({}, rest, {
      role: 'tabpanel',
      'aria-hidden': !active,
      className: classnames(className, !active && 'ln-u-hidden'),
    }),
    children,
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
}

TabPanel.defaultProps = {
  children: undefined,
  className: undefined,
  active: true,
}

export {
  AccordionWrapper as Accordion,
  Breadcrumbs,
  Button,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  CloseButton,
  SearchButton,
  ButtonGroup,
  Card,
  ColleagueLayout,
  MainSection,
  Form,
  FormGroup,
  TextInputField,
  PasswordField,
  SelectField,
  CheckboxField,
  RadioButtonField,
  TextAreaField,
  SearchField,
  Fieldset,
  Legend,
  Flag,
  Grid,
  Header,
  InputAction,
  InputControl,
  InputGroup,
  InputIcon,
  Checkbox,
  Password,
  RadioButton,
  Select,
  TextArea,
  TextInput,
  SearchInput,
  List,
  ListItem,
  LoadingIndicator,
  LoadingIcon,
  Modal,
  Navigation,
  MenuButton,
  Notification,
  Search$2 as Search,
  Section,
  SiteWrap,
  StatusCard,
  TableWrapper as Table,
  Tabs,
  TabList,
  TabLink,
  TabPanel,
}
