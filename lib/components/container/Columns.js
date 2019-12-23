import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 */
class Columns extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'columns'
    if (this.props.gapless === true) className += ' col-gapless'
    if (this.props.oneline === true) className += ' col-oneline'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    return c('div', props, this.props.children)
  }
}

/**
 * Width 1 - 12
 * Size: xl, l, m, s, xs
 */
class Column extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'column'
    if (this.props.width) className += ' col-' + this.props.width
    if (this.props.margin) {
      switch (this.props.margin) {
        case 'left':
          className += ' col-ml-auto'
          break
        case 'right':
          className += ' col-mr-auto'
          break
        case 'center':
          className += ' col-mx-auto'
          break
      }
    }
    var size = this.props.size
    if (size) {
      if (typeof size === 'string') {
        switch (size) {
          case 'xl':
            className += ' col-xl-auto'
            break
          case 'l':
            className += ' col-lg-auto'
            break
          case 'm':
            className += ' col-md-auto'
            break
          case 's':
            className += ' col-sm-auto'
            break
          case 'xs':
            className += ' col-xs-auto'
            break
        }
      } else if (Array.isArray(size)) {
        for (var item of size) {
          className += this.addSize(item)
        }
      } else if (typeof size === 'object') {
        className += this.addSize(item)
      }
    }

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    return c('div', props, this.props.children)
  }
  addSize (item) {
    switch (item.size) {
      case 'xl':
        return ' col-xl-' + item.width
      case 'l':
        return ' col-lg-' + item.width
      case 'm':
        return ' col-md-' + item.width
      case 's':
        return ' col-sm-' + item.width
      case 'xs':
        return ' col-xs-' + item.width
      default:
        return ' col-' + item.width
    }
  }
}

export { Columns, Column }
