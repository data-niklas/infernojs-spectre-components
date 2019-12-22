import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';


/**
 * Give it sections
 */
class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "navbar";

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("header", props, this.props.children);
    }
}

//Center if centered
class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "navbar-";

        if (this.props.center === true)className += "center";
        else className += "section";

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        return c("section", props, this.props.children);
    }
}


export { Navbar, Section };
