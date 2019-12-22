
import { Component, Fragment } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


class Code extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};
        props = generateClassName(passedProps, "");
        props = addEvents(this.props, props);

        var inner = c("code", props, this.props.children);

        if (this.props.lang) {
            var className = props.className;
            if (className.length === 0) className = "code";
            else className += " code";
            return c("pre", { className: className, "data-lang": this.props.lang }, inner);
        }
        else return inner;
    }
}

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return c("span", { className: "com" }, this.props.children);
    }
}
class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return c("span", { className: "tag" }, this.props.children);
    }
}
class Attribute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items = [];
        if (this.props.name) {
            items.push(c("span", { className: "atn" }, this.props.name));
        }
        if (this.props.value) {
            if (items.length > 0) items.push("c");
            items.push(c("span", { className: "atv" }, "&quot;" + this.props.value + "&quot;"));
        }

        return c(Fragment, null, items);
    }
}

export default { Code, Comment, Tag, Attribute };
