import React, { useEffect, useMemo, useContext } from 'react';
import { useState } from "react";
import $ from 'jquery';



//llamada al contexto
const usuarioContext = React.createContext<any | null>(null)

export function UsuarioProvider() {

    const obj: any = {
        current: "",
        nextDay: "",
        currentParis: ""
    }

    //state
    const [dataWatherCity, setdataWatherCity] = useState(obj)


    //getApi

    // Llamada a los datos de Paris
    const getApiParis = () => {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=df6f92e6bff4109700fe750051aeda81",
            type: "GET",
            success: function (data) {

                const obj = {
                    currentParis: data,
                }
                setdataWatherCity((prev: any) => {
                    return {
                        ...prev, ...obj
                    }
                })
            },
            dataType: "json"
        });
    }

    //llamada a los datos actuales
    const getApiCurrent = () => {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=df6f92e6bff4109700fe750051aeda81",
            type: "GET",
            success: function (data) {

                const obj = {
                    current: data,
                }
                setdataWatherCity((prev: any) => {
                    return {
                        ...prev, ...obj
                    }
                })
            },
            dataType: "json"
        });
    }

    //Datos dias posteriosres
    const getApiNextdays = () => {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=bogota&appid=df6f92e6bff4109700fe750051aeda81",
            type: "GET",
            success: function (data) {

                const obj = {
                    nextDay: data,
                }
                setdataWatherCity((prev: any) => {
                    return {
                        ...prev, ...obj
                    }
                })
            },
            dataType: "json"
        });
    }


    // useEffect
    useEffect(() => {
        getApiCurrent()
        getApiNextdays()
        getApiParis()
    }, [])



    const value = useMemo(() => {
        return ({
            dataWatherCity
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataWatherCity])

    return value;

}

//Se engloba el contexto para que los datos puedan ser usados por todos
export const ProvideAuth = ({ children, ...props }: any) => {
    const auth = UsuarioProvider();
    return <usuarioContext.Provider value={auth} {...props} >{children}</usuarioContext.Provider>
}

//Se une el contexto con la store
export const useAuth = () => useContext(usuarioContext)





