
import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';


/**
 * to create a popover, give it a something to show as a child and set the trigger
 * trigger: the container, on which the popover will be shown (e.g.: Button)
 */
class Popover extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "popover" + (this.props.position ? ' popover-' + this.props.position : '');
 
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);


        return c("div", props, this.props.trigger,c("div",{className:"popover-container"},this.props.children));
    }
}



export default Popover;
