import { useState } from 'react';

export default function useSelectMonedas(label, opciones) {

    const [state, setState] = useState('');

    const SelectMonedas =()=>(
        <>
        <label className="p-2 text-black text-xl font-bold w-2/4 rounded" htmlFor="moneda">
          {label}
        </label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="p-4 rounded-lg my-2 border-2"
        >
          <option value="">--Seleccione--</option>
          {opciones.map((moneda) => (
            <option key={moneda.id} value={moneda.id}>
              {moneda.nombre}
            </option>
          ))}
        </select>
      </>

    )

    
          

  return [state, SelectMonedas];
}
