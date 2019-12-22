
import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';

/**
 * Type: text, switch, checkbox, radio
 *  Checked: true / false
 *  Text: Can be some text
 *  Inline: true to make it inline
 *  Status: error / success
 *  Title: Some text to give it a title
 *  TextType: Some type email, password,  color, date, name, month, datetime-local, file, image, number, search, time, url, week
 */
class InputGroup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "input-group";

        props = generateClassName(this.props, className, props);
        props = addEvents(this.props, props);


        var items = this.props.children;
        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            var type = item.type.name;
            if (type === 'Button') {
                if (item.className === null) item.className = "input-group-btn";
                else item.className += " input-group-btn";
            }
            else if (type !== 'Input' && type !== 'Selection') {
                if (item.className === null) item.className = "input-group-addon";
                else item.className += " input-group-addon";
            }
        }

        return c("div", props, items);
    }
}


export default InputGroup;
