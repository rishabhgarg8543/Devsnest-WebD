
const counterReducer =(state = "",action)=>{
    if(action.type==="INC_NUMBER")
    {
        state=action.payload;
        return state;
    }
    return state;
}

export default counterReducer;