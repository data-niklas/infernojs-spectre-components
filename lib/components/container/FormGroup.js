
import {Component} from '../../inferno.js';
import {createElement as c} from '../../inferno-create-element.js'
import {generateClassName,addEvents} from '../Utils.js';


/**
 * Status: error, success
 */
class FormGroup extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var props = {};
        var className = "form-group";
        if (this.props.status){
            className += " has-" + this.props.status; 
        }
         props = generateClassName(this.props,className);
         props = addEvents(this.props,props);
        var form = c("div",props,this.props.children);

         if (this.props.disabled === true)return c("fieldset",{disabled:true},form);
        else return form;
    }
}


export default FormGroup;
