

//img
import Bogota2 from "../stylesSCSS/img/Bogota2.png";
import tituloColombia from "../stylesSCSS/img/titulo.png"
import bogotaTitulo from "../stylesSCSS/img/bogota_titulo.png"
//stylesSCSS
import "../stylesSCSS/TopBanner.scss"
import { useAuth } from "../services_context_hooks/useContextApi"
import { useState, useEffect } from 'react';



function TopBanner() {

    //state
    const { dataWatherCity } = useAuth()
    const [state, setstate] = useState<[string, string] | any>()


    //function
    const date = (): void => {
        const fecha = new Date()
        const numeroDia = fecha.getDay()
        const dias = [
            'domingo',
            'lunes',
            'martes',
            'miércoles',
            'jueves',
            'viernes',
            'sábado',
        ];


        setstate([dias[numeroDia], fecha.toString()])
    }

    //useEffect
    useEffect(() => {
        date()

    }, [])

    return (
        <div className="ContainerTopBanner">
            <div className="DataWatherBogota">
                <h1><img id="titleCol" src={bogotaTitulo} alt="" /> <img id="titleCol" src={tituloColombia} alt="" /></h1>
                {dataWatherCity.current !== "" && <h2>{state[0].toUpperCase()}</h2>}
                {dataWatherCity.current !== "" && <h2>{state[1].slice(3, 21)}</h2>}
                {dataWatherCity.current !== "" && <img src={`http://openweathermap.org/img/wn/${dataWatherCity.current.weather[0].icon}@2x.png`} alt="" />}
                {dataWatherCity.current !== "" && <h3>{(dataWatherCity.current.main.temp - 273.15).toString().slice(0, 3)}°C</h3>}
            </div>

            <div className="ImgCityBogota">
                <img id="imgCityBogotaID" src={Bogota2} alt="Img not found" />
            </div>
        </div>
    )
}
export default TopBanner
