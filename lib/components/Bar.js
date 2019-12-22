import { Component } from '../inferno.js'
import { createElement as c } from '../inferno-create-element.js'
import { generateClassName, addEvents } from './Utils.js'

/**
 */
class Bar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var props = {}

        var className = 'bar';

        var size = this.props.size;
        if (size) {
            switch (size) {
                case 's': className += " bar-sm"; break;
            }
        }

        props = generateClassName(this.props, className)
        props = addEvents(this.props, props)

        var items = [];

        if (this.props.value) {
            items.push(this.buildBarItem(this.props.value,false));
        }
        else if (this.props.percentage){
            items.push(this.buildBarItem(this.props.value,trze));
        }
        else if (this.props.values) {
            for (var value of this.props.values) {
                items.push(this.buildBarItem(value, false));
            }
        }
        else if (this.props.percentages) {
            for (var value of this.props.percentages) {
                items.push(this.buildBarItem(value, true));
            }
        }

        return c("div", props, items);
    }
    buildBarItem(obj, isPercentage) {
        var style = "";
        var min = this.props.min;
        var max = this.props.max;
        var props = {className:'bar-item'};

        if (typeof (obj) === 'object') {
            props = generateClassName(obj, props.className)
            props = addEvents(obj, props)
            .log(props)
            if (isPercentage){
                style = 'width:' + obj.percentage + '%;';
            }
            else {
                if (!(min && max)){
                    min = 0;
                    max = 100;
                }
                style = 'width:' + (obj.value - min) * 100 / (max - min) + '%;';
                props["aria-valuemin"] = min;
                props["aria-valuemax"] = max;
                props["aria-valuenow"] = obj.value;
            }
            style += 'color:' + obj.color + ';';
            style += 'background:' + obj.backgroundColor + ';';
        }
        else {
            if (isPercentage)style = 'width:' + obj + '%;';
            else{
                if (!(min && max)){
                    min = 0;
                    max = 100;
                }
                style = 'width:' + (obj - min) * 100 / (max - min) + '%;';
                props["aria-valuemin"] = min;
                props["aria-valuemax"] = max;
                props["aria-valuenow"] = obj;
            }
        }
        props.style = style;
        return c("div",props,null);
    }
}

export default Bar
