import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 * Give a text the className: panel-title or panel-subtitle to make it a title or subtitle
 */
class Panel extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'panel'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var header = this.props.header,
      nav = this.props.nav,
      body = this.props.body,
      footer = this.props.footer

      console.log(header,nav,body,footer,this.props)

    var items = []

    if (header)items.push(c("div",{className:"panel-header"},header));
    if (nav)items.push(c("div",{className:"panel-nav"},nav));
    if (body)items.push(c("div",{className:"panel-body"},body));
    if (footer)items.push(c("div",{className:"panel-footer"},footer));

    return c('div', props, items)
  }
}

export default Panel
