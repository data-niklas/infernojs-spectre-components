import { Component } from '../../inferno.js'
import { createElement as c } from '../../inferno-create-element.js'
import { generateClassName, addEvents } from '../Utils.js'
import Link from '../Link.js'

/**
 * tab: current tab (1,2,3,4 --> beginning at 1)
 * onTab: listener which is called, when the tab changes, gets the index and key
 */
class Tabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
        tab: this.props.tab || 1
    }
  }

  render () {
    var props = {}

    var className = 'tab' + (this.props.block === true ? ' tab-block' : '')

    props = generateClassName(this.props, className)
    props = addEvents(this.props, props)

    var items = []

    var tabs = this.props.tabs
    var tab = this.state.tab

    for (let index = 0; index < tabs.length; index++) {
        const tabName = tabs[index];
        items.push(c("div",{className:"tab-item" + (tab === index + 1 ? ' active' : '')},c(Link,{href:"javascript:void(0)"},tabName)))
    }
    if (this.props.action)items.push(c("div",{className:"tab-item tab-action"},this.props.action));

    var listener = this.props.onTab;
    var that = this;
    props.onClick = (e)=>{
        if (e.target.tagName === 'A'){
            var inner = e.target.innerHTML;
            var index = tabs.indexOf(inner) + 1;

            if (index === that.state.tab)return;
            that.setState({
                tab: index
            })
            if (listener){
                listener(index,inner)
            }
        }
    }
    

    return c('div', props, items)
  }
}

export default Tabs
