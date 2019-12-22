import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 */
class Card extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var props = {}

        var className = 'card';

        props = generateClassName(this.props, className)
        props = addEvents(this.props, props)

        return c("div", props, this.props.children);
    }
        
}

/**
 * Type: Header, Image, Body, Footer
 */
class CardElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {}

        var type = this.props.type;
        var className = 'card-' + type;

        props = generateClassName(this.props, className)
        props = addEvents(this.props, props)

        var items = [];

        switch(type){
            case 'header':
                items.push(c("div",{className:"card-title h5"},this.props.title));
                if (this.props.subTitle)items.push(c("div",{className:"card-subtitle text-gray"},this.props.subTitle));
                break;
            case 'image':
                items.push(c("img",{src:this.props.src,className:"img-responsive"},null));
                break;
            default:
                items = this.props.children;
        }


        return c("div", props, items);
    }     
}

export {Card,CardElement}
