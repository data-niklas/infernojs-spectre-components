import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'
import Link from '../Link.js'


var modals = {};

/**
 * active: if it is shown
 * size: l or s (large or small / or default)
 * title
 * body
 * footer
 * can have a name, by which it is identified
 * 
 * How to use:
 * - Create a container with all modals, give them names
 * - Call the method Modal.showModal(<name>) to open it (e.g.: Button onClick event)
 */
class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    if (this.props.name)Modal.addModal(this.props.name,this);
  }
  show () {
    this.setState({ active: true })
  }
  hide () {
    this.setState({ active: false })
  }

  render () {
    var props = {}

    var className = 'modal' + (this.state.active ? ' active' : '')

    switch (this.props.size) {
        case 'l': className += ' modal-lg'; break;
        case 's': className += ' modal-sm'; break;
    }

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []
    items.push(
      c(Link, {
        className: 'modal-overlay',
        'aria-label': 'Close',
        onClick: this.hide
      })
    )
    items.push(
      c(
        'div',
        { className: 'modal-container', role: 'document' },
        c(
          'div',
          { className: 'modal-header' },
          c(Link, {
            className: 'btn btn-clear float-right',
            'aria-label': 'Close',
            onClick: this.hide
          }),
          c('div', { className: 'modal-title h5' }, this.props.title)
        ),
        c(
          'div',
          { className: 'modal-body' },
          c('div', { className: 'content' }, this.props.body)
        ),
        c('div', { className: 'modal-footer' }, this.props.footer)
      )
    )

    return c('div', props, items)
  }
}

Modal.addModal = function(name,that){
  modals[name] = that;
}
Modal.showModal = function(name){
  modals[name].show();
}
Modal.hideModal = function(name){
  modals[name].hide();
}

export default Modal
