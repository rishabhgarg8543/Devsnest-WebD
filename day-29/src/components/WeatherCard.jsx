import React from 'react'
import { useSelector } from 'react-redux';
export default function WeatherCard() {
    const placedata=useSelector(state=>state.placedata);
    const theme = useSelector(state => state.theme);
    return (
        <div>
            <div>
                
        <div className="offset-md-4 col-12 col-md-4 weather">
          <div className={theme?"card dark":"card"}>
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
    )
}
