import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 * Items should be Links or Dividers
 */
class Menu extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'menu'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []
    var propItems = this.props.items || []

    if (this.props.indexed === true) {
      var current = 0;
      for (var item of propItems) {
        if (item.type.name !== 'Divider') {
          item.props.index = current.toString()//How?
          current++
        }
        items.push(c('li', { className: 'menu-item' }, item))
      }
    } else {
      for (var item of propItems) {
        items.push(c('li', { className: 'menu-item' }, item))
      }
    }

    return c('ul', props, items)
  }
}

class Divider extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'divider'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    if (this.props.text) {
      props['data-content'] = this.props.text
    }

    return c('li', props, null)
  }
}

export { Menu, Divider }
