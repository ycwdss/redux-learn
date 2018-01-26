import React,{Component} from 'react';

class Board extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let {data}=this.props;
        let HasAll = data.length ? data.every( elt => elt.value !== 0 )+'' : '';
        let max = data.length ? data.slice().sort( (a,b)=> b.value-a.value )[0].value : '';
        let allCount = data.length ? data.reduce( (accu, elt)=> accu+elt.value, 0 ) : '';
        return(
            <div className="board">
               <div>都操作了：{HasAll}</div>
               <div>最大值：{max}</div>
               <div>总和：{allCount}</div>
            </div>
        )
    }
}
export default Board