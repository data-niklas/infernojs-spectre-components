import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents, randomId } from '../Utils.js'

/**
 */
class Accordion extends Component {
  constructor (props) {
    super(props);
    this.state = {
        id: this.props.id || randomId()
    }
  }

  render () {
    var props = {}

    var className = 'accordion'
    var type = this.props.type || 'checkbox'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var headerItems = []

    var icon = this.props.icon
    if (icon) {
      if (icon === true) icon = 'arrow-right'
      headerItems.push(c('i', { className: 'mr-1 icon icon-' + icon }, null))
    }
    headerItems.push(this.props.title);

    var id = this.state.id;

    return c(
      'div',
      props,
      c(
        "input",
        { type: type, name: 'accordion-' + type, hidden: true,id:id },
        null
      ),
      c('label', { className: 'accordion-header',for:id }, headerItems),
        c('div', { className: 'accordion-body' }, this.props.children)
    )
  }
}

export default Accordion
