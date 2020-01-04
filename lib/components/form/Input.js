
import { Component, Fragment } from '../../inferno.js';
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js';

/**
 * Type: text, switch, checkbox, radio
 *  Checked: true / false
 *  Text: Can be some text
 *  Inline: true to make it inline
 *  Status: error / success
 *  Title: Some text to give it a title
 *  TextType: Some type email, password,  color, date, name, month, datetime-local, file, image, number, search, time, url, week
 */
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        if (this.props.checked) this.state.checked = this.props.checked;
        if (this.props.value) this.state.value = this.props.value;
    }


    render() {
        var that = this;
        var props = {};

        var type = this.props.type;
        var className = this.buildClassName(props, type);

        var icon = this.props.icon;
        if (this.props.loading === true) icon = "loading";
        delete this.props.loading;

        props = generateClassName(this.props, className, props);
        props = addEvents(this.props, props);

        if (this.props.placeholder) props.placeholder = this.props.placeholder;
        var listener = this.props.onInput;
        props.oninput = this.getChangeEvent(that, listener,type);

        var items = [];
        if (this.props.title) {
            items.push(this.getTitle());
        }
        if (this.props.hidden){
            props.hidden = true;
        }

        switch (type) {
            case "checkbox": case "switch": case "radio":

                var { classNameCopy, newProps } = this.setupOther(props, type);
                props = newProps;

                items.push(
                    c("label", { className: classNameCopy },
                        c("input", props, null),
                        c("i", { className: "form-icon" }, null),
                        this.props.children)
                );

                break;
            case "text":
                props = this.setupText(props);
                items.push(c("input", props, null));
                break;

            case "slider":
                props = this.setupSlider(props);
                items.push(c("input", props, null));
                break;
            default:
                if (this.props.multiple)props.multiple = true;
                if (this.props.directory)props.directory = true;
                if (this.props.webkitdirectory)props.webkitdirectory = true;

                items.push(c("input",props,null))
        }

        if (icon) {
            var lastIndex = items.length - 1;
            var { position, iconClass } = this.getIconArguments(icon);

            items[lastIndex] = c("div", { className: position },
                items[lastIndex],
                c("i", { className: iconClass }, null));

        }


        if (this.props.hint) {
            items.push(c("p", { className: "form-input-hint" }, this.props.hint));
        }


        return c(Fragment, null, items);
    }
    getChangeEvent(that, listener,type) {
        return oEvent => {
            var element = oEvent.target;
            if (type === "checkbox" || type === "switch" || type === "radio"){
                var checked = !that.state.checked;
                if (listener)listener(oEvent, checked);
                that.setState({
                    checked
                });
            }
            else{
                var value = element.value;
                if (listener)listener(oEvent, value);
                that.setState({
                    value
                });
            }
        }
    }
    buildClassName(props, type) {
        var className = "form-" + type;
        if (type === "text") className = "form-input";
        if (props.inline) className += " form-inline";
        if (props.status) className += " is-" + props.status;
        if (props.size === "large") className += " input-lg";
        else if (props.size === "small") className += " input-sm";
        return className;
    }
    getIconArguments(icon) {
        var position, iconClass;
        if (typeof icon === "string") {
            position = "has-icon-right";
        }
        else {
            position = "has-icon-" + icon.position || "right";
            icon = icon.icon;
        }

        if (icon === "loading") {
            iconClass = "form-icon loading";
        }
        else iconClass = "form-icon icon icon-" + icon;
        return { position, iconClass };
    }
    getTitle() {
        var titleProps = {};
        var titleClassName = "form-label";

        if (this.props.id) titleProps.for = this.props.id;
        if (this.props.size === "large") titleClassName += " label-lg";
        else if (this.props.size === "small") titleClassName += " label-sm";

        titleProps.className = titleClassName;

        return c("label", titleProps, this.props.title);
    }

    setupText(props) {

        if (this.state.value !== undefined) props.value = this.state.value;
        if (this.props.textType) props.type = this.props.textType;
        else props.type = "text";
        if (this.props.pattern) props.pattern = this.props.pattern;
        return props;
    }

    setupOther(props, type) {
        props.type = type === "switch" ? "checkbox" : type;

        var classNameCopy = props.className;
        delete props.className;

        if (this.state.checked !== undefined) props.checked = this.state.checked;
        return { classNameCopy, newProps:props };
    }
    setupSlider(props){
        props.type = "range";
        if (this.props.step)props.step = this.props.step;
        if (this.state.value !== undefined) props.value = this.state.value;
        if (this.props.min)props.min = this.props.min;
        if (this.props.max)props.max = this.props.max;
        return props;
    }
}


export default Input;

