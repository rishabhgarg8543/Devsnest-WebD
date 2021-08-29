
const updatePlace=(place)=> {
    return {
        type:"UPDATE_PLACE",
        payload:place,
}
}

const updatePlaceData=(place)=> {
    return (dispatch)=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=5f4724e93bd640489be113356212808&q=${place}`).then((res) => res.json())
    .then((data)=>{
        dispatch({
            type:"UPDATE_PLACE_DATA",
            payload:data,
        })
    });
    };
};

const toggleTheme = ()=>{
    return {
        type:"TOGGLE_THEME",
    };
};
export {updatePlace,updatePlaceData,toggleTheme};
