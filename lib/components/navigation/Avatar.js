import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 */
class Avatar extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    var props = {}

    var className = 'bar'
    var size = this.props.size;
    if (size){
        switch (size){
            case 'xl':className += " avatar-xl";break;
            case 'l':className += " avatar-lg";break;
            case 's':className += " avatar-sm";break;
            case 'xs':className += " avatar-xs";break;
        }
    }

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)


    return c("div",props,items);
  }
}

export default Avatar
