import Formulario from "./components/Formulario"
import { useState, useEffect} from "react" 
import Resultado  from "./components/Resultado"

function App() {
  const [monedas,setMonedas] = useState({})
  const [resultado,setResultado] = useState([])
  const [cargando,setCargando] = useState(false)


  useEffect(()=>{
    if(Object.keys(monedas).length>0){
      const llamarApi = async()=>{
        setCargando(true)
        
          const api = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.cripto}&tsyms=${monedas.moneda}`
          const respuesta = await fetch(api)
          const resultado = await respuesta.json()
          setResultado(resultado.DISPLAY[monedas.cripto][monedas.moneda])
            setCargando(false)
        

      }
      llamarApi()

    }

  },[monedas])


  return (
    <>
    <div>
      <h1 className="font-bold text-center">Cotiza CriptoMonedas al instante</h1>
       <Formulario 
        setMonedas={setMonedas}
       />
       {cargando && <span className="w-12 h-12 border-4 border-white border-solid border-b-4  rounded-full inline-block animate-rotation box-border"></span>}
      { resultado.PRICE && <Resultado resultado={resultado}/>}
       
    </div>
   
      </>
  )
}

export default App
