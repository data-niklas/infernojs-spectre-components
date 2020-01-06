import { Component } from '../inferno.js'
Component.prototype.makeDefault = function makeDefault (variable) {
  if (!this.default) this.default = {}
  this.default[variable] = this.props[variable]
}
Component.prototype.getDefault = function getDefault (variable) {
  var value = this.default[variable]
  delete this.default[variable]
  return value
}

function generateClassName (props, className, newProps = {}) {
  className += props.className ? ' ' + props.className : ''
  className +=
    (props.loading === true ? ' loading' : '') +
    (props.state ? ' ' + props.state : '') + //enabled, disabled
    (props.cursor ? ' c-' + props.cursor : '') + //hand, move, zoom-in, zoom-out, not-allowed, auto
    (props.color ? ' text-' + props.color : '') + //primary, secondary, dark, gray, light, success, warning, error
    (props.backgroundColor ? ' bg-' + props.backgroundColor : '') + //Same as color
    (props.shape ? ' s-' + props.shape : '') +//rounded or circle
    (props.display ? ' d-' + props.display:'')//Any display

  if (props.badge) {
    className += ' badge'
    newProps['data-badge'] = props.badge
  }
  if (props.tooltip) {
    className += ' tooltip'
    if (typeof props.tooltip === 'object') {
      if (props.tooltip.position)
        className += ' tooltip-' + props.tooltip.position
      newProps['data-tooltip'] = props.tooltip.text
    } else newProps['data-tooltip'] = props.tooltip
  }
  if (props.visible === true) className += ' d-visible'
  else if (props.visible === false) className += ' d-invisible'

  className = addHideShow(props, className)

  newProps.className = className

  if (props.id) newProps.id = props.id
  if (props.name) newProps.name = props.name
  if (props.index) newProps.index = props.index

  return newProps
}

function addEvents (props, newProps) {
  if (props.onChange) newProps.onchange = props.onChange
  if (props.onClick) newProps.onClick = props.onClick
  if (props.onDblClick) newProps.onDblClick = props.onDblClick
  if (props.onFocusIn) newProps.onFocusIn = props.onFocusIn
  if (props.onFocusOut) newProps.onFocusOut = props.onFocusOut
  if (props.onKeyDown) newProps.onKeyDown = props.onKeyDown
  if (props.onKeyUp) newProps.onKeyUp = props.onKeyUp
  if (props.onKeyPress) newProps.onKeyPress = props.onKeyPress
  if (props.onMouseDown) newProps.onMouseDown = props.onMouseDown
  if (props.onMouseUp) newProps.onMouseUp = props.onMouseUp
  if (props.onMouseMove) newProps.onMouseMove = props.onMouseMove
  if (props.onTouchEnd) newProps.onTouchEnd = props.onTouchEnd
  if (props.onTouchStart) newProps.onTouchStart = props.onTouchStart
  if (props.onTouchMove) newProps.onTouchMove = props.onTouchMove

  return newProps
}

function addHideShow (props, className) {
  if (props.show) {
    switch (props.show) {
      case 'xl':
        className += ' show-xl'
        break
      case 'l':
        className += ' show-lg'
        break
      case 'm':
        className += ' show-md'
        break
      case 's':
        className += ' show-sm'
        break
      case 'xs':
        className += ' show-xs'
        break
    }
  }
  if (props.hide) {
    switch (props.hide) {
      case 'xl':
        className += ' hide-xl'
        break
      case 'l':
        className += ' hide-lg'
        break
      case 'm':
        className += ' hide-md'
        break
      case 's':
        className += ' hide-sm'
        break
      case 'xs':
        className += ' hide-xs'
        break
    }
  }

  return className
}

// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.
function randomId () {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

export { generateClassName, addEvents, randomId }
