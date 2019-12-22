
import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';


/**
 * Add Buttons as children
 */
class ButtonGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "btn-group" + this.props.block === true ? ' btn-group-block' : '';
        

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("div", props, this.props.children);
    }
}


export default ButtonGroup;
