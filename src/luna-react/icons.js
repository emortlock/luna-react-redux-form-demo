import React from 'react'
import { compose, mapProps, setDisplayName } from 'recompose'
import classnames from 'classnames'

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

var addLunaClass = function addLunaClass(props) {
  return _extends({}, props, {
    className: classnames(props.className, 'ln-c-icon'),
  })
}

var iconHandler = /* istanbul ignore next */ function(Component) {
  return /* istanbul ignore next */ compose(
    setDisplayName(Component.displayName || Component.name || 'Icon'),
    mapProps(addLunaClass),
  )(Component)
}

var Accessibility = function Accessibility(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '17',
        height: '25',
        viewBox: '0 0 17 25',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1)',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M11.586 17l2.207 2.207a1 1 0 0 0 1.414-1.414l-2.5-2.5A1 1 0 0 0 12 15H7.847l-1.36-8.164a1 1 0 1 0-1.973.328l1.5 9A1 1 0 0 0 7 17h4.586z',
      }),
      React.createElement('circle', {
        cx: '6',
        cy: '2',
        r: '2',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M6.5 12H10a1 1 0 0 0 0-2H6.5a1 1 0 0 0 0 2zm-3.61.076C.555 13.042-1 15.29-1 17.826c0 3.45 2.851 6.239 6.357 6.239 2.685 0 5.056-1.649 5.969-4.086a1 1 0 1 0-1.873-.702c-.621 1.658-2.247 2.788-4.096 2.788C2.946 22.065 1 20.162 1 17.827c0-1.714 1.056-3.242 2.654-3.903a1 1 0 0 0-.764-1.848z',
      }),
    ),
  )
}

var Accessibility$1 = iconHandler(Accessibility)

var Account = function Account(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M11 8c1.658 0 3-1.342 3-3s-1.342-3-3-3-3 1.342-3 3 1.342 3 3 3zm0 2c-2.762 0-5-2.237-5-5s2.238-5 5-5 5 2.237 5 5-2.238 5-5 5zm0 4c-4.652 0-9 2.5-9 5.5a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5c0-3-4.348-5.5-9-5.5zm0-2c4.59 0 11 2.512 11 7.5a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 0 19.5C0 14.512 6.41 12 11 12z',
    }),
  )
}

var Account$1 = iconHandler(Account)

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

var ArrowUp = function ArrowUp(props) {
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
        'M9 2.414L1.707 9.707A1 1 0 0 1 .293 8.293l8-8a1 1 0 0 1 1.414 0l8 8a1 1 0 1 1-1.414 1.414L9 2.414z',
    }),
  )
}

var ArrowUp$1 = iconHandler(ArrowUp)

var AwardWinning = function AwardWinning(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '21',
        viewBox: '0 0 22 21',
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
          'M16 8V2.019c0-.007-.417-.013-1.25-.018H6.02C6.011 2 6.005 3.906 6 7.717 5.95 11.192 8.12 14 10.777 14 13.31 14 16 10.241 16 8zm-5.21 8c-3.924 0-6.856-3.827-6.789-8.284v-5.35A2.358 2.358 0 0 1 6.351 0h9.299C16.948 0 18 1.06 18 2.366V8c.001 3.271-3.355 8-7.21 8z',
      }),
      React.createElement('path', {
        d:
          'M3.843 2C1.708 2 0 3.803 0 6s1.708 4 3.843 4a3.71 3.71 0 0 0 1.583-.354 1 1 0 1 0-.852-1.81A1.707 1.707 0 0 1 3.843 8C2.837 8 2 7.116 2 6s.837-2 1.843-2a1 1 0 1 0 0-2zM16.56 9.623a3.668 3.668 0 0 0 1.62.377C20.304 10 22 8.196 22 6c0-2.196-1.696-4-3.82-4a1 1 0 1 0 0 2c.99 0 1.82.882 1.82 2 0 1.118-.83 2-1.82 2-.259 0-.509-.059-.74-.172a1 1 0 0 0-.88 1.795zM12 20v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z',
      }),
      React.createElement('path', {
        d: 'M8 21h6a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z',
      }),
    ),
  )
}

var AwardWinning$1 = iconHandler(AwardWinning)

var Bag = function Bag(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '20',
        height: '22',
        viewBox: '0 0 20 22',
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
          'M3.632 7C2.73 7 2 7.73 2 8.632v9.736C2 19.27 2.73 20 3.632 20h12.736C17.27 20 18 19.27 18 18.368V8.632C18 7.73 17.27 7 16.368 7H3.632zm0-2h12.736A3.632 3.632 0 0 1 20 8.632v9.736A3.632 3.632 0 0 1 16.368 22H3.632A3.632 3.632 0 0 1 0 18.368V8.632A3.632 3.632 0 0 1 3.632 5z',
      }),
      React.createElement('path', {
        d: 'M15 5A5 5 0 0 0 5 5a1 1 0 1 0 2 0 3 3 0 1 1 6 0 1 1 0 0 0 2 0z',
      }),
    ),
  )
}

var Bag$1 = iconHandler(Bag)

var Basket = function Basket(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '23',
        viewBox: '0 0 22 23',
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
          'M3.505 9a1.444 1.444 0 0 0-1.425 1.68l1.5 9.11c.115.698.718 1.21 1.425 1.21h11.99c.707 0 1.31-.512 1.425-1.21l1.5-9.11A1.444 1.444 0 0 0 18.496 9H3.505zm0-2h14.99a3.444 3.444 0 0 1 3.399 4.004l-1.5 9.111a3.444 3.444 0 0 1-3.4 2.885H5.006a3.444 3.444 0 0 1-3.398-2.885l-1.5-9.11A3.444 3.444 0 0 1 3.504 7z',
      }),
      React.createElement('path', {
        d:
          'M16.831 6.915L14.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 0 0-1.884-.67L5.169 6.915a1 1 0 0 0 1.884.67z',
      }),
    ),
  )
}

var Basket$1 = iconHandler(Basket)

var Calendar = function Calendar(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '23',
        viewBox: '0 0 22 23',
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
          'M3 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3zm0-2h16a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z',
      }),
      React.createElement('path', {
        d:
          'M6 1v5a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0zm8 0v5a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0zM9.134 16.5a1 1 0 0 0 1.732 1l4.046-7a1 1 0 0 0-.866-1.5H8a1 1 0 1 0 0 2h4.313l-3.179 5.5z',
      }),
    ),
  )
}

var Calendar$1 = iconHandler(Calendar)

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

var Cancel$1 = iconHandler(Cancel)

var ClickAndColleck = function ClickAndColleck(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '23',
        viewBox: '0 0 22 23',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M12.152 21h-6.91c-.769 0-1.587-.751-1.737-1.665L2.024 10.34C1.892 9.541 2.3 9 2.924 9h16.15c.628 0 1.034.536.902 1.339l-.6 2.545a1 1 0 1 0 1.947.457l.613-2.611C22.274 8.693 20.993 7 19.075 7H2.925C1.008 7-.273 8.7.05 10.665l1.482 8.995C1.836 21.508 3.459 23 5.242 23h6.91a1 1 0 0 0 0-2z',
      }),
      React.createElement('path', {
        d:
          'M15.563 14.997l3.48 1.042a1.222 1.222 0 0 1 .257 2.231l-.173.099-1.682 1.748-.113.213a1.222 1.222 0 0 1-2.253-.234l-1.04-3.588a1.222 1.222 0 0 1 1.524-1.511z',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M16.4 18.762l3.667 3.706a1 1 0 1 0 1.422-1.407l-3.667-3.706a1 1 0 1 0-1.422 1.407zm.431-11.847L14.82 1.262a1 1 0 1 0-1.884.67l2.01 5.653a1 1 0 1 0 1.885-.67zm-9.778.67l2.011-5.653a1 1 0 0 0-1.884-.67L5.169 6.915a1 1 0 0 0 1.884.67z',
      }),
    ),
  )
}

var ClickAndCollect = iconHandler(ClickAndColleck)

var Comment = function Comment(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M11.071 16H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.061l1.98 2.67 2.03-2.67zM4 0h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-5.937l-3.042 4-2.967-4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
      }),
      React.createElement('circle', {
        cx: '7',
        cy: '9',
        r: '1',
      }),
      React.createElement('circle', {
        cx: '11',
        cy: '9',
        r: '1',
      }),
      React.createElement('circle', {
        cx: '15',
        cy: '9',
        r: '1',
      }),
    ),
  )
}

var Comment$1 = iconHandler(Comment)

var Delete = function Delete(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
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
          'M7 10v7a1 1 0 0 0 2 0v-7a1 1 0 1 0-2 0zm6 0v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-2 0z',
      }),
      React.createElement('path', {
        d:
          'M2.062 9.992l-.06 7.498A4.474 4.474 0 0 0 6.439 22h9.086A4.474 4.474 0 0 0 20 17.526l-.035-7.53a1 1 0 0 0-2 .009l.035 7.51A2.476 2.476 0 0 1 15.525 20h-9.05a2.478 2.478 0 0 1-2.474-2.494l.06-7.498a1 1 0 1 0-2-.016zM1 7h20a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2z',
      }),
      React.createElement('path', {
        d:
          'M7 5V4h1v1H7zm0 1a1 1 0 0 1-1-1l.002-2h.128A4.001 4.001 0 0 1 10.002.001L12.017 0a4 4 0 0 1 4 4v.075l-.018.944a1 1 0 1 1-2-.038l.018-.944V4a2 2 0 0 0-1.998-2l-2.016.002a2 2 0 0 0-2 1.999v1A1.005 1.005 0 0 1 6.998 6z',
      }),
    ),
  )
}

var Delete$1 = iconHandler(Delete)

var Delivery = function Delivery(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '21',
        viewBox: '0 0 22 21',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 1)',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M19 9.733l-4.169-4.377a1 1 0 0 1 1.449-1.379L21 8.933v2.845A3.222 3.222 0 0 1 17.778 15H2.222A3.222 3.222 0 0 1-1 11.778V2.222A3.222 3.222 0 0 1 2.222-1H10a3.222 3.222 0 0 1 3.222 3.222v7.111a1 1 0 0 1-2 0v-7.11C11.222 1.546 10.675 1 10 1H2.222C1.547 1 1 1.547 1 2.222v9.556C1 12.453 1.547 13 2.222 13h15.556c.675 0 1.222-.547 1.222-1.222V9.733z',
      }),
      React.createElement('circle', {
        cx: '16',
        cy: '18',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '4',
        cy: '18',
        r: '2',
      }),
    ),
  )
}

var Delivery$1 = iconHandler(Delivery)

var Dislike = function Dislike(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '24',
        viewBox: '0 0 22 24',
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
          'M5 14H2.294A.294.294 0 0 1 2 13.706V4.294C2 4.132 2.132 4 2.294 4H5v10zm-2.706 2H7V2H2.294A2.294 2.294 0 0 0 0 4.294v9.412A2.294 2.294 0 0 0 2.294 16z',
      }),
      React.createElement('path', {
        d:
          'M7 3.778c3.83-.934 7.084-1.12 9.756-.571 1.792.367 2.68 1.059 3.038 2.01.184.489.223.949.199 1.746-.007.238-.009.28-.009.377V13c0 .738-1.043 2-1.684 2H13a1 1 0 0 0-1 1v4.447a.294.294 0 0 1-.207.28l-1.14.356a1.277 1.277 0 0 1-1.574-.767L7 14.817V3.777zM18.3 17c1.838 0 3.684-2.233 3.684-4V7.34c0-.068.001-.106.008-.317.031-1.041-.025-1.712-.327-2.511-.613-1.628-2.073-2.765-4.507-3.264-3.179-.652-6.982-.384-11.413.785A1 1 0 0 0 5 3v12a1 1 0 0 0 .065.354l2.143 5.669a3.277 3.277 0 0 0 4.041 1.97l1.14-.356A2.294 2.294 0 0 0 14 20.447V17h4.3z',
      }),
    ),
  )
}

var Dislike$1 = iconHandler(Dislike)

var Download = function Download(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '20',
        height: '21',
        viewBox: '0 0 20 21',
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
        d: 'M9 1v14a1 1 0 0 0 2 0V1a1 1 0 1 0-2 0z',
      }),
      React.createElement('path', {
        d:
          'M4.707 9.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414L10 14.586 4.707 9.293zM1 21h18a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z',
      }),
    ),
  )
}

var Download$1 = iconHandler(Download)

var Edit = function Edit(props) {
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
        fill: 'none',
        fillRule: 'evenodd',
        strokeWidth: '2',
      },
      React.createElement('path', {
        d:
          'M1.518 18.24l.03 4.28 4.206-.032L22.192 6.05a1 1 0 0 0 0-1.414l-2.828-2.828a1 1 0 0 0-1.414 0L1.518 18.24z',
      }),
      React.createElement('path', {
        strokeLinecap: 'square',
        d: 'M16 4l3.536 3.536',
      }),
    ),
  )
}

var Edit$1 = iconHandler(Edit)

var Favourites = function Favourites(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '24',
        height: '20',
        viewBox: '0 0 24 20',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M12 5.402L9.906 3.34c-1.81-1.785-4.756-1.787-6.565-.004a4.472 4.472 0 0 0 .003 6.392l8.21 8.094a.642.642 0 0 0 .888 0l8.21-8.094a4.47 4.47 0 0 0 .003-6.392c-1.806-1.78-4.756-1.78-6.565.004L12 5.402zm.687-3.487c2.588-2.55 6.789-2.551 9.374-.003a6.47 6.47 0 0 1-.004 9.24l-8.21 8.094a2.642 2.642 0 0 1-3.696 0l-8.21-8.094a6.472 6.472 0 0 1-.003-9.24c2.588-2.55 6.785-2.549 9.373.003l.688.678.688-.678z',
    }),
  )
}

var Favourites$1 = iconHandler(Favourites)

var Freshness = function Freshness(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '21',
        viewBox: '0 0 22 21',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
        strokeLinecap: 'round',
        strokeWidth: '2',
      },
      React.createElement('path', {
        strokeLinejoin: 'round',
        d:
          'M1.062 1.268S2.468 12.53 4.907 15.786c2.438 3.257 6.957 4.566 10.2 2.107 3.24-2.458 4.982-7.585 2.249-10.775-1.668-1.945-4.89-2.23-9.114-3.31-4.224-1.082-7.18-2.54-7.18-2.54z',
      }),
      React.createElement('path', {
        d: 'M10.09 10.99c.78 1.833 3.127 4.823 10.178 5.464',
      }),
    ),
  )
}

var Freshness$1 = iconHandler(Freshness)

var Geolocation = function Geolocation(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 1)',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z',
      }),
      React.createElement('circle', {
        cx: '10',
        cy: '10',
        r: '2',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M9 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM9 0v2a1 1 0 1 0 2 0V0a1 1 0 0 0-2 0zM2 9H0a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2zm18 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z',
      }),
    ),
  )
}

var Geolocation$1 = iconHandler(Geolocation)

var GridView = function GridView(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('rect', {
        width: '4',
        height: '4',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '6',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '12',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        y: '6',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '6',
        y: '6',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '12',
        y: '6',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        y: '12',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '6',
        y: '12',
        rx: '1',
      }),
      React.createElement('rect', {
        width: '4',
        height: '4',
        x: '12',
        y: '12',
        rx: '1',
      }),
    ),
  )
}

var GridView$1 = iconHandler(GridView)

var Home = function Home(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '20',
        height: '22',
        viewBox: '0 0 20 22',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M6 15.944C6 13.887 7.377 12 10 12c2.624 0 4 1.883 4 3.944V20h2.244C17.23 20 18 19.256 18 18.368V9.887c0-.436-.311-1.161-.645-1.484l-6.092-5.901a1.84 1.84 0 0 0-2.526 0l-6.092 5.9C2.308 8.73 2 9.447 2 9.888v8.481C2 19.26 2.767 20 3.756 20H6v-4.056zM3.756 22C1.68 22 0 20.382 0 18.368V9.887c0-.987.53-2.22 1.253-2.92l6.092-5.902c1.467-1.42 3.843-1.42 5.31 0l6.092 5.901C19.468 7.665 20 8.908 20 9.886v8.482C20 20.376 18.321 22 16.244 22H12v-6.056c0-.671-.351-1.944-2-1.944s-2 1.28-2 1.944V22H3.756z',
    }),
  )
}

var Home$1 = iconHandler(Home)

var Info = function Info(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '11',
        height: '21',
        viewBox: '0 0 11 21',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1)',
      },
      React.createElement('circle', {
        cx: '4',
        cy: '2',
        r: '2',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M0 19a1 1 0 0 0 0 2h9c1.333 0 1.333-2 0-2H4.5l1 1V8a1 1 0 0 0-1-1H0a1 1 0 1 0 0 2h3.5v10H0z',
      }),
    ),
  )
}

var Info$1 = iconHandler(Info)

var LandlinePhone = function LandlinePhone(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '19',
        height: '23',
        viewBox: '0 0 19 23',
      },
      props,
    ),
    React.createElement('path', {
      fill: 'none',
      fillRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      d:
        'M7.985 20.029s-1.933-1.815-4.002-5.399c1.846 3.198 4.002 5.399 4.002 5.399 1.311 1.386 3.406 1.911 5.853.498l2.803-1.618c.562-.325.764-1.03.459-1.56l-1.616-2.798c-.31-.537-1.027-.7-1.593-.374l-3.266 1.885s-.891-.462-2.737-3.66c-1.846-3.197-1.79-4.18-1.79-4.18l3.266-1.885c.566-.326.783-1.03.473-1.567L8.22 1.97c-.306-.53-1.018-.707-1.58-.383l-2.802 1.62C1.391 4.619.798 6.697 1.343 8.525c0 0 .793 2.907 2.64 6.105-2.07-3.584-2.64-6.105-2.64-6.105',
    }),
  )
}

var LandlinePhone$1 = iconHandler(LandlinePhone)

var Like = function Like(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '24',
        viewBox: '0 0 22 24',
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
          'M5 10H2.294a.294.294 0 0 0-.294.294v9.412c0 .162.132.294.294.294H5V10zM2.294 8H7v14H2.294A2.294 2.294 0 0 1 0 19.706v-9.412A2.294 2.294 0 0 1 2.294 8z',
      }),
      React.createElement('path', {
        d:
          'M7 9.183v11.04c3.83.933 7.084 1.118 9.756.57 1.736-.356 2.63-1.14 3.02-2.29.21-.62.256-1.203.231-2.126A11.605 11.605 0 0 1 20 16v-6c0-.443-.788-1-1.7-1H13a1 1 0 0 1-1-1V3.553a.294.294 0 0 0-.207-.28l-1.14-.356a1.277 1.277 0 0 0-1.574.767L7 9.183zM14 7h4.3c1.898 0 3.7 1.275 3.7 3v6c0 .066 0 .09.007.324.03 1.143-.03 1.92-.338 2.823-.619 1.824-2.082 3.107-4.511 3.605-3.179.652-6.982.384-11.413-.785A1 1 0 0 1 5 21V9a1 1 0 0 1 .065-.354l2.143-5.669a3.277 3.277 0 0 1 4.041-1.97l1.14.356A2.294 2.294 0 0 1 14 3.553V7z',
      }),
    ),
  )
}

var Like$1 = iconHandler(Like)

var List = function List(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '22',
        viewBox: '0 0 18 22',
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
          'M4 2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h10a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
      }),
      React.createElement('path', {
        d:
          'M5 8h8a1 1 0 0 0 0-2H5a1 1 0 1 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm0 4h8a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z',
      }),
    ),
  )
}

var List$1 = iconHandler(List)

var ListView = function ListView(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '16',
        viewBox: '0 0 18 16',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M7 15h10a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2zm0-6h10a1 1 0 0 0 0-2H7a1 1 0 1 0 0 2zm0-6h10a1 1 0 0 0 0-2H7a1 1 0 1 0 0 2z',
      }),
      React.createElement('circle', {
        cx: '2',
        cy: '14',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '2',
        cy: '8',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '2',
        cy: '2',
        r: '2',
      }),
    ),
  )
}

var ListView$1 = iconHandler(ListView)

var Measurement = function Measurement(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '24',
        height: '23',
        viewBox: '0 0 24 23',
      },
      props,
    ),
    React.createElement('path', {
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      d: 'M16.233 1.198l6.188 6.187L7.779 22.026 1.592 15.84z',
    }),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M8.716 8.716l1.767 1.767a1 1 0 0 0 1.415-1.414L10.13 7.302a1 1 0 1 0-1.414 1.414zM5.18 12.251l2.652 2.652a1 1 0 0 0 1.414-1.414l-2.652-2.652a1 1 0 0 0-1.414 1.414zm7.071-7.071l2.652 2.652a1 1 0 1 0 1.414-1.414l-2.652-2.652a1 1 0 1 0-1.414 1.414z',
    }),
  )
}

var Measurement$1 = iconHandler(Measurement)

var Menu = function Menu(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '14',
        viewBox: '0 0 18 14',
      },
      props,
    ),
    React.createElement('path', {
      d:
        'M1 14h16a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zm0-6h16a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2zm0-6h16a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2z',
      stroke: 'none',
      fillRule: 'nonzero',
    }),
  )
}

var Menu$1 = iconHandler(Menu)

var Messages = function Messages(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '18',
        viewBox: '0 0 22 18',
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
          'M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 18.5 2h-15zm0-2h15A3.5 3.5 0 0 1 22 3.5v11a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 0 14.5v-11A3.5 3.5 0 0 1 3.5 0z',
      }),
      React.createElement('path', {
        d:
          'M1.53 2.944l6.702 6.943a3.5 3.5 0 0 0 4.949.088c.044-.043.044-.043.087-.088l6.702-6.943a1 1 0 1 0-1.44-1.388l-6.7 6.942-.038.038a1.5 1.5 0 0 1-2.121-.038L2.97 1.556a1 1 0 1 0-1.44 1.388z',
      }),
    ),
  )
}

var Messages$1 = iconHandler(Messages)

var Minus = function Minus(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '2',
        viewBox: '0 0 22 2',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d: 'M1 2h20a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2z',
    }),
  )
}

var Minus$1 = iconHandler(Minus)

var MobilePhone = function MobilePhone(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '14',
        height: '22',
        viewBox: '0 0 14 22',
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
          'M2 2.993v16.014c0 .548.446.993.995.993h8.01a1 1 0 0 0 .995-.993V2.993A.995.995 0 0 0 11.005 2h-8.01A1 1 0 0 0 2 2.993zm-2 0A3 3 0 0 1 2.995 0h8.01A2.995 2.995 0 0 1 14 2.993v16.014A3 3 0 0 1 11.005 22h-8.01A2.995 2.995 0 0 1 0 19.007V2.993z',
      }),
      React.createElement('path', {
        d: 'M0 6h14V4H0zm0 11h14v-2H0z',
      }),
    ),
  )
}

var MobilePhone$1 = iconHandler(MobilePhone)

var More = function More(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '16',
        height: '4',
        viewBox: '0 0 16 4',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'rotate(90 8 8)',
      },
      React.createElement('circle', {
        cx: '2',
        cy: '14',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '2',
        cy: '8',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '2',
        cy: '2',
        r: '2',
      }),
    ),
  )
}

var More$1 = iconHandler(More)

var NewWindow = function NewWindow(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '20',
        height: '20',
        viewBox: '0 0 20 20',
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
          'M10.707 10.707l8-8a1 1 0 1 0-1.414-1.414l-8 8a1 1 0 0 0 1.414 1.414z',
      }),
      React.createElement('path', {
        d:
          'M13 2h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm3 10.667v3.666c0 .92-.746 1.667-1.667 1.667H3.667C2.747 18 2 17.254 2 16.333V5.667C2 4.747 2.746 4 3.667 4h3.666a1 1 0 1 0 0-2H3.667A3.667 3.667 0 0 0 0 5.667v10.666A3.667 3.667 0 0 0 3.667 20h10.666A3.667 3.667 0 0 0 18 16.333v-3.666a1 1 0 1 0-2 0z',
      }),
      React.createElement('path', {
        d: 'M18 1v6a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0z',
      }),
    ),
  )
}

var NewWindow$1 = iconHandler(NewWindow)

var Nfc = function Nfc(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '24',
        viewBox: '0 0 18 24',
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
          'M2.772 16.292c.644-1.137.985-2.4.985-3.724a7.627 7.627 0 0 0-1.26-4.207 1 1 0 0 0-1.67 1.103c.6.908.929 1.987.929 3.104 0 .974-.25 1.899-.725 2.738a1 1 0 1 0 1.74.986zm3.916 2.314c1.026-1.728 1.587-3.826 1.587-6.038 0-2.413-.668-4.714-1.863-6.506a1 1 0 1 0-1.664 1.11c.971 1.456 1.527 3.37 1.527 5.396 0 1.858-.466 3.602-1.307 5.016a1 1 0 1 0 1.72 1.022z',
      }),
      React.createElement('path', {
        d:
          'M10.074 21.041c1.72-2.097 2.718-5.173 2.718-8.473 0-3.55-1.158-6.848-3.106-8.93a1 1 0 0 0-1.46 1.366c1.58 1.69 2.566 4.497 2.566 7.564 0 2.856-.853 5.483-2.265 7.205a1 1 0 0 0 1.547 1.268z',
      }),
      React.createElement('path', {
        d:
          'M14.108 23.112c2.189-2.67 3.465-6.602 3.465-10.824 0-4.544-1.479-8.757-3.957-11.405a1 1 0 0 0-1.46 1.366c2.11 2.256 3.417 5.978 3.417 10.039 0 3.779-1.13 7.26-3.012 9.556a1 1 0 0 0 1.547 1.268z',
      }),
    ),
  )
}

var Nfc$1 = iconHandler(Nfc)

var Notification = function Notification(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '22',
        viewBox: '0 0 18 22',
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
          'M17.603 16.202C18.368 16.781 17.96 18 17 18H1c-.963 0-1.37-1.227-.597-1.802.042-.031.158-.136.324-.322.302-.337.61-.771.902-1.314.864-1.604 1.39-3.752 1.39-6.527C3.02 4.704 5.706 2 9.023 2c3.317 0 6.004 2.704 6.004 6.035 0 2.777.518 4.927 1.37 6.533.288.542.59.977.888 1.314.164.185.277.29.318.32zm-2.973-.697c-1.007-1.899-1.603-4.37-1.603-7.47C13.027 5.805 11.232 4 9.023 4c-2.21 0-4.004 1.805-4.004 4.035 0 3.101-.606 5.575-1.629 7.475a10.31 10.31 0 0 1-.28.49h11.8c-.093-.156-.186-.32-.28-.495z',
      }),
      React.createElement('path', {
        d:
          'M5 18a4 4 0 1 0 8 0 1 1 0 0 0-2 0 2 2 0 1 1-4 0 1 1 0 0 0-2 0zM8 1v2a1 1 0 1 0 2 0V1a1 1 0 1 0-2 0z',
      }),
    ),
  )
}

var Notification$1 = iconHandler(Notification)

var OverflowMenu = function OverflowMenu(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '4',
        height: '16',
        viewBox: '0 0 4 16',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'rotate(90 2 2)',
      },
      React.createElement('circle', {
        cx: '2',
        cy: '2',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '8',
        cy: '2',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '14',
        cy: '2',
        r: '2',
      }),
    ),
  )
}

var OverflowMenu$1 = iconHandler(OverflowMenu)

var Plus = function Plus(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
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
        d: 'M10 1v20a1 1 0 0 0 2 0V1a1 1 0 0 0-2 0z',
      }),
      React.createElement('path', {
        d: 'M1 12h20a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2z',
      }),
    ),
  )
}

var Plus$1 = iconHandler(Plus)

var Print = function Print(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '18',
        viewBox: '0 0 22 18',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 2)',
      },
      React.createElement('circle', {
        cx: '15',
        cy: '9',
        r: '1',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M7.158 0C6.518 0 6 .518 6 1.158V4h8V1.158C14 .518 13.482 0 12.842 0H7.158zm0-2h5.684A3.158 3.158 0 0 1 16 1.158V6H4V1.158A3.158 3.158 0 0 1 7.158-2z',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M2.413 11.165a1 1 0 0 1 1.002 1l.003.73.002.316.005.668c0 .205-.068.123.084.12h12.959c.225.004.112.132.112-.115l-.005-.66-.003-.318a121.04 121.04 0 0 1-.003-.741 1 1 0 0 1 1.003-1l1.422.004-.023-3.893c0-.588-.657-1.276-1.319-1.276H2.38C1.7 6 1 6.708 1 7.273l.01 3.896 1.403-.004zm16.162 2.043l.005.667c0 1.313-.73 2.143-2.125 2.125H3.523c-1.355.018-2.098-.881-2.098-2.112 0-.15-.003-.39-.005-.663v-.057l-1.404.004a1 1 0 0 1-1.003-.998L-1 7.276C-1 5.608.592 4 2.38 4h15.272c1.788 0 3.32 1.603 3.32 3.27L21 12.166a1 1 0 0 1-1.003 1.006l-1.423-.004v.04z',
      }),
    ),
  )
}

var Print$1 = iconHandler(Print)

var Recipe = function Recipe(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '19',
        height: '22',
        viewBox: '0 0 19 22',
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
          'M2.802 10.942l.198.266v8.542c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-8.299l.319-.296A5.316 5.316 0 0 0 17 7.25C17 4.344 14.723 2 11.929 2c-1.657 0-3.182.828-4.13 2.202l-.39.565-.669-.162a3.738 3.738 0 0 0-.883-.105C3.733 4.5 2 6.284 2 8.5c0 .898.285 1.748.802 2.442zM1 11.854A6.08 6.08 0 0 1 0 8.5c0-3.307 2.616-6 5.857-6 .233 0 .465.014.694.042C7.877.949 9.825 0 11.929 0 15.84 0 19 3.252 19 7.25a7.33 7.33 0 0 1-2 5.053v7.447A2.25 2.25 0 0 1 14.75 22H3.25A2.25 2.25 0 0 1 1 19.75v-7.896z',
      }),
      React.createElement('path', {
        d:
          'M6 13v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0zm4 0v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-2 0z',
      }),
    ),
  )
}

var Recipe$1 = iconHandler(Recipe)

var Scan = function Scan(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '24',
        height: '18',
        viewBox: '0 0 24 18',
      },
      props,
    ),
    React.createElement('path', {
      d:
        'M5 6v6a1 1 0 0 0 2 0V6a1 1 0 1 0-2 0zm4 0v6a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0zm4 0v6a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0zM2 2h3a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V2zm20 0h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2zM2 16h3a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3zm20 0h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v3z',
      stroke: 'none',
      fillRule: 'nonzero',
    }),
  )
}

var Scan$1 = iconHandler(Scan)

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

var Settings = function Settings(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '24',
        height: '22',
        viewBox: '0 0 24 22',
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
          'M10.37 4.379a1 1 0 0 1-.669.962 6.625 6.625 0 0 0-2.02 1.132 1 1 0 0 1-1.095.114L4.405 5.454c-.017-.009-.065.005-.075.022L2.947 7.814l2.106 1.093a1 1 0 0 1 .523 1.069 5.648 5.648 0 0 0 .042 2.253 1 1 0 0 1-.486 1.089l-2.06 1.16 1.475 2.3c.01.015.051.025.072.013l2.138-1.203a1 1 0 0 1 1.098.077 6.67 6.67 0 0 0 2.062 1.065 1 1 0 0 1 .701.936L10.662 20c0 .002 1.003-.013 3.01-.046l-.043-2.334a1 1 0 0 1 .67-.962 6.625 6.625 0 0 0 2.02-1.132 1 1 0 0 1 1.095-.114l2.181 1.133c.017.009.065-.005.075-.022l1.383-2.338-2.106-1.093a1 1 0 0 1-.523-1.069 5.648 5.648 0 0 0-.042-2.253 1 1 0 0 1 .486-1.089l2.06-1.16-1.475-2.3c-.01-.015-.051-.025-.072-.013l-2.138 1.203a1 1 0 0 1-1.098-.077 6.668 6.668 0 0 0-2.062-1.065 1 1 0 0 1-.701-.936l-.04-2.163c-.002-.082-.105-.174-.27-.17l-2.743.044.042 2.334zM8.329 2.08A1.997 1.997 0 0 1 10.296.045L13.04 0c1.235-.02 2.28.913 2.302 2.134l.028 1.474c.505.206.989.458 1.443.752l1.587-.894a2.064 2.064 0 0 1 2.738.676l1.51 2.358a1.93 1.93 0 0 1-.695 2.74l-1.491.84a7.69 7.69 0 0 1 .029 1.56l1.54.801a1.928 1.928 0 0 1 .771 2.715l-1.41 2.386a2.072 2.072 0 0 1-2.72.779l-1.62-.843a8.625 8.625 0 0 1-1.41.797l.03 1.644a1.994 1.994 0 0 1-1.954 2.036l-3.031.05a2 2 0 0 1-2.025-1.967l-.03-1.646a8.668 8.668 0 0 1-1.444-.752l-1.587.894a2.064 2.064 0 0 1-2.738-.676L1.352 15.5a1.93 1.93 0 0 1 .695-2.74l1.491-.84a7.69 7.69 0 0 1-.029-1.56l-1.54-.801a1.928 1.928 0 0 1-.771-2.715l1.41-2.386a2.072 2.072 0 0 1 2.72-.779l1.62.843a8.625 8.625 0 0 1 1.41-.797l-.03-1.644z',
      }),
      React.createElement('path', {
        d:
          'M12 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      }),
    ),
  )
}

var Settings$1 = iconHandler(Settings)

var StoreLocation = function StoreLocation(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '24',
        viewBox: '0 0 18 24',
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
          'M10.438 22.824a2.222 2.222 0 0 1-3.132-.256C2.451 16.85 0 12.368 0 9c0-5.288 3.87-9 9-9s9 3.712 9 9c0 3.369-2.451 7.85-7.306 13.568a2.222 2.222 0 0 1-.256.256zM16 9c0-4.164-2.956-7-7-7-4.044 0-7 2.836-7 7 0 2.758 2.261 6.891 6.83 12.274.08.094.22.105.314.026C13.739 15.89 16 11.758 16 9z',
      }),
      React.createElement('path', {
        d:
          'M9 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
      }),
    ),
  )
}

var StoreLocation$1 = iconHandler(StoreLocation)

var StoreLocation1 = function StoreLocation1(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '24',
        viewBox: '0 0 18 24',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M10.687 22.994a2.111 2.111 0 0 1-3.374 0C2.448 16.53 0 11.69 0 8.332 0 3.14 3.72 0 9 0c5.28 0 9 3.14 9 8.332 0 3.357-2.448 8.197-7.313 14.662zM16 8.332C16 4.327 13.243 2 9 2S2 4.327 2 8.332c0 2.79 2.293 7.323 6.911 13.46a.111.111 0 0 0 .156.022C13.707 15.654 16 11.12 16 8.332z',
      }),
      React.createElement('path', {
        d:
          'M8.99 5.61L6.97 6.83l.52.9c.06.11.15.12.27.05l.7-.41v3.49H7.43V12h3.71v-1.14h-.94V5.83c0-.18-.06-.22-.25-.22h-.96z',
      }),
    ),
  )
}

var StoreLocation1$1 = iconHandler(StoreLocation1)

var StoreLocation10 = function StoreLocation10(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '24',
        viewBox: '0 0 18 24',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
      },
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M10.687 22.994a2.111 2.111 0 0 1-3.374 0C2.448 16.53 0 11.69 0 8.332 0 3.14 3.72 0 9 0c5.28 0 9 3.14 9 8.332 0 3.357-2.448 8.197-7.313 14.662zM16 8.332C16 4.327 13.243 2 9 2S2 4.327 2 8.332c0 2.79 2.293 7.323 6.911 13.46a.111.111 0 0 0 .156.022C13.707 15.654 16 11.12 16 8.332z',
      }),
      React.createElement('path', {
        d:
          'M6.11 5.61L4.09 6.83l.52.9c.06.11.15.12.27.05l.7-.41v3.49H4.55V12h3.71v-1.14h-.94V5.83c0-.18-.06-.22-.25-.22h-.96zm7.66 3.23c0 1.98-.75 3.28-2.55 3.28-1.8 0-2.57-1.3-2.57-3.28 0-1.98.76-3.29 2.56-3.29s2.56 1.31 2.56 3.29zm-1.82 0c0-1.44-.2-1.98-.74-1.98s-.74.54-.74 1.98.21 1.97.75 1.97.73-.53.73-1.97z',
      }),
    ),
  )
}

var StoreLocation10$1 = iconHandler(StoreLocation10)

var Tick = function Tick(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '18',
        height: '16',
        viewBox: '0 0 18 16',
      },
      props,
    ),
    React.createElement('path', {
      stroke: 'none',
      fillRule: 'nonzero',
      d:
        'M.285 11.51l3.505 3.58a2.6 2.6 0 0 0 3.927-.243L17.796 1.606A1 1 0 0 0 16.204.394L6.126 13.636a.6.6 0 0 1-.906.056L1.715 10.11a1 1 0 1 0-1.43 1.4z',
    }),
  )
}

var Tick$1 = iconHandler(Tick)

var Time = function Time(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '22',
        viewBox: '0 0 22 22',
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
        d: 'M12 5.5a1 1 0 0 0-2 0v6l4.8 3.6a1 1 0 0 0 1.2-1.6l-4-3v-5z',
      }),
      React.createElement('path', {
        d:
          'M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11z',
      }),
    ),
  )
}

var Time$1 = iconHandler(Time)

var Trolley = function Trolley(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '22',
        height: '23',
        viewBox: '0 0 22 23',
      },
      props,
    ),
    React.createElement(
      'g',
      {
        stroke: 'none',
        fillRule: 'evenodd',
        transform: 'translate(1 1)',
      },
      React.createElement('circle', {
        cx: '16',
        cy: '20',
        r: '2',
      }),
      React.createElement('circle', {
        cx: '6',
        cy: '20',
        r: '2',
      }),
      React.createElement('path', {
        fillRule: 'nonzero',
        d:
          'M2.304 5.57l1.907 8.309A1.445 1.445 0 0 0 5.62 15h10.567c.673 0 1.257-.465 1.408-1.12l1.16-5.046a2.667 2.667 0 0 0-2.598-3.264H2.304zm0 0h-1.26a1 1 0 0 1 0-2h15.112a4.667 4.667 0 0 1 4.548 5.713l-1.16 5.045A3.444 3.444 0 0 1 16.185 17H5.62a3.444 3.444 0 0 1-3.357-2.674L-.975.224a1 1 0 1 1 1.95-.448l1.33 5.794z',
      }),
    ),
  )
}

var Trolley$1 = iconHandler(Trolley)

var Upload = function Upload(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '20',
        height: '21',
        viewBox: '0 0 20 21',
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
        d: 'M9 2v14a1 1 0 0 0 2 0V2a1 1 0 1 0-2 0z',
      }),
      React.createElement('path', {
        d:
          'M10 2.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L10 2.414zM1 21h18a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z',
      }),
    ),
  )
}

var Upload$1 = iconHandler(Upload)

var VoiceSearch = function VoiceSearch(props) {
  return React.createElement(
    'svg',
    _extends(
      {
        width: '16',
        height: '23',
        viewBox: '0 0 16 23',
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
          'M8 2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2zm0-2a4 4 0 0 1 4 4v6a4 4 0 1 1-8 0V4a4 4 0 0 1 4-4z',
      }),
      React.createElement('path', {
        d:
          'M0 11c0 3.903 3.613 7 8 7 4.387 0 8-3.097 8-7a1 1 0 0 0-2 0c0 2.724-2.655 5-6 5s-6-2.276-6-5a1 1 0 1 0-2 0z',
      }),
      React.createElement('path', {
        d: 'M9 22v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0z',
      }),
      React.createElement('path', {
        d: 'M5 23h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2z',
      }),
    ),
  )
}

var VoiceSearch$1 = iconHandler(VoiceSearch)

var ZoomIn = function ZoomIn(props) {
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
      React.createElement('path', {
        d: 'M5.5 10h7a1 1 0 0 0 0-2h-7a1 1 0 1 0 0 2z',
      }),
      React.createElement('path', {
        d: 'M8 5.5v7a1 1 0 0 0 2 0v-7a1 1 0 1 0-2 0z',
      }),
    ),
  )
}

var ZoomIn$1 = iconHandler(ZoomIn)

var ZoomOut = function ZoomOut(props) {
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
      React.createElement('path', {
        d: 'M5.5 10h7a1 1 0 0 0 0-2h-7a1 1 0 1 0 0 2z',
      }),
    ),
  )
}

var ZoomOut$1 = iconHandler(ZoomOut)

export {
  Accessibility$1 as Accessibility,
  Account$1 as Account,
  ArrowDown$1 as ArrowDown,
  ArrowLeft$1 as ArrowLeft,
  ArrowRight$1 as ArrowRight,
  ArrowUp$1 as ArrowUp,
  AwardWinning$1 as AwardWinning,
  Bag$1 as Bag,
  Basket$1 as Basket,
  Calendar$1 as Calendar,
  Cancel$1 as Cancel,
  ClickAndCollect,
  Comment$1 as Comment,
  Delete$1 as Delete,
  Delivery$1 as Delivery,
  Dislike$1 as Dislike,
  Download$1 as Download,
  Edit$1 as Edit,
  Favourites$1 as Favourites,
  Freshness$1 as Freshness,
  Geolocation$1 as Geolocation,
  GridView$1 as GridView,
  Home$1 as Home,
  Info$1 as Info,
  LandlinePhone$1 as LandlinePhone,
  Like$1 as Like,
  List$1 as List,
  ListView$1 as ListView,
  Measurement$1 as Measurement,
  Menu$1 as Menu,
  Messages$1 as Messages,
  Minus$1 as Minus,
  MobilePhone$1 as MobilePhone,
  More$1 as More,
  NewWindow$1 as NewWindow,
  Nfc$1 as Nfc,
  Notification$1 as Notification,
  OverflowMenu$1 as OverflowMenu,
  Plus$1 as Plus,
  Print$1 as Print,
  Recipe$1 as Recipe,
  Scan$1 as Scan,
  Search$1 as Search,
  Settings$1 as Settings,
  StoreLocation$1 as StoreLocation,
  StoreLocation1$1 as StoreLocation1,
  StoreLocation10$1 as StoreLocation10,
  Tick$1 as Tick,
  Time$1 as Time,
  Trolley$1 as Trolley,
  Upload$1 as Upload,
  VoiceSearch$1 as VoiceSearch,
  ZoomIn$1 as ZoomIn,
  ZoomOut$1 as ZoomOut,
}
