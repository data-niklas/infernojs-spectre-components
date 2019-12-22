
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';



class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "table";
        if (this.props.striped) className += " table-striped";
        if (this.props.hover) className += " table-hover";
        if (this.props.scrollable) className += " table-scroll";

        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        var isActive = this.props.isActive || ((index) => { return false });

        var items = [];

        if (this.props.head) {
            items.push(c("thead", null, c(TableRow, { data: this.props.head, active: this.props.headActive, type: "th" }, null)));
        }
        var body = [];
        for (var i = 0; i < this.props.rows.length; i++) {
            body.push(c(TableRow, { data: this.props.rows[i], active: isActive(i) }, null));
        }
        items.push(c("tbody", null, body));

        return c("table", props, items);
    }
}
class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        props = generateClassName(this.props, "");
        props = addEvents(this.props, props);

        var items = [];
        var type = this.props.type || "td";
        for (var data of this.props.data) {
            items.push(c(type, null, data));
        }
        return c("tr", props, items);
    }
}

export default Table;
