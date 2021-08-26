const counterReducer2 =(state = "",action)=>{
    if(action.type==="DEC_NUMBER")
    {
        state=action.payload;
        
    }
    return state;
}
export default counterReducer2;