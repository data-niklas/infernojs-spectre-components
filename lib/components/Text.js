
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 * Type: contained, outlined, text, unelevated
 * Text
 * Size: Default, large, small or block
 */
class Text extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};
        props = generateClassName(this.props, "");
        props = addEvents(this.props, props);

        var type;
        switch (this.props.type) {
            case "citation": type = "cite"; break;
            case "deleted": type = "del"; break;
            case "italic": type = "i"; break;
            case "bold", "strong": type = "b"; break;
            case "keyboard": type = "kbd"; break;
            case "sample": type = "samp"; break;
            case "superscript": type = "sup"; break;
            case "underlined": type = "u"; break;
            case "code": type = "code"; break;
            case "emphasized": type = "em"; break;
            case "inserted": type = "ins"; break;
            case "marked": type = "mark"; break;
            case "strikethrough": type = "s"; break;
            case "subscript": type = "sub"; break;
            case "time": type = "time"; break;
            case "variable": type = "var"; break;
            default: type = "div";
        }

        return c(type, props, this.props.children);
    }
}


export default Text;
