import React from 'react';

export const Estadistica = ({ tareas }) => {

    const total = tareas.length;
    const completas = tareas.filter(tarea => tarea.completada).length;
    const progreso = total === 0 ? 0 : Math.round((completas / total) * 100);  

    return (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
                Estadistica de progreso
            </h3>
            <div className="grid grid-cols-3 gap-4">
                
                <div className="text-center">
                    <div className="text-2xl font-bold">{ total }</div>
                    <div className="text-sm opacity-90">Total</div>
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold">{ completas }</div>
                    <div className="text-sm opacity-90">Total</div>
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold">{ progreso }%</div>
                    <div className="text-sm opacity-90">Total</div>
                </div>
                
            </div>
            <div className="mt-4 bg-opacity-20 bg-white rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full transition-all duration-500" style={{ width: `${progreso}%` }}>

                </div>
            </div>


        </div>
    )
}