import { Component } from '../inferno.js';
import Context from './Context.js'

class ResponsiveApp extends Component {
    constructor(props){
        super(props);
        Context.createCtx("screen",{
            width: window.outerWidth,
            height: window.outerHeight
        });
        window.onresize = ()=>{
            Context.setCtx("screen",{
                width: window.outerWidth,
                height: window.outerHeight
            })
        }
    }
}

export default ResponsiveApp;