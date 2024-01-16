/* eslint-disable react/prop-types */
export default function Resultado({resultado}){
    return(
        <div className="bg-emerald-300 rounded-full p-10 mt-12 w-full flex flex-col items-center">
            <h1 className="text-green-800">Valor máximo: {resultado.HIGHDAY} </h1>
            <h1 className="text-red-600">Valor minimo: {resultado.LOWDAY} </h1>
            <h2 className="font-bold">Última actualización: <span className="underline">{resultado.LASTUPDATE}</span></h2>


        </div>

    )
}