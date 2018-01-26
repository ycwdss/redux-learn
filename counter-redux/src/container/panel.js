import React, {Component} from 'react';
import Counter from './../component/counter'
import Board from './../component/board'


class Panel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {action,data, panelName, addCounter} = this.props;

        return (
            <div className="panel">
                <button onClick={()=>addCounter(panelName)}>添加</button>
                {
                    data.map( (elt)=> {
                        return (
                            <Counter key={elt.id} {...action} {...elt} />
                        );
                    } )
                }
                <Board data={data} />
            </div>
        )
    }
}

export default Panel