import React,{Component} from 'react'
import Panel from './panel'

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {action,addCounter, state} = this.props;
        return(
            <div className="app">
                <Panel {...{
                    data:state.A,
                    addCounter,
                    action,
                    panelName: 'A'
                }}/>
                <Panel {...{
                    data:state.B,
                    addCounter,
                    action,
                    panelName: 'B'
                }}/>
            </div>
        )
    }
}
export default App