import {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  const [place, setPlace] = useState("")
  const [placedata, setplaceData] = useState("")
  const updatePlaceData=() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=5f4724e93bd640489be113356212808&q=${place}`).then((res) => res.json())
    .then((data)=>{setplaceData(data)}
    );
  };
  return (
    <div className="App">
     <div className="container">
      <div className="row">
      <div className="col-12 form">
        <input type ="text" value={place} onChange={(e)=>{
          setPlace(e.target.value);
        }}/>
        <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
        </div>
        <div className="offset-md-4 col-12 col-md-4 weather">
          <div className="card">
            { placedata.location ? (
              <div>
                <img src={placedata.current.condition.icon} alt="icon"></img>
                <div className="temp">{placedata.current.temp_c}°</div>
                <div className="desc">{placedata.current.condition.text}</div>
                <div className="place">{placedata.location.name}</div>
                <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind Now</div>
                        <div className="data">
                          34<span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placedata.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Percipitation</div>
                        <div className="data">
                          {placedata.current.precip_in}
                          <span className="unit">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ):(<h2>
            Page not found</h2>)}
          </div>

        </div>
        </div>

     </div>
    </div>
  );
}

export default App;
