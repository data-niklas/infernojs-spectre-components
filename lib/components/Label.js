
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


class Label extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};
        var passedProps = Object.assign({}, this.props);
        var className = "label";
        if (this.props.rounded === true) className += " label-rounded";
        if (this.props.backgroundColor) {
            delete passedProps.backgroundColor;
            className += " label-" + this.props.backgroundColor;
        }

        props = generateClassName(passedProps, className);
        props = addEvents(this.props, props);

        var type = this.props.type || "span";

        return c(type, props, this.props.children);
    }
}


export default Label;
