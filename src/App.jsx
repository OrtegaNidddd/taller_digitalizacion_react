import React, { useEffect, useRef, useState } from 'react'
import { HeaderTarea } from "./components/HeaderTarea.jsx"
import { Estadistica } from "./components/Estadistica.jsx"
import { Listado } from "./components/Listado.jsx"

function App() {
  const tareas = [
    {
      id: 1,
      titulo: "Aprender React",
      prioridad: "alta",
      categoria: "programacion",
      completada: true,
    },
    {
      id: 2,
      titulo: "Prueba",
      prioridad: "alta",
      categoria: "soporte",
      completada: false,
    },
  ]
  const [tarea,setTarea] =useState([])
  const [total, setTotal] = useState(0)
  const [newTarea, setNewTarea] = useState({
    titulo: "",
    prioridad: "media",
    categoria: "",
    descripcion: "",
    completada: false,
  })

  const tituloRef = useRef(null);
  useEffect(() => {
    if (tituloRef.current) {
      tituloRef.current.focus();
    }
  }, [])

  const agregarTarea = () => {
    if(newTarea.titulo.trim() === '' && newTarea.categoria.trim() === '' && newTarea.descripcion.trim() === ''){
      alert("Por favor complete todos los campos")
      return;
    }

    const objeto = {
      id: total + 1,
      titulo: newTarea.titulo,
      prioridad: newTarea.prioridad,
      categoria: newTarea.categoria,
      descripcion: newTarea.descripcion,
      completada: false,
    }
    setTarea(siguiente => [...siguiente, objeto])
    setTotal(total+1)
    setNewTarea({
      titulo: "",
      prioridad: "media",
      categoria: "",
      descripcion: "",
      completada: false,
    })
    console.log(tarea);
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-300 p-6">
        <div className="max-w-4xl mx-auto">
          <HeaderTarea />
          <Estadistica tareas={tareas} />
          <div className="mt-8 gap-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <i className="fa-solid fa-circle-plus"></i>
                <h2 className="text-2xl font-bold text-gray-800">
                  Agregar Tarea
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titulo
                  </label>
                  <input
                    ref={tituloRef}
                    type="text" 
                    value={newTarea.titulo}
                    onChange={(e) => setNewTarea({...newTarea, titulo: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ej: Crear Intefaz..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categorias
                  </label>
                  <input
                    type="text"
                    value={newTarea.categoria}
                    onChange={(e) => setNewTarea({...newTarea, categoria: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ej: Bug, Soporte, Reporte"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripcion
                  </label>
                  <textarea
                  value={newTarea.descripcion}
                  onChange={(e) => setNewTarea({...newTarea, descripcion: e.target.value})
                  }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  "
                    rows="4"
                    placeholder="EJ: Crear interfaz de usuario con React y Tailwind"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prioridad
                  </label>
                  <select 
                    value={newTarea.prioridad}
                    onChange={(e) => setNewTarea({...newTarea, prioridad: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ">
                    <option value="baja">Baja</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
                <button 
                  onClick={agregarTarea}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-950 text-white py-2 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out">
                  Agregar Tarea
                </button>
              </div>
            </div>
            <div>
              <Listado /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;