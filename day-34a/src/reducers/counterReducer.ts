interface ActionType {
    type: string;
}

const counterReducer = (state = 0, action :ActionType) => {
    switch(action.type) {
        case 'INC_COUNTER' :
            return state + 1;
        case 'DEC_COUNTER' :
            return state - 1;
        default:
            return state;
    }
}   

export default counterReducer;