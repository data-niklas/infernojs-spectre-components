
import { Component } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';
import Link from '../Link.js';


/**
 */
class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "nav";
 
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);


        return c("ul", props, this.props.children);
    }
}

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : this.props.active || false
        }
        this.deactivate = this.deactivate.bind(this);
        this.activate = this.activate.bind(this);
    }

    deactivate(){
        this.setState({active:false});
    }
    activate(){
        this.setState({active:true});
    }

    render() {
        var props = {};

        var className = "nav-item" + (this.state.active ? ' active' : '');
 
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        var linkProps = {onClick : this.props.onClick,href:"javascript:void(0)"};

        if (props.index){
            linkProps.index = props.index;
            delete props.index;
        }


        return c("li", props, c(Link,linkProps,this.props.children));
    }
}


export {Nav, NavItem};
