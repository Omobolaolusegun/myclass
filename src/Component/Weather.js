import axios from 'axios';
import React from 'react'

const Weather = () => {
    const [weather, setWeather]  = useState({});
            const [error, setError] = useState({})
            const [city, setCity] = useState("Lagos")
            const apikey = ""
            const [unit, setUnit] = useState('metric')
            const [isLoading, setIsLoading] = useState('')
            const changeInput = (e)=>{
             setCity(e.target.value)
            }

            const getData = ()=>{
                const url = "http://api.openweathermap.org/data/2.5/weather?q=${city}&{apikey}";
                axios.get(url)
                .then((res)=>{
                    console.log(res);
                    console.log(city);
                    setWeather(res.date);
                    setIsLoading(false)
                })
                .catch((error)=>{
                    setError(error)
                    console.log(error);
                })
            }
            console.log(weather);
    return (
        <div>
          <div className="m-3 p-3 shadow "></div>
          <input onChange={changeInput} type="text" className="mb-2 form-control"/>
          <button onClick={getData}>Fetch</button>
        </div>
    )
}

export default Weather
