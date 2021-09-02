
import "../stylesSCSS/ParisWather.scss"
import { useAuth } from "../services_context_hooks/useContextApi"

function ParisWather() {

    const { dataWatherCity } = useAuth()
    return (
        <div className="ContainerParis">
            <h1> </h1>
            {dataWatherCity.currentParis !== "" && <h2>{dataWatherCity.currentParis.name}</h2>}
            {dataWatherCity.currentParis !== "" && <h2>{dataWatherCity.currentParis.weather[0].description}</h2>}
            {dataWatherCity.currentParis !== "" && <h2>{(dataWatherCity.currentParis.main.temp - 273.15).toString().slice(0, 2)}°C</h2>}
            {dataWatherCity.currentParis !== "" && <img src={`http://openweathermap.org/img/wn/${dataWatherCity.currentParis.weather[0].icon}@2x.png`} alt="" />}

        </div>
    )
}

export default ParisWather
