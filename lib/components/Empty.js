import { Component } from '../inferno.js'
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js'

/**
 *
 */
class Empty extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'empty'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []

    var icon = this.props.icon
    if (icon) {
      items.push(
        c(
          'div',
          { className: 'empty-icon' },
          c('i', { className: 'icon icon-' + icon }, null)
        )
      )
    }
    var title = this.props.title
    if (title) {
      items.push(c('p', { className: 'empty-title h5' }, title))
    }
    var subTitle = this.props.subTitle
    if (subTitle) {
      items.push(c('p', { className: 'empty-subtitle' }, subTitle))
    }
    if (this.props.children) {
      items.push(c('div', { className: 'empty-action' }, this.props.children))
    }

    return c('div', props, items)
  }
}

export default Empty
