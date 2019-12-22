
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';

/**
 * Type can be responsive, fit-cover or fit-contain
 * Src is needed
 * Supports alt, width, height
 */
class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};
        var className = "";
        if (this.props.type) {
            className = "image-" + this.props.type;
        }
        props = generateClassName(passedProps, className);
        props = addEvents(this.props, props);

        if (this.props.alt) props.alt = this.props.alt;
        if (this.props.width) props.width = this.props.width;
        if (this.props.height) props.height = this.props.height;


        return c("img", { src: this.props.src, className: className }, null);
    }
}

export default Image;
