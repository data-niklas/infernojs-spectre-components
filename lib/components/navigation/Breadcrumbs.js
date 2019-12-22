import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 */
class Breadcrumbs extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var props = {}

        var className = 'breadcrumb';

        props = generateClassName(this.props, className)
        props = addEvents(this.props, props)

        var items = [];

        for (var breadcrumb of this.props.breadcrumbs){
            items.push(this.buildBreadcrumb(breadcrumb));
        }


        return c("ul", props, items);
    }
    
    buildBreadcrumb(breadcrumb) {
        var props = {};

        props = generateClassName(breadcrumb, "");
        props = addEvents(breadcrumb, props);

        if(breadcrumb.href)props.href = breadcrumb.href;

        return c("li",{className:"breadcrumb-item"},c("a",props,breadcrumb.text));
    }
        
}

export default Breadcrumbs
