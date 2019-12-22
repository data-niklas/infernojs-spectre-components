
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 * Type: contained, outlined, text, unelevated
 * Text
 * Size: Default, large, small or block
 */
class BlockQuote extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        props = generateClassName(this.props, "");
        props = addEvents(this.props, props);

        return c("blockquote", props, this.props.children);
    }
}


export default BlockQuote;
