const nameSearch =(val)=>{
    return {
        type:"INC_NUMBER",payload:val
    }
}
const nameSearch2 =(val2)=>{
    return {
        type:"DEC_NUMBER",payload:val2
    }
}

export {nameSearch,nameSearch2};