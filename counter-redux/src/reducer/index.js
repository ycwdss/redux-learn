

//初始化state
const initState = {
    A: [],
    B: []
};

//reducer
export default function counter(state = initState, action){
    let {type, id, panelName} = action;

    switch (type) {
        case 'ADD_COUNTER':
            if (panelName === 'A') {
                return {
                    ...state, ... {
                        A: [...state.A, {
                            id: new Date().getTime(),
                            value: 0
                        }]
                    }
                }
            } else {
                return {
                    ...state, ... {
                        B: [...state.B, {
                            id: new Date().getTime(),
                            value: 0
                        }]
                    }
                }
            }
        case 'INCREMENT':
            return {
                A: state.A.map(elt => {
                    if (elt.id === id) {
                        elt.value++;
                    }
                    return elt;
                }),
                B: state.B.map(elt => {
                    if (elt.id === id) {
                        elt.value++;
                    }
                    return elt;
                }),
            }
        case 'DECREMENT':
            return {
                A: state.A.map(elt => {
                    if (elt.id === id) {
                        elt.value--;
                    }
                    return elt;
                }),
                B: state.B.map(elt => {
                    if (elt.id === id) {
                        elt.value--;
                    }
                    return elt;
                }),
            };

        default:
            return state;
    }
}

