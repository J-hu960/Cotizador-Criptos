/* eslint-disable react/prop-types */
import useSelectMonedas from "../Hooks/useSelectMonedas"
import { monedas } from "../data/monedas"
import {useEffect, useState} from 'react'

export default function Formulario({setMonedas}){
    const [criptos, setCriptos] = useState([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas)
    const [cripto, SelectCriptos] = useSelectMonedas('Elige tu CriptoMoneda',criptos)

    useEffect(()=>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const llamarApi = async()=>{
            const response = await fetch(url)
            const result = await response.json()
            console.log(result.Data)
            const arrayCriptos = result.Data.map(coin=>{
                const obj={
                    id:coin.CoinInfo.Name,
                    nombre: coin.CoinInfo.FullName
                }
                return(obj) //Important el return per no perdre el objeto
            })
            setCriptos(arrayCriptos)

        }
        llamarApi()

    },[])

    function handleSubmit(e){
        e.preventDefault();
        if(moneda==='' || cripto===''){
            alert('Debes rellenar ambos campos')
            return
        }
        setMonedas({
            moneda,
            cripto
        })

    }
    return(
        <form className="flex flex-col" action="" onSubmit={handleSubmit}>
            <SelectMonedas />
            {moneda}
            <SelectCriptos />

            <input className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer border-0 w-full p-2 text-white font-semibold uppercase rounded-lg" value={'Cotizar'} type="submit" />
        </form>
    )
    
}