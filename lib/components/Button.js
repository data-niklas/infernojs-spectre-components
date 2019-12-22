
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 * Type: contained, outlined, text, unelevated
 * Text
 * Size: Default, large, small or block
 */
class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "btn"
            + (this.props.type ? " btn-" + this.props.type : "");
        switch (this.props.size) {
            case 'l': className += ' btn-lg'; break;
            case 's': className += ' btn-sm'; break;
            case 'block': className += ' btn-block'; break;
        }
        if (this.props.shape) className += " btn-action";

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("button", props, this.props.children);
    }
}


export default Button;
