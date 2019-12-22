import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import Icon from '../Icon.js'

/**
 * Type: contained, outlined, text, unelevated
 * Text
 * Size: Default, large, small or block
 */
class Dropdown extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = { className: 'dropdown' }

    var items = []
    var buttonProps = this.props
    if (buttonProps.className) buttonProps.className += ' dropdown-toggle'
    else buttonProps.className = 'dropdown-toggle'
    items.push(
      c(Button, buttonProps, this.props.children, c(Icon, { icon: 'caret' }))
    )
    items.push(this.props.menu)
    return c('div', props, items)
  }
}

export default Dropdown
