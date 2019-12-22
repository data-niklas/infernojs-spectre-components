import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'
import Link from '../Link.js'

/**
 * step: current step (1,2,3,4 --> beginning at 1)
 */
class Step extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var props = {}

    var className = 'step'

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []

    var steps = this.props.steps
    var step = this.props.step || 1

    if (typeof steps === 'number') {
      for (let index = 0; index < steps; index++) {
        items.push(
          c(
            'div',
            { className: 'step-item' + (step === index + 1 ? ' active' : '') },
            c(Link, { href: 'javascript:void(0)' })
          )
        )
      }
    } else {
      //Type array
      for (let index = 0; index < steps.length; index++) {
        const item = steps[index]
        if (typeof item === 'string') {
          items.push(
            c(
              'div',
              {
                className: 'step-item' + (step === index + 1 ? ' active' : '')
              },
              c(Link, { href: 'javascript:void(0)' }, item)
            )
          )
        } else {
          //Object
          var linkProps = { href: 'javascript:void(0)' }
          if (item.tooltip) linkProps.tooltip = item.tooltip
          items.push(
            c(
              'div',
              {
                className: 'step-item' + (step === index + 1 ? ' active' : '')
              },
              c(Link, linkProps, item.text)
            )
          )
        }
      }
    }

    return c('div', props, items)
  }
}

export default Step
