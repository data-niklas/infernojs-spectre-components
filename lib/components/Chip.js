import { Component } from '../inferno.js'
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js'

/**
 * onDelete
 * deletable
 * icon (src)
 */
class Chip extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'chip'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []

    var icon = this.props.icon
    if (icon) {
      items.push(c('img', { src: icon, className: 'avatar avatar-sm' }, null))
    }
    items.push(this.props.children)
    if (this.props.deletable === true) {
      var deleteProps = {
        className: 'btn btn-clear',
        role: 'button',
        'aria-label': 'Close',
        href: 'javascript:void(0)'
      }

      var onDelete = this.props.onDelete
      if (onDelete)
        deleteProps.onClick = e => {
          e.preventDefault()
          onDelete(e)
        }

      items.push(c('a', deleteProps, null))
    }

    return c('span', props, items)
  }
}

export default Chip
