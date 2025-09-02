import React from 'react'

export const Listado = () => {

    const [filtro, setFiltro] = React.useState("Todas")

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className='flex justify-start gap-4 items-center mb-4'>
                <i className="fa-solid fa-table-list"></i>
                <h1 className="text-2xl font-semibold text-gray-800">Listado</h1>
            </div>
            <div className='flex space-x-2 mb-6'>
                {
                    ["Todas", "Pendientes", "Completadas"].map(tipoFiltro => (
                        <button
                            key={tipoFiltro}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                                filtro === tipoFiltro ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                            }`}>
                                {tipoFiltro}
                        </button> 
                    ))
                }
            </div>
        </div>
    )
}
