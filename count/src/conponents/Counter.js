import React, {Component} from 'react'

class Counter extends Component {

    render() {
        //从组件的props属性中导入四个方法和一个变量
        console.log(this.props)
        const {increment, incrementIfOdd, incrementAsync, decrement, counter} = this.props;
       //渲染组件，包括一个数字，四个按钮
        return (
            <div>
                <span>{counter}</span>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={incrementIfOdd}>奇数+</button>
                <button onClick={incrementAsync}>异步+</button>
            </div>
        )
    }
}

export default Counter