
import { Component } from '../inferno.js';
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js';


/**
 * Use the tile-title or tile-subtitle to className to add titles or subtitles
 * Needs a body, can have an icon and/or an action
 * compact: if the tile is compact
 */
class Tile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var props = {};

        var className = "tile" + (this.props.compact === true ? ' tile-centered' : '');
 
        props = generateClassName(this.props, className);
        props = addEvents(this.props, props);

        var items = [];
        var icon = this.props.icon;
        if (icon){
            items.push(c("div",{className:"example-tile-icon"},c("i",{className:"icon icon-" + icon + " centered"})))
        }
        items.push(c("div",{className:"tile-content"},this.props.body))

        var action = this.props.action;
        if (action){
            items.push(c("div",{className:"tile-action"},action))
        }

        return c("div", props, items);
    }
}


export default Tile;
