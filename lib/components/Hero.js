
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 */
class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "hero";
        var size = this.props.size;
        if (size){
            switch(size){
                case 'xl':className += " hero-xl";break;
                case 'l':className += " hero-lg";break;
                case 'm':className += " hero-md";break;
                case 's':className += " hero-sm";break;
                case 'xs':className += " hero-xs";break;
            }
        }

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("div", props, c("div",{className:"hero-body"},this.props.children));
    }
}


export default Hero;
