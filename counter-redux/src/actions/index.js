

export function increment(id) {
    return {type: 'INCREMENT', id}
}
export const decrement = (id, value) => dispatch => {
    if( value === 0 ) return;
    dispatch({type: 'DECREMENT', id});

}

export const incrementIfOdd = (id, value) => dispatch =>{
    if( value%2 === 0 ) return;
    dispatch(increment(id))
}

export const incrementAsync = id => dispatch =>{
    setTimeout( ()=>{
        dispatch(increment(id));
    } , 1000);
}
