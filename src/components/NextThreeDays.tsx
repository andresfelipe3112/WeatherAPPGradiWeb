import { useAuth } from "../services_context_hooks/useContextApi"
import { useState, useEffect } from 'react';
import "../stylesSCSS/NextThreeDays.scss"


function NextThreeDays() {

    //state
    const { dataWatherCity } = useAuth()
    const [state, setstate] = useState<[string, string] | any>()
    const [state2, setstate2] = useState<[string, string] | any>()
    const [state3, setstate3] = useState<[string, string] | any>()



    const date = (): void => {
        const fecha = new Date()
        const numeroDia = fecha.getDay()



        console.log(fecha + "Fecha")
        console.log(numeroDia + "NúmeroDia");

        const dias = [

            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
            'domingo',
        ];

        setstate([dias[numeroDia > 6 ? numeroDia - 7 : numeroDia], fecha.toString().slice(4, 15)])
        setstate2([dias[numeroDia + 1 > 6 ? numeroDia + 1 - 7 : numeroDia + 1], fecha.toString().slice(4, 15)])
        setstate3([dias[numeroDia + 2 > 6 ? numeroDia + 2 - 7 : numeroDia + 2], fecha.toString().slice(4, 15)])
    }

    useEffect(() => {
        date()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className="ContainerNextThreeDays">
                {dataWatherCity.nextDay !== "" && <img src={`http://openweathermap.org/img/wn/${dataWatherCity.nextDay.list[0].weather[0].icon}@2x.png`} alt="" />}
                {dataWatherCity.nextDay !== "" && <h2>{state[0].toUpperCase()}</h2>}
                {dataWatherCity.nextDay !== "" && <h3>{(dataWatherCity.nextDay.list[0].main.temp_min - 273.15).toString().slice(0, 2)}°C / {(dataWatherCity.nextDay.list[5].main.temp_max - 273.15).toString().slice(0, 2)}°C</h3>}

            </div>

            <div className="ContainerNextThreeDays">
                {dataWatherCity.nextDay !== "" && <img src={`http://openweathermap.org/img/wn/${dataWatherCity.nextDay.list[9].weather[0].icon}@2x.png`} alt="" />}
                {dataWatherCity.nextDay !== "" && <h2>{state2[0].toUpperCase()}</h2>}
                {dataWatherCity.nextDay !== "" && <h3>{(dataWatherCity.nextDay.list[9].main.temp_min - 273.15).toString().slice(0, 2)}°C / {(dataWatherCity.nextDay.list[8].main.temp_max - 273.15).toString().slice(0, 2)}°C</h3>}
            </div>

            <div className="ContainerNextThreeDays">
                {dataWatherCity.nextDay !== "" && <img src={`http://openweathermap.org/img/wn/${dataWatherCity.nextDay.list[19].weather[0].icon}@2x.png`} alt="" />}
                {dataWatherCity.nextDay !== "" && <h2>{state3[0].toUpperCase()}</h2>}
                {dataWatherCity.nextDay !== "" && <h3>{(dataWatherCity.nextDay.list[19].main.temp_min - 273.15).toString().slice(0, 2)}°C / {(dataWatherCity.nextDay.list[0].main.temp_max - 273.15).toString().slice(0, 2)}°C</h3>}
            </div>
        </div>
    )
}

export default NextThreeDays
