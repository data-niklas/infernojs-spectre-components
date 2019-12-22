
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 */
class Link extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "";
 
        if (this.props.button === true)className = "btn btn-link";
        if (this.props.brand === true)className += " navbar-brand";
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);


      var onClick = props.onClick
      if (onClick)
        props.onClick = e => {
          e.preventDefault()
          onClick(e)
        }

        if (this.props.href)props.href = this.props.href;

        return c("a", props, this.props.children);
    }
}


export default Link;
