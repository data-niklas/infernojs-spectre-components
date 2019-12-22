
import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';


/**
 */
class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "container";
        var size = this.props.size;
        if (size){
            switch(size){
                case 'xl':className += " grid-xl";break;
                case 'l':className += " grid-lg";break;
                case 'm':className += " grid-md";break;
                case 's':className += " grid-sm";break;
                case 'xs':className += " grid-xs";break;
            }
        }

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("div", props, this.props.children);
    }
}


export default Container;
