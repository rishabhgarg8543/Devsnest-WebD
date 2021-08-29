import React from 'react'
import {useSelector,useDispatch} from"react-redux";
import {updatePlace,updatePlaceData} from "../actions"
export default function Form() {
    const place =useSelector(state=>state.place);
    const theme =useSelector(state=>state.theme);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col-12 form">
                    <input type ="text" value={place} onChange={(e)=>{
                    // setPlace(e.target.value);
                        dispatch(updatePlace(e.target.value))
                    }
                    }/>
                <button className={theme?"btn btn-light":"btn btn-dark"} 
                onClick={
                    dispatch(updatePlaceData(place))
                }
                
                >Submit</button>
                </div>
                </div>
            </div>
        </div>
    )
}
