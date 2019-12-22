
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 * icon:icon
 */
class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "icon icon-" + this.props.icon;
 
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);



        return c("i", props);
    }
}


export default Icon;
