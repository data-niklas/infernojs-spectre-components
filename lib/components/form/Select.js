import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'

/**
 * Type: contained, outlined, text, unelevated
 * Text
 * Size: Default, large, small or block
 */
class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndexes: [this.props.default || 0]
        }
    }


    render() {
        var that = this
        var props = {}

        var className = 'form-select'

        props = generateClassName(this.props, className)
        props = addEvents(this.props, props)

        if (this.props.multiple === true) props.multiple = true
        if (this.props.size) props.size = this.props.size

        var hasHint = this.props.hint ? true : false

        var options = this.props.options || []
        options = this.generateOptions(options, that, hasHint, c);

        if (hasHint) {
            options.splice(
                0,
                0,
                c(
                    'option',
                    { selected: 'selected', disabled: true, hidden: true },
                    this.props.hint
                )
            )
        }

        var listener = props.onchange;
        props.onchange = this.getChangeEvent(that, listener);

        return c('select', props, options)
    }
    indexSelected(index) {
        return this.state.selectedIndexes.indexOf(index) !== -1
    }
    getChangeEvent(that, listener) {
        return oEvent => {
            var children = Array.from(oEvent.target.childNodes)
            var indexes = Array.from(oEvent.target.selectedOptions).map(item => {
                return children.indexOf(item)
            });

            if (listener) listener(oEvent, indexes);
            that.setState({
                selectedIndexes: indexes
            });
        }
    }
    generateOptions(options, that, hasHint, c) {
        return options.map((option, index) => {
            var key, text
            if (typeof option === 'object') {
                key = option.key
                text = option.text
            } else {
                key = option
                text = option
            }
            var optionProps = { value: key }
            if (that.indexSelected(index + hasHint ? 1 : 0)) {
                optionProps.selected = 'selected'
            }

            return c('option', optionProps, text)
        });
    }
}

export default Select
