import React,{Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let {id,
            value,
            boundIncrement,
            boundDecrement,
            boundIncrementIfOdd,
            boundIncrementAsync
            } =this.props;
        return(
            <div className="counter">
                <button onClick={()=>boundDecrement(id)}>-</button>
                <span>{value}</span>
                <button onClick={()=>boundIncrement(id)}>+</button>
                <button onClick={()=>boundIncrementIfOdd(id,value)}>奇数</button>
                <button onClick={()=>boundIncrementAsync(id)}>异步</button>
            </div>
        )}

}

export default Counter

